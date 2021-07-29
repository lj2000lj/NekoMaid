import React, { useState, useEffect } from 'react'
import { HelpOutline } from '@material-ui/icons'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Paper, Tooltip, Drawer,
  Box } from '@material-ui/core'
import { useGlobalData, usePlugin } from '../Context'
import { minecraft } from '../../languages/zh_CN'
import { parseComponent } from '../utils'
import MojangSON, { parse } from 'nbt-ts'
import * as icons from '../../minecraftIcons.json'

export const isBlock = (name: string) => ('item.minecraft.' + name) in minecraft
export const getName = (name: string) => (minecraft as any)['item.minecraft.' + name] || (minecraft as any)['block.minecraft.' + name]

export interface Enchantment {
  id: string
  lvl: MojangSON.Short
}
export interface Display {
  Name?: string
  Color?: MojangSON.Int
  Lore?: string[]
}
export interface AttributeModifier {
  Operation: MojangSON.Byte
  Amount: MojangSON.Float
  UUID: string
  Slot: string
  AttributeName: string
  Name: string
}
export interface Tag {
  Damage: MojangSON.Int
  Enchantments?: Enchantment[]
  display?: Display
  AttributeModifiers?: AttributeModifier[]
  Unbreakable?: MojangSON.Byte
  SkullOwner?: string
}

export interface NBT {
  Count: MojangSON.Byte
  id: string
  tag?: Tag
}

export interface Item {
  type: string
  icon?: string
  hasEnchants: boolean
  amount: number
  nbt?: string
}

export enum InvType {
  // eslint-disable-next-line no-unused-vars
  PLAYER = 'PLAYER',
  // eslint-disable-next-line no-unused-vars
  ENDER_CHEST = 'ENDER_CHEST',
  // eslint-disable-next-line no-unused-vars
  GLOBAL_ITEMS = 'GLOBAL_ITEMS'
}

export const ItemViewer: React.FC<{
  item?: Item | null
  data?: any
  onDrag?: (data: any) => void
  onDrop?: (item: Item, data: any) => void
}> = ({ item, data, onDrag, onDrop }) => {
  const globalData = useGlobalData()
  const lowerCase = item ? item.type.toLowerCase() : ''
  const type = item ? item.icon || lowerCase : ''
  const hasEnchants = item?.hasEnchants && type in icons
  const nbt: NBT | null = item?.nbt ? parse(item.nbt) as any as NBT : null
  const elm = <Paper
    onDragOver={globalData.hasNBTAPI && onDrop
      ? e => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
      }
      : undefined}
    onDrop={globalData.hasNBTAPI && onDrop
      ? e => {
        e.preventDefault()
        const obj = JSON.parse(e.dataTransfer.getData('application/json'))
        if (obj.item) onDrop(obj.item, obj.id)
      }
      : undefined}
    sx={{
      width: '40px',
      height: '40px',
      display: 'inline-block',
      margin: 0.5,
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)',
      '& span': {
        position: 'absolute',
        right: 2,
        bottom: -5,
        textShadow: theme => theme.palette.mode === 'light'
          ? '#fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0'
          : '#000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0'
      }
    }}
  >
    {item && <div
      draggable={!!onDrag}
      onDragStart={onDrag
        ? e => {
          e.dataTransfer.effectAllowed = 'copyMove'
          e.dataTransfer.setData('application/json', JSON.stringify({ item, data }))
          onDrag(data)
        }
        : undefined}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundSize: 'cover',
        imageRendering: 'pixelated',
        filter: hasEnchants ? 'brightness(1.5)' : undefined,
        WebkitMaskSize: 'cover',
        maskImage: !hasEnchants && type in icons ? `url(/icons/minecraft/${type}.png)` : undefined,
        WebkitMaskImage: !hasEnchants && type in icons ? `url(/icons/minecraft/${type}.png)` : undefined,
        backgroundImage: item && type in icons ? `url(/icons/minecraft/${type}.png)` : undefined
      }}
    >
      {item && !(type in icons) && <HelpOutline sx={{ position: 'absolute', left: 8, top: 8 }} />}
      {hasEnchants && <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.5,
        WebkitMaskSize: 'cover',
        filter: 'blur(1px) brightness(1.7)',
        maskImage: `url(/icons/minecraft/${type}.png)`,
        WebkitMaskImage: `url(/icons/minecraft/${type}.png)`,
        animation: 'enchants-animation 6s infinite linear',
        backgroundPositionY: 128,
        backgroundImage: 'url(/icons/minecraft/enchanted_item_glint.png)'
      }} />}
    </div>}
    {item && item.amount > 1 ? <span>{item.amount}</span> : null}
  </Paper>
  const nbtTexts = nbt
    ? <>
      {nbt.tag?.display?.Lore?.map((it, i) => <React.Fragment key={i}>{parseComponent(it)}<br /></React.Fragment>)}
      {nbt.tag?.Enchantments?.length
        ? nbt.tag?.Enchantments.map((it, i) => <React.Fragment key={i}><br />
          {(minecraft as any)['enchantment.' + it.id.replace(/:/g, '.')] || '未知附魔'} {it.lvl.value}
        </React.Fragment>)
        : null}
    </>
    : null
  return item
    ? <Tooltip title={<>
      <h3 style={{ margin: 0 }}>{nbt?.tag?.display?.Name ? parseComponent(JSON.parse(nbt.tag.display.Name)) : getName(lowerCase)}</h3>
      {nbtTexts}
    </>}>{elm}</Tooltip>
    : elm
}

export const GlobalItems: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {
  const [flag, update] = useState(0)
  const [copyItemLeft, setCopyItemLeft] = useState<Item | undefined>()
  const [copyItemRight, setCopyItemRight] = useState<Item | undefined>()
  const items: Array<Item | undefined> = JSON.parse(localStorage.getItem('NekoMaid:items') || '[]')
  const save = () => {
    localStorage.setItem('NekoMaid:items', JSON.stringify(items))
    process.nextTick(update, flag + 1)
  }
  return <Drawer anchor='bottom' variant='persistent' elevation={16} open={open} PaperProps={{ elevation: 16 }}>
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', paddingBottom: 0, alignItems: 'center' }}>
      <ItemViewer
        item={copyItemLeft}
        data={{ type: InvType.GLOBAL_ITEMS }}
        onDrag={() => process.nextTick(setCopyItemLeft)}
        onDrop={it => {
          setCopyItemLeft(it)
          setCopyItemRight(it)
        }}
      />&nbsp;{'< 克隆 >'}&nbsp;<ItemViewer
        item={copyItemRight}
        data={{ type: InvType.GLOBAL_ITEMS }}
        onDrag={() => process.nextTick(setCopyItemRight)}
        onDrop={it => {
          setCopyItemLeft(it)
          setCopyItemRight(it)
        }}
      />
    </Box>
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {Array.from({ length: 14 }, (_, i) => <ItemViewer
        key={i}
        item={items[i]}
        data={{ type: InvType.GLOBAL_ITEMS }}
        onDrag={() => {
          items[i] = undefined
          save()
          process.nextTick(onClose)
        }}
        onDrop={it => {
          items[i] = it
          save()
        }}
      />)}
    </Box>
  </Drawer>
}

const ItemEditor: React.FC<{ onClose: () => void, open: boolean }> = ({ onClose, open }) => {
  const plugin = usePlugin()
  useState<Item | undefined>()
  useEffect(() => {
    plugin.emit('item:create', console.log, 'NETHERITE_AXE')
  }, [])
  return <Dialog open={open} onClose={onClose}>
    <DialogTitle>物品编辑器</DialogTitle>
    <DialogContent>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>关闭</Button>
      <Button onClick={onClose} autoFocus>确认</Button>
    </DialogActions>
  </Dialog>
}

export default ItemEditor
