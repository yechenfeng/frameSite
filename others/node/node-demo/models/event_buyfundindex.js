/*
 *  模型文件 trade/buyfundindex.htm 用户信息
*/
const db = require('../database/database')

// const sch1 = new db.Schema({
//     a: string,
//     a: string,
//     a: string,
// })

const Event_buyfundindex = db.model('Event_buyfundindex', new db.Schema({}), 'trade/buyfundindex.htm')

module.exports = Event_buyfundindex
