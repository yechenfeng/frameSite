// const os = require('os');
// console.log('******' + os.hostname());

// const request = require('request');
// request({
//     url: 'http://api.douban.com/v2/movie/top250',
//     json: true
// }, (error, response, body) => {
//     console.log('******' + JSON.stringify(body, null, 2));
// });
//

// const greeting = require('./src/greeting');
// greeting.hello();

// const EventEmitter = require('events');
// class Player extends EventEmitter {};
// var player = new Player();
// player.on('play', () => { // play 就是事件
//     console.log('******' + '正在播放');
// });
// player.emit('play');

// player.on('play2', (track) => {
//     console.log('******' + `正在播放：${track}`);
// });
// player.emit('play2', '野子');

// player.once('play3', (track) => { // once 只执行一次的事件监听器
//     console.log('******' + `正在播放：${track}`);
// });
// player.emit('play3', '野子');
// player.emit('play3', '青花');

// const fs = require('fs');
// fs.stat('index.js', (error, stats) => {
//     if (error) {
//         console.log('******' + error);
//     } else {
//         console.log('******' + stats);
//         console.log('******' + `是否是文件：${stats.isFile()}`);
//         console.log('******' + `是否是目录：${stats.isDirectory()}`);
//     }
// });

// var fileReadStream = fs.createReadStream('data.json');
// var count = 0;
// fileReadStream.once('data', (chunk) => {
//     console.log('******' + chunk);
// });
// fileReadStream.on('data', (chunk) => {
//     console.log('******' + `${++count} 接收到：${chunk.length}`);
// });

// const http = require('http');
// var options = {
//     protocol: 'http:',
//     hostname: 'api.douban.com',
//     port: '80',
//     method: 'GET',
//     path: '/v2/movie/top250'
// };
// var request2 = http.request(options, (response) => {
//     console.log('******' + response);
//     console.log('******' + response.statusCode);
//     console.log('******' + response.headers);
// });
// request2.on('error', (error) =>{
//     console.log('******' + error);
// });
// request2.end();
