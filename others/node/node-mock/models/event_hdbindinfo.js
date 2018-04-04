/*
 *  模型文件 query/hdbindinfo.htm 好豆信息
*/
const db = require('../database/database')

const Event_hdbindinfo = db.model('Event_hdbindinfo', new db.Schema({}), 'query/hdbindinfo.htm')

module.exports = Event_hdbindinfo
