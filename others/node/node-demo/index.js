/*
    TODO
 */
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
        console.log('=================== 程序开始执行 ===================');

        async function test() {
          console.log('=================== 程序阶段性执行完毕 ===================');
          await sleep(10000000)
          // console.log('这是来自3s之后的问好')
        }

        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms))
        }

// test().then( function(){



// 🍎🍎🍎 使用不同版本的 Node.js<br />
        // nvm run v6.11.0 index.js(使用此版本运行js)
        // nvm exec v6.11.0 node -v(使用此版本执行命令)
        // 使用文件.nvmrc
            // nvm run node -v(使用.nvmrc中的node配置版本执行命令)
        // nvm use(切换node版本为.nvmrc中的node配置版本执行命令)
        // 🍠 【使用模块】<br />
// 🍎🍎🍎 使用内置的 Node.js 模块<br />
        const os = require('os');
        // console.log('******' + os);
        // console.log('******' + os.hostname());

test().then(      function(){

        // 🍎🍎🍎 安装第三方 Node.js 模块<br />
        // 例如，安装http请求模块
        // npm install request --save
        // 或
        // yarn add request
            // modules有很多依赖，所以会有很多模块
// 🍎🍎🍎 使用第三方 Node.js 模块<br />
        const request = require('request')


        // request({
        //     url: 'http://api.douban.com/v2/movie/top250',
        //     json: true
        // }, (error, response, body) => {
        //     console.log('******' + JSON.stringify(body, null, 2));
        // });


// test().then(      function(){


// 🍎🍎🍎 创建与使用自定义 Node.js 模块<br />
        const greeting = require('./src/greeting');
        greeting.hello();
// test().then(      function(){
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
//
// test().then(      function(){


// 🍠 【File System】<br />
// 🍌🍌🍌 得到文件与目录的信息：stat<br />
        const fs = require('fs');
        fs.stat('index.js', (error, stats) => {
        // fs.stat('src', (error, stats) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + stats);
                console.log('******' + `是否是文件：${stats.isFile()}`);
                console.log('******' + `是否是目录：${stats.isDirectory()}`);
            }
        });
// test().then(      function(){


// 🍌🍌🍌 创建一个目录：mkdir<br />
        // fs.mkdir('logs', (error) => {
        //     if (error) {
        //         console.log('******' + error);
        //     } else {
        //         console.log('******' + '通过mkdir成功创建目录：logs');
        //     }
        // });
// test().then(      function(){


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
// test().then(      function(){


// 🍌🍌🍌 读取文件里的内容：readFile<br />
        fs.readFile('logs/greeting.log', 'utf-8', (error, data) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过readFile读取文件里的内容：' + data);
            }
        });
// test().then(      function(){


// 🍌🍌🍌 列出目录里的东西：readdir<br />
        fs.readdir('logs', (error, files) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过readdir列出目录里的东西：' + files);
            }
        });
// test().then(      function(){


// 🍌🍌🍌 重命名目录或文件：rename<br />
        fs.rename('logs/greeting.log', 'logs/hello.log', (error) => {
            if (error) {
                console.log('******' + error);
            } else {
                console.log('******' + '通过rename重命名目录或文件成功');
            }
        });
// test().then(      function(){


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
test().then(      function(){


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
// test().then(      function(){


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
        // const http = require('http');
        // var options = {
        //     protocol: 'http:',
        //     hostname: 'api.douban.com',
        //     port: '80',
        //     method: 'GET',
        //     path: '/v2/movie/top250'
        // };
// test().then(      function(){
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

// 🍐🍐🍐🍐🍐🍐🍐🍐🍐 04 npm：JavaScript 包管理 🍐🍐🍐🍐🍐🍐🍐🍐🍐<br />

// 🧀🧀🧀🧀🧀🧀🧀🧀🧀 05 Express 🧀🧀🧀🧀🧀🧀🧀🧀🧀<br />

// 🎂🎂🎂🎂🎂🎂🎂🎂🎂 06 MongoDB 🎂🎂🎂🎂🎂🎂🎂🎂🎂<br />

// ☕️☕️☕️☕️☕️☕️☕️☕️☕️ 07 Node.js 与 MongoDB ☕️☕️☕️☕️☕️☕️☕️☕️☕️<br />

// 🍵🍵🍵🍵🍵🍵🍵🍵🍵 08 Node.js：REST 接口 🍵🍵🍵🍵🍵🍵🍵🍵🍵<br />

// 😊😊😊😊😊😊😊😊😊 09 Socket.io 😊😊😊😊😊😊😊😊😊<br />

// 🍇🍇🍇🍇🍇🍇🍇🍇🍇 10 JWT：JSON Web Token 🍇🍇🍇🍇🍇🍇🍇🍇🍇<br />

// 😤😤😤😤😤😤😤😤😤 11 Node.js：基于 Token 的身份验证 😤😤😤😤😤😤😤😤😤<br />

}
)
