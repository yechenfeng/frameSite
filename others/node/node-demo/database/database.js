/*
 *  mongoose 配置文件
*/
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/cgi-mock'
const options = {
    useMongoClient: true
}

mongoose.Promise = global.Promise

mongoose
    .connect(uri, options)
    .then(db => console.log('😊  连接 好买cgi-mock 数据库成功~'))
    .catch(error => console.log('😒  连接 好买cgi-mock 数据库失败！'))

module.exports = mongoose
