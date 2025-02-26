import 'dayjs/locale/zh-cn'
import React from 'react'
import * as minecraft from './minecraft/zh_cn.json'

export default {
  minecraft: minecraft as typeof minecraft & Record<string, string>,
  underlineName: 'zh-cn',
  muiName: 'zhCN',
  tip: '提示',
  noData: '暂无数据',
  pluginUpdate: '发现插件更新! 推荐立即更新!',
  wrongToken: '密钥错误或插件版本过旧, 最新版本为',
  reconnect: '正在尝试重新连接...',
  disconnected: '连接已断开!',
  failedToConnect: '无法连接到服务器!',
  actionSuccess: '操作成功!',
  actionFailed: '操作失败!',
  inputValue: '请输入要修改的值',
  invalidValue: '不合法的值!',
  history: '历史记录',
  unknown: '未知',
  more: '更多...',
  refresh: '刷新',
  reason: '理由',
  operations: '操作',
  unrecoverable: '不可恢复!',
  status: '状态',
  username: '游戏名',
  world: '世界',
  data: '数据',
  info: '信息',
  plugin: '插件',
  others: '其他',
  size: '大小',
  ms: '毫秒',
  secound: '秒',
  cause: '原因',
  unsupported: '不支持的操作!',
  itemEditor: {
    title: '物品编辑器',
    itemType: '类型',
    unknownEnchantment: '未知附魔',
    baseAttribute: '基础属性',
    count: '数量',
    damage: '耐久值',
    displayName: '物品名',
    lore: '物品描述',
    newEnchantment: '添加新附魔',
    newEnchantmentTitle: '请选择需要添加的附魔',
    level: '等级',
    clone: '克隆'
  },
  serverSwitch: {
    title: '连接到服务器',
    noServer: '你还没有连接过任何服务器!',
    wrongHostname: '请输入正确的连接地址!',
    content: '请选择或输入要连接的服务器地址.',
    connect: '连接'
  },
  time: {
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒'
  },
  config: {
    title: '设置',
    args: '虚拟机参数',
    isAikarFlags: '使用Aikar启动参数',
    serverConfig: '服务端设置',
    maxPlayers: '最大玩家数',
    spawnRadius: '出生点保护半径',
    whitelist: '白名单',
    motd: '服务器标语',
    theme: '主题设置',
    light: '亮色',
    system: '随系统',
    dark: '暗色',
    javaVersion: 'Java 版本',
    manufacturer: '制造商',
    model: '型号',
    operatingSystem: '操作系统',
    virtualMachine: '虚拟机',
    cpu: '处理器',
    pid: '进程ID',
    javaCount: 'Java 进程数'
  },
  terminal: {
    title: '终端',
    fatal: '严重',
    error: '错误',
    warn: '警告',
    info: '信息',
    debug: '调试',
    trace: '堆栈',
    expand: '展开',
    fold: '收起',
    sharing: '分享中...',
    confirmShare: '确认要分享这段日志吗',
    command: '命令'
  },
  dashboard: {
    title: '概览',
    onlinePlayers: '在线玩家',
    confirmKick: (name: any) => <>确认要将 {name} 踢出游戏吗?</>,
    version: '服务端版本',
    updateChecking: '检查更新中...',
    updateFailed: '获取失败, 点击重新获取',
    updated: '当前已为最新版',
    lastHour: '相比于上一小时',
    mspt: '每Tick耗时',
    uptime: '运行时间',
    memory: '内存占用',
    playersDistribution: '玩家分布',
    behinds: (version: number) => `当前已落后 ${version} 个版本!`
  },
  files: {
    title: '文件',
    wrongName: '文件名不合法!',
    exists: '文件已存在!',
    compress: '压缩文件',
    decompress: '解压文件',
    compressName: '请输入压缩后的文件名',
    unsupportedFormat: '文件格式不被支持!',
    notExists: '文件不存在!',
    tooBig: '文件太大了!',
    editor: '编辑器',
    newFile: '新文件',
    createFile: '新建文件',
    createFolder: '新建目录',
    dialogContent: '请输入文件名:',
    invalidName: '文件名不合法!',
    rename: '重命名',
    undo: '撤销',
    redo: '重做',
    save: '保存',
    delete: '删除',
    copy: '复制',
    paste: '粘贴',
    upload: '上传文件',
    download: '下载文件',
    pasting: '粘贴中...',
    uploading: '上传中...',
    downloading: '下载中...',
    compressing: '压缩中...',
    uncompressing: '解压中...',
    notSelected: '请先在左侧选择要编辑的文件',
    filesList: '文件列表',
    uploadTooBig: '文件超过128MB!',
    confirmDelete: (file: any) => <>确认要删除 {file} 吗?</>
  },
  openInv: {
    title: '背包',
    notSelected: '请先选择一名玩家!',
    whosBackpack: (name: string) => name + '的背包',
    whosEnderChest: (name: string) => name + '的末影箱'
  },
  playerList: {
    title: '玩家列表',
    details: '详细信息',
    hasNotPlayed: '该玩家还从未进入过服务器!',
    banned: '已被封禁',
    whitelisted: '白名单成员',
    op: '管理员',
    firstPlay: '首次登录',
    lastPlay: '首次登录',
    tnt: 'TNT放置次数',
    nameToSearch: '请输入你要查找的游戏名:',
    clickToAddWhitelist: '点击可将该玩家移出白名单',
    clickToRemoveWhitelist: '点击可将该玩家移出白名单',
    clickToBan: '点击可封禁该玩家',
    clickToPardon: '点击可解除该玩家的封禁',
    whosDetails: (name: string) => name + ' 的详细信息',
    confirmBan: (name: any) => <>确认要封禁 {name} 吗?</>,
    confirmPardon: (name: any) => <>确认要解除 {name} 的封禁吗?</>,
    confirmAddWhitelist: (name: any) => <>确认要将玩家 {name} 添加到白名单中吗?</>,
    confirmRemoveWhitelist: (name: any) => <>确认要将玩家 {name} 从白名单中移出吗?</>
  },
  plugins: {
    title: '插件',
    enable: '启用',
    name: '插件名',
    version: '版本',
    author: '作者',
    description: '简介',
    enablePlugin: '启用插件',
    disableForever: '永久禁用',
    delete: '删除插件',
    dependency: '依赖关系',
    categories: ['已安装', '未启用', '可选插件', '缺少的前置'],
    confirmDelete: (name: any) => <>确认要删除插件 {name} 吗?</>
  },
  scheduler: {
    title: '任务',
    newTask: '新任务',
    confirmDelete: '确认要删除这个任务吗?',
    editor: '任务编辑',
    content: '命令或文本信息',
    notSelected: '请先在左侧选择一个任务!',
    timer: '定时器',
    name: '任务名',
    whenIdle: '仅当没有玩家时执行'
  },
  vault: {
    title: '经济 权限 聊天',
    whosPermissionGroup: (name: string) => name + ' 的权限组',
    editorTitle: '权限节点查询及修改',
    permissionInput: '请输入要查询的权限节点',
    permission: '权限节点',
    removePermission: '移除该权限节点',
    addPermission: '增加该权限节点',
    permissionGroup: '权限组',
    groupName: '组名',
    defaultGroup: '默认权限组',
    prefix: '前缀',
    suffix: '后缀',
    balance: '经济',
    managePermissionGroup: '权限组管理',
    managePermission: '权限查询及修改'
  },
  worlds: {
    title: '世界',
    name: '世界名',
    alias: '别名',
    players: '玩家数',
    chunks: '区块数',
    entities: '实体数',
    tiles: '方块实体数',
    time: '时间',
    weather: '天气',
    save: '立即保存世界',
    allowAnimals: '动物生成',
    allowMonsters: '怪物生成',
    allowFlight: '飞行',
    autoHeal: '回血',
    hunger: '饥饿',
    viewDistance: '视距'
  },
  entityEditor: {
    title: '实体',
    customName: '名字',
    customNameVisible: '显示自定义名字',
    glowing: '发光',
    gravity: '受重力影响',
    invulnerable: '无敌',
    silent: '无声',
    container: '背包'
  },
  blockEditor: {
    title: '方块',
    container: '容器'
  },
  codeMirrorPhrases: {
    Yes: minecraft['gui.yes'],
    No: minecraft['gui.no'],
    All: minecraft['gui.all'],
    Stop: minecraft['gui.cancel'],
    'Search:': '搜索:',
    'With:': '替换为:',
    'Replace?': '确认替换?',
    'Replace all:': '全部替换:',
    'Replace with:': '替换为:',
    '(Use /re/ syntax for regexp search)': '(使用 /re/ 语法来使用正则表达式)'
  },
  profiler: {
    title: '性能',
    entities: '密集实体',
    threads: '线程',
    heap: '内存占用',
    summary: '汇总',
    plugins: '插件耗时',
    pluginsTitle: '插件耗时 (30秒内)',
    notStarted: '当前还未开始进行性能检测, 请点击右下角的按钮开始',
    cpu: '系统CPU使用率',
    readsAndWrites: '硬盘读写',
    network: '网络',
    reads: '读取',
    writes: '写入',
    recv: '接收',
    sent: '发送',
    temperature: 'CPU温度',
    cores: 'CPU各核心使用率',
    timingsCount: '次数',
    count: '个数',
    loadAndUnloadChunks: '区块加载/卸载',
    chunkLoads: '加载',
    chunkUnoads: '卸载',
    entitiesTick: '实体处理',
    tilesTick: '方块实体处理',
    timingsNotStarted: 'Timings 还没有开启!',
    className: '类名',
    classLoader: '类加载器',
    threadName: '线程名',
    state: '状态',
    stack: '堆栈',
    lock: '锁',
    action: '行为',
    costTime: '耗时',
    ofTick: '每刻',
    carbageCollection: '垃圾回收',
    memoryUsage: '内存使用状况',
    memoryUsageTypes: ['新', '旧'],
    serverThread: '服务器主线程',
    gcTime: '垃圾回收耗时',
    gcCount: '垃圾回收次数',
    crowdEntities: '密集实体的区块',
    crowdTiles: '密集方块实体的区块',
    globalEntities: '全服实体',
    globalTiles: '全服方块实体',
    events: '事件',
    tasks: '定时器',
    commands: '命令',
    lagTime: '总耗时',
    avgTime: '平均每次',
    pluginsEventsTime: '插件处理事件耗时',
    pluginsTasksTime: '插件处理定时器耗时',
    pluginsCommandsTime: '插件处理命令耗时',
    threadState: {
      NEW: '新创建',
      RUNNABLE: '运行中',
      BLOCKED: '阻塞',
      WAITING: '待唤醒',
      TIMED_WAITING: '待特定时间唤醒',
      TERMINATED: '已杀死'
    }
  }
}
