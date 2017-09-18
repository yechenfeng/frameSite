// 🍎🍎🍎🍎🍎🍎🍎🍎🍎 01 Node.js 起步 🍎🍎🍎🍎🍎🍎🍎🍎🍎<br />
// 🍠 【准备 Node.js】<br />
// 🍎🍎🍎 管理安装在系统上的 Node.js<br />
// LTS  长期支持版本
// current  当前最新版本
// Docker   下载不同node的镜像
// nvm  管理node，自由切换
    // brew install nvm
    // [[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh  # This loads NVM
    // nvm ls-remote(列出当前网上所有node版本)
    // 安装
        // nvm install v8.3.0(安装指定版本)
        // nvm install --lts(安装最新稳定版本)
        // nvm install node(安装最新版本)
    // nvm ls(查看系统安装的所有node)
    // node -v
    // nvm use v6.11.0(切换node版本)
// 🍎🍎🍎 创建 Node.js 项目<br />
// npm init(创建package.son文件)
// npm init -y(创建使用默认配置的package.json文件)
// rm -rf package.json(删除文件)
// npm install -g yarn(facebook替代npm的工具)
    // yarn init(创建package.son文件)
console.log('hello node ~');
// 🍎🍎🍎 使用不同版本的 Node.js<br />
// nvm run v6.11.0 index.js(使用此版本运行js)
// nvm exec v6.11.0 node -v(使用此版本执行命令)
// 使用文件.nvmrc
    // nvm run node -v(使用.nvmrc中的node配置版本执行命令)
// nvm use(切换node版本为.nvmrc中的node配置版本执行命令)
// 🍠 【使用模块】<br />
// 🍎🍎🍎 使用内置的 Node.js 模块<br />
const os = require('os');
console.log(os.hostname());
// 🍎🍎🍎 安装第三方 Node.js 模块<br />
// 例如，安装http请求模块
// npm install request --save
// 或
// yarn add request
    // modules有很多依赖，所以会有很多模块
// 🍎🍎🍎 使用第三方 Node.js 模块<br />
const request = require('request');
// request({
//     url: 'http://api.douban.com/v2/movie/top250',
//     json: true
// }, (error, response, body) => {
//     console.log(JSON.stringify(body, null, 2));
// });
// 🍎🍎🍎 创建与使用自定义 Node.js 模块<br />
const greeting = require('./src/greeting');
greeting.hello();
// 🍠 【项目】<br />
// 🍎🍎🍎 nodemon：监视应用的变化自动重启应用<br />
// 安装监视模块（模式：开发依赖）
    // yarn add nodemon --dev
// 监视文件，直观写法
    // ./node_modules/.bin/nodemon index.js
// 初始化，简易写法
    // "scripts": {
        // "start": "./node_modules/.bin/nodemon index.js"
    // },
// 初始化，简易用法
// npm start
// 🍎🍎🍎 Node.js 项目的版本控制<br />
// 安装 package.json 中的工具
    // npm install
// 安装 yarn.lock 中的工具
    // yarn install
// 版本控制
    // git init
    // 添加忽略文件列表（不提交至仓库） .gieignore
    // git add .
    // git status
    // git commit -m 'init'
//
// 🍌🍌🍌🍌🍌🍌🍌🍌🍌 02 Node.js 核心模块 🍌🍌🍌🍌🍌🍌🍌🍌🍌<br />
// 🍠 【准备】<br />
// 🍌🍌🍌 准备<br />
// npm start
// 🍠 【Events】<br />
// 🍌🍌🍌 Events<br />
// 发布订阅模式
// 电视剧有更新，用户收到通知，决定是否观看
// 🍌🍌🍌 使用事件：EventEmitter<br />
const EventEmitter = require('events');
class Player extends EventEmitter {};
var player = new Player();
player.on('play', () => { // play 就是事件
    console.log('正在播放');
});
player.emit('play');
// 🍌🍌🍌 事件的参数<br />
player.on('play2', (track) => {
    console.log(`正在播放：${track}`);
});
player.emit('play2', '野子');
// 🍌🍌🍌 只执行一次的事件监听器<br />
player.once('play3', (track) => { // once 只执行一次的事件监听器
    console.log(`正在播放：${track}`);
});
player.emit('play3', '野子');
player.emit('play3', '青花');
// 🍠 【File System】<br />
// 🍌🍌🍌 得到文件与目录的信息：stat<br />
const fs = require('fs');
fs.stat('index.js', (error, stats) => {
    if (error) {
        console.log(error);
    } else {
        console.log(stats);
        console.log(`是否是文件：${stats.isFile()}`);
        console.log(`是否是目录：${stats.isDirectory()}`);
    }
});
// 🍌🍌🍌 创建一个目录：mkdir<br />
// 🍌🍌🍌 创建文件并写入内容：writeFile, appendFile<br />
// 🍌🍌🍌 读取文件里的内容：readFile<br />
// 🍌🍌🍌 列出目录里的东西：readdir<br />
// 🍌🍌🍌 重命名目录或文件：rename<br />
// 🍌🍌🍌 删除目录与文件：rmdir, unlink<br />
// 🍠 【Stream】<br />
// 🍌🍌🍌 读取文件流<br />
const fs2 = require('fs');
var fileReadStream = fs2.createReadStream('data.json');
var count = 0;
fileReadStream.once('data', (chunk) => {
    console.log(chunk);
});
fileReadStream.on('data', (chunk) => {
    console.log(`${++count} 接收到：${chunk.length}`);
});
// 🍌🍌🍌 可读流的事件<br />
// 🍌🍌🍌 可写的文件流<br />
// 🍌🍌🍌 pipe<br />
// 🍌🍌🍌 链式使用 pipe<br />
// 🍠 【HTTP】<br />
// 🍌🍌🍌 request<br />
// 🍌🍌🍌 利用请求回来的数据<br />
// 🍌🍌🍌 创建服务器<br />
//
// 🌰🌰🌰🌰🌰🌰🌰🌰🌰 03 Node.js js：测试 🌰🌰🌰🌰🌰🌰🌰🌰🌰<br />
// 🍠 【准备】<br />
// 🌰🌰🌰 安装与准备<br />
// 🍠 【测试框架】<br />
// 🌰🌰🌰 mocha：测试框架<br />
// 🌰🌰🌰 mocha：安排测试之前与之后要做的事<br />
// 🍠 【断言】<br />
// 🌰🌰🌰 chai：断言库<br />
// 🌰🌰🌰 chai：should 风格的断言<br />
// 🌰🌰🌰 chai：expect 风格的断言<br />
// 🍠 【测试】<br />
// 🌰🌰🌰 写一个测试<br />
// 🌰🌰🌰 让测试通过<br />
// 🌰🌰🌰 测试异步的方法：setTimeout<br />
// 🌰🌰🌰 测试异步的方法：http<br />
// 🌰🌰🌰 测试方法的异常<br />
// 🍠 【Mock】<br />
// 🌰🌰🌰 Sinon：Spies 跟踪函数的调用<br />
// 🌰🌰🌰 Sinon：Stubs 模拟函数的行为<br />
//
// 🍐🍐🍐🍐🍐🍐🍐🍐🍐 04 npm：JavaScript 包管理 🍐🍐🍐🍐🍐🍐🍐🍐🍐<br />
// 🍠 【准备】<br />
// 🍐🍐🍐 写一个测试<br />
// 🍠 【使用】<br />
// 🍐🍐🍐 在全局范围内安装与删除包<br />
// 🍐🍐🍐 在本地项目内安装包<br />
// 🍐🍐🍐 安装指定版本的包<br />
// 🍐🍐🍐 npm 配置文件：package.json<br />
// 🍐🍐🍐 使用 packge.json<br />
// 🍐🍐🍐 更新本地安装的包<br />
// 🍐🍐🍐 使用快速的安装源：nrm<br />
//
// 🧀🧀🧀🧀🧀🧀🧀🧀🧀 05 Express 🧀🧀🧀🧀🧀🧀🧀🧀🧀<br />
// 🍠 【准备】<br />
// 🧀🧀🧀 准备<br />
// 🧀🧀🧀 安装 express<br />
// 🍠 【Express 应用】<br />
// 🧀🧀🧀 创建一个 Express 应用<br />
// 🧀🧀🧀 使用 Middleware：中间件<br />
// 🧀🧀🧀 使用 Views：视图<br />
// 🧀🧀🧀 定义 Route：路由<br />
// 🍠 【评论】<br />
// 🧀🧀🧀 发表评论<br />
// 🧀🧀🧀 显示评论列表<br />
//
// 🎂🎂🎂🎂🎂🎂🎂🎂🎂 06 MongoDB 🎂🎂🎂🎂🎂🎂🎂🎂🎂<br />
// 🍠 【准备】<br />
// 🎂🎂🎂 创建一个 mongo 容器<br />
// 🎂🎂🎂 与数据库交互的界面：mongo shell<br />
// 🍠 【CRUD】<br />
// 🎂🎂🎂 插入文档：insert<br />
// 🎂🎂🎂 修改文档：update<br />
// 🎂🎂🎂 删除文档：remove<br />
// 🍠 【查询】<br />
// 🎂🎂🎂 查询文档<br />
// 🎂🎂🎂 查询文档并限制返回的字段<br />
// 🎂🎂🎂 指针方法：跳过, 限制, 排序<br />
// 🎂🎂🎂 查询操作符<br />
// 🎂🎂🎂 查询操作符：包含与不包含 - $in 与 $nin<br />
//
// ☕️☕️☕️☕️☕️☕️☕️☕️☕️ 07 Node.js 与 MongoDB ☕️☕️☕️☕️☕️☕️☕️☕️☕️<br />
// 🍠 【准备】<br />
// ☕️☕️☕️ 安装 MongoDB<br />
// ☕️☕️☕️ MongoDB 图形化管理软件 Robo 3t<br />
// 🍠 【Mongoose】<br />
// ☕️☕️☕️ Mongoose<br />
// ☕️☕️☕️ 连接到 MongoDB 数据库<br />
// ☕️☕️☕️ Schema 与数据模型<br />
// 🍠 【CRUD】<br />
// ☕️☕️☕️ 使用模型把数据保存到数据库里<br />
// ☕️☕️☕️ 读取数据库里的数据<br />
// ☕️☕️☕️ insertMany：同时插入多个文档<br />
// ☕️☕️☕️ 查询<br />
// ☕️☕️☕️ 更新<br />
// ☕️☕️☕️ 删除<br />
//
// 🍵🍵🍵🍵🍵🍵🍵🍵🍵 08 Node.js：REST 接口 🍵🍵🍵🍵🍵🍵🍵🍵🍵<br />
// 🍠 【准备】<br />
// 🍵🍵🍵 用 Express 创建服务器<br />
// 🍠 【路由】<br />
// 🍵🍵🍵 路由 Routes<br />
// 🍵🍵🍵 控制器 Controllers<br />
// 🍠 【REST】<br />
// 🍵🍵🍵 资源列表接口：GET api/events<br />
// 🍵🍵🍵 创建资源接口：POST api/events<br />
// 🍵🍵🍵 单个资源接口：GET api/events/:id<br />
// 🍵🍵🍵 单个资源更新接口：PATCH api/events/:id<br />
// 🍵🍵🍵 单个资源删除接口：DELETE api/events/:id<br />
//
// 😊😊😊😊😊😊😊😊😊 09 Socket.io 😊😊😊😊😊😊😊😊😊<br />
// 😊😊😊 准备<br />
// 😊😊😊 视图<br />
// 😊😊😊 集成 Socket.IO<br />
// 😊😊😊 连接与断开<br />
// 😊😊😊 发送接收事件与数据<br />
// 😊😊😊 广播<br />
//
// 🍇🍇🍇🍇🍇🍇🍇🍇🍇 10 JWT：JSON Web Token 🍇🍇🍇🍇🍇🍇🍇🍇🍇<br />
// 🍠 【介绍】<br />
// 🍇🍇🍇 JWT：JSON Web Token<br />
// 🍇🍇🍇 JWT 的组成<br />
// 🍠 【签发与验证】<br />
// 🍇🍇🍇 创建与签发 JWT<br />
// 🍇🍇🍇 验证与解码 JWT<br />
// 🍠 【RS256】<br />
// 🍇🍇🍇 用 RS256 算法签发 JWT<br />
// 🍇🍇🍇 用 RS256 算法验证 JWT<br />
//
// 😤😤😤😤😤😤😤😤😤 11 Node.js：基于 Token 的身份验证 😤😤😤😤😤😤😤😤😤<br />
// 🍠 【介绍与准备】<br />
// 😤😤😤 身份验证<br />
// 😤😤😤 准备<br />
// 🍠 【用户模型】<br />
// 😤😤😤 用户模型<br />
// 😤😤😤 用户路由与控制器<br />
// 🍠 【注册】<br />
// 😤😤😤 注册用户<br />
// 😤😤😤 hash 用户密码<br />
// 😤😤😤 bcrypt：加 salt 的 hash<br />
// 😤😤😤 存储 hash 之后的密码<br />
// 🍠 【身份验证】<br />
// 😤😤😤 身份验证与签发 Token<br />
// 😤😤😤 身份验证的 Middleware<br />
//
