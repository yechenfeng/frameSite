/*
 *  模型文件 trade/buyfundindex.htm 用户信息
*/
const db = require('../database/database')

const Event_buyfundindex = db.model('Event_buyfundindex', new db.Schema({}), 'trade/buyfundindex.htm')

module.exports = Event_buyfundindex
