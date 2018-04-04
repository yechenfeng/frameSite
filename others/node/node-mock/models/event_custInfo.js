/*
 *  模型文件 account/custInfo.htm 用户信息
*/
const db = require('../database/database')

const Event_custInfo = db.model('Event_custInfo', new db.Schema({}), 'account/custInfo.htm')

module.exports = Event_custInfo
