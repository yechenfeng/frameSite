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
                // nvm install v8.9.2(安装指定版本)
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
        console.log('======================== hello node ========================');
// 🍎🍎🍎 使用不同版本的 Node.js<br />
        // nvm run v6.11.0 index.js(使用此版本运行js)
        // nvm exec v6.11.0 node -v(使用此版本执行命令)
        // 使用文件.nvmrc
            // nvm run node -v(使用.nvmrc中的node配置版本执行命令)
        // nvm use(切换node版本为.nvmrc中的node配置版本执行命令)
        // 🍠 【使用模块】<br />
// 🍎🍎🍎 使用内置的 Node.js 模块<br />
        const os = require('os');
        console.log('******' + os.hostname());
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
        //     console.log('******' + JSON.stringify(body, null, 2));
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
            console.log('******' + '正在播放');
        });
        player.emit('play');
// 🍌🍌🍌 事件的参数<br />
        player.on('play2', (track) => {
            console.log('******' + `正在播放：${track}`);
        });
        player.emit('play2', '野子');
// 🍌🍌🍌 只执行一次的事件监听器<br />
        player.once('play3', (track) => { // once 只执行一次的事件监听器
            console.log('******' + `正在播放：${track}`);
        });
        player.emit('play3', '野子');
        player.emit('play3', '青花');
// 🍠 【File System】<br />
// 🍌🍌🍌 得到文件与目录的信息：stat<br />
        const fs = require('fs');
        fs.stat('index.js', (error, stats) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + stats);
                console.log('******' + `是否是文件：${stats.isFile()}`);
                console.log('******' + `是否是目录：${stats.isDirectory()}`);
            }
        });
// 🍌🍌🍌 创建一个目录：mkdir<br />
        fs.mkdir('logs', (error) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过mkdir成功创建目录：logs');
            }
        });
// 🍌🍌🍌 创建文件并写入内容：writeFile, appendFile<br />
        fs.writeFile('logs/greeting.log', 'hello \n', (error) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过writeFile成功写入文件');
            }
        });
        fs.appendFile('logs/greeting.log', 'hola \n', (error) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过appendFile成功写入文件');
            }
        });
// 🍌🍌🍌 读取文件里的内容：readFile<br />
        fs.readFile('logs/greeting.log', 'utf-8', (error, data) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过readFile读取文件里的内容：' + data);
            }
        });
// 🍌🍌🍌 列出目录里的东西：readdir<br />
        fs.readdir('logs', (error, files) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过readdir列出目录里的东西：' + files);
            }
        });
// 🍌🍌🍌 重命名目录或文件：rename<br />
        fs.rename('logs/greeting.log', 'logs/hello.log', (error) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过rename重命名目录或文件成功');
            }
        });
// 🍌🍌🍌 删除目录与文件：rmdir, unlink<br />
    fs.readdirSync('logs').map((file) => {
        fs.unlink(`logs/${file}`, (error) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + `通过unlink删除文件：${file}`);
            }
        });
    });
    fs.rmdir('logs', (error) => {
        if (error) {
            console.log('******' + error);
        } else {
            console.log('******' + '通过rmdir删除目录');
        }
    });
// 🍠 【Stream】<br />
// 🍌🍌🍌 读取文件流<br />
        var fileReadStream = fs.createReadStream('data.json');
        var count = 0;
        fileReadStream.once('data', (chunk) => {
            console.log('******' + chunk);
        });
        fileReadStream.on('data', (chunk) => {
            console.log('******' + `${++count} 接收到：${chunk.length}`);
        });
// 🍌🍌🍌 可读流的事件<br />
        //
// 🍌🍌🍌 可写的文件流<br />
        //
// 🍌🍌🍌 pipe<br />
        //
// 🍌🍌🍌 链式使用 pipe<br />
        //
// 🍠 【HTTP】<br />
// 🍌🍌🍌 request<br />
        const http = require('http');
        var options = {
            protocol: 'http:',
            hostname: 'api.douban.com',
            port: '80',
            method: 'GET',
            path: '/v2/movie/top250'
        };
        // var request2 = http.request(options, (response) => {
        //     console.log('******' + response);
        //     console.log('******' + response.statusCode);
        //     console.log('******' + response.headers);
        // });
        // request2.on('error', (error) =>{
        //     console.log('******' + error);
        // });
        // request2.end();
// 🍌🍌🍌 利用请求回来的数据<br />
        //
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
        // 本目录创建文件夹TECH_Express
        // 创建空的配置文件
            // npm init -y
            // or(用yarn的方式更好，出错概率较低)
            // yarn init
        // 安装nodemon babel-cli babel-preset-es2015 babel-preset-stage-0
            // npm install nodemon babel-cli babel-preset-es2015 babel-preset-stage-0 -y
            // or(用yarn的方式更好，出错概率较低)
            // yarn add nodemon
            // yarn add babel-cli
            // yarn add babel-preset-es2015
            // yarn add babel-preset-stage-0
        // 打开项目
        // 编辑package.json
            // ./node_modules/.bin/nodemon --exec babel-node index.js
            // or
            // npm start
// 🧀🧀🧀 安装 express<br />
        // 查看express版本
            // npm view express versions --json
        // 安装express
            // npm install 5.0.0-alpha.6 --save
            // or
            // yarn add express (这是安装非alpha版本)
// 🍠 【Express 应用】<br />
// 🧀🧀🧀 创建一个 Express 应用<br />
        // 创建与编辑index.js
// 🧀🧀🧀 使用 Middleware：中间件<br />
        // npm install morgan --save
        // yarn add morgan
        // 编辑index.js
            // morgan是记录请求日志的中间件
            // import morgan from 'morgan'
            // app.use(morgan('dev'))
// 🧀🧀🧀 使用 Views：视图<br />
        //
// 🧀🧀🧀 定义 Route：路由<br />
        //
// 🍠 【评论】<br />
// 🧀🧀🧀 发表评论<br />
        //
// 🧀🧀🧀 显示评论列表<br />
        //
// 🎂🎂🎂🎂🎂🎂🎂🎂🎂 06 MongoDB 🎂🎂🎂🎂🎂🎂🎂🎂🎂<br />
// 🍠 【准备】<br />
// 🎂🎂🎂 创建一个 mongo 容器<br />
        // 在任何想使用MongoDB的地方安装
        // 使用docker mongo镜像 创建在后台运行的容器
            // http://www.daocloud.io/
            // docker run -d --name myMongo mongo
        // 进入容器里面，MongoDB数据库已经启动
            // docker exec -it myMongo bash
// 🎂🎂🎂 与数据库交互的界面：mongo shell<br />
        // 进入 mongo shell
            // mongo
        // 帮助
            // help
        // 当前使用的数据库
            // db
        // 切换数据库
            // use chenfeng-mongo
            // db
        // 退出
            // exit
// 🍠 【CRUD】<br />
// 🎂🎂🎂 插入文档：insert<br />
        db.albums.insertOne({title: '双节棍'})
        db.albums.find()
        db.albums.insertMany([{title: '夜曲'}, {title: '星晴'}])
        db.albums.find()
        db.albums.insert([{title: '七里香'}, {title: '菊花台'}])
        db.albums.find()
// 🎂🎂🎂 修改文档：update<br />
        db.albums.updateMany(
            {},
            {
                $set: {artist: 'Jay Chou'}
            }
        )
        db.albums.find()
        db.albums.updateOne(
            {title: '不再犹豫'},
            {
                $set: {artist: 'Beyond'}
            }
        )
        db.albums.find()
// 🎂🎂🎂 删除文档：remove<br />
        db.albums.find()
        db.albums.deleteOne({atrist: 'Beyond'})
        db.albums.find()
        db.albums.remove({atrist: 'Beyond'}, true)
        db.albums.find()
        db.albums.deleteMany({atrist: 'Beyond'})
        db.albums.find()
        db.albums.remove({})
        db.albums.find()
// 🍠 【查询】<br />
// 🎂🎂🎂 查询文档<br />
        // 使用PostMan请求数据
        // http://api.douban.com/v2/movie/top250
        db.movies.insertMany(...)
        db.movies.find()
// 🎂🎂🎂 查询文档并限制返回的字段<br />
        // 返回year为1994的电影，返回结果只包含title和year这两个字段
        db.movies.find({year: '1994'}, {title: 1, year: 1})
        // 返回year为1994的电影，返回结果只包含title和year这两个字段，不包含_id这个字段
        db.movies.find({year: '1994'}, {title: 1, year: 1, _id: 0})
// 🎂🎂🎂 指针方法：跳过, 限制, 排序<br />
        db.movies.find({}, {title: 1, year: 1, 'rating.average': 1, _id: 0})
        // 返回的数量
        db.movies.find({}, {title: 1, year: 1, 'rating.average': 1, _id: 0}).size()
        // 跳过前10
        db.movies.find({}, {title: 1, year: 1, 'rating.average': 1, _id: 0}).skip(10)
        // 限制返回个数为3
        db.movies.find({}, {title: 1, year: 1, 'rating.average': 1, _id: 0}).limit(3)
        // 按照升序排列
        db.movies.find({}, {title: 1, year: 1, 'rating.average': 1, _id: 0}).sort({'rating.average': 1})
// 🎂🎂🎂 查询操作符<br />
        // 大于9.5
        db.movies.find({'rating.average': {$gt: 9.5}}, {title: 1, 'rating.average': 1, _id: 0})
        // 小于9.5
        db.movies.find({'rating.average': {$lt: 9.5}}, {title: 1, 'rating.average': 1, _id: 0})
// 🎂🎂🎂 查询操作符：包含与不包含 - $in 与 $nin<br />
        // 包含
        db.movies.find({genres: {$in: ['犯罪']}}, {title: 1, genres: 1, _id: 0})
        db.movies.find({genres: {$in: ['犯罪', '剧情']}}, {title: 1, genres: 1, _id: 0})
        // 不包含
        db.movies.find({genres: {$nin: ['犯罪', '剧情']}}, {title: 1, genres: 1, _id: 0})
// ☕️☕️☕️☕️☕️☕️☕️☕️☕️ 07 Node.js 与 MongoDB ☕️☕️☕️☕️☕️☕️☕️☕️☕️<br />
// 🍠 【准备】<br />
// ☕️☕️☕️ 安装 MongoDB<br />
        // 安装
            // brew install mongodb
        // 启动
            // mongod
            // sudo mkdir -p /data/db
            // sudo chown -R howbuy2017 /data/db
            // mongod
// ☕️☕️☕️ MongoDB 图形化管理软件 Robo 3t<br />
        // brew search robo
        // brew install caskroom/cask/robo-3t
// 🍠 【Mongoose】<br />
// ☕️☕️☕️ Mongoose<br />
        // 用代码控制数据库
        // 使用Mongoose，将node于mongo联系起来
            // yarn add mongoose (必须sudo)
// ☕️☕️☕️ 连接到 MongoDB 数据库<br />
        // 确定mongodb已经运行
            // mongod
        // 创建与编辑 database.js
        // node index_db.js
// ☕️☕️☕️ Schema 与数据模型<br />
        // 集合
        // 数据表
        // 文档 记录
        // 描述这些文档的 叫Schema(记录的值、类型、最值)
        // 基于Schema，可以创建Model
        // 有了Model，可以使用模型方法去处理，对应集合中的文档
        // 创建与编辑 event.js
// 🍠 【CRUD】<br />
// ☕️☕️☕️ 使用模型把数据保存到数据库里<br />
        // 创建与编辑 index_model.js
        // node index_model.js
// ☕️☕️☕️ 读取数据库里的数据<br />
        // 创建并编辑create.js
        // 创建并编辑read.js
        // node database/read.js
// ☕️☕️☕️ insertMany：同时插入多个文档<br />
        // 创建并编辑SimpleEvents.json (注意需要符合models/events.js里面的值类型规则)
        // 创建并编辑SimpleEvents.js
        // node database/seeds/SimpleEvents.js
        // node database/read.js
// ☕️☕️☕️ 查询<br />
        // 编辑read.js
        // find
        // findOne
        // findById
        // node database/read.js
// ☕️☕️☕️ 更新<br />
        // 创建并编辑update.js
        // node database/read.js
// ☕️☕️☕️ 删除<br />
        // 创建并编辑delete.js
        // node database/read.js
// 🍵🍵🍵🍵🍵🍵🍵🍵🍵 08 Node.js：REST 接口 🍵🍵🍵🍵🍵🍵🍵🍵🍵<br />
// 🍠 【准备】<br />
        // yarn add express
// 🍵🍵🍵 用 Express 创建服务器<br />
        // 创建并编辑server.js
        // 应用有变化的时候，会自动重启
            // ./node_modules/.bin/nodemon server.js
// 🍠 【路由】<br />
// 🍵🍵🍵 路由 Routes<br />
        // 创建并编辑eventRouter.js
        // 编辑server.js
// 🍵🍵🍵 控制器 Controllers<br />
        // 创建并编辑EventController.js
        // 编辑eventRouter.js
// 🍠 【REST】<br />
// 🍵🍵🍵 资源列表接口：GET api/events<br />
        // 编辑EventController.js
        // 使用Event.find()导入mongo中所有的数据
// 🍵🍵🍵 创建资源接口：POST api/events<br />
        // 编辑eventRouter.js 添加post到store
        // 编辑EventController.js 添加store方法
        // yarn add body-parser
        // 编辑server.js
        // brew cask install insomnia
        // 在insomnia模拟post请求 or 使用postman
        // const event
        // event.save() 保存请求数据到mongo
// 🍵🍵🍵 单个资源接口：GET api/events/:id<br />
        // 编辑eventRouter.js 添加路由 /events/:id
        // 编辑EventController.js 添加show方法
// 🍵🍵🍵 单个资源更新接口：PATCH api/events/:id<br />
        // 编辑eventRouter.js 添加patch
        // 编辑EventController.js 添加update方法
// 🍵🍵🍵 单个资源删除接口：DELETE api/events/:id<br />
        // 编辑eventRouter.js 添加delete
        // 编辑EventController.js 添加destory方法
// 😊😊😊😊😊😊😊😊😊 09 Socket.io 😊😊😊😊😊😊😊😊😊<br />
// 😊😊😊 准备<br />
        //
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
