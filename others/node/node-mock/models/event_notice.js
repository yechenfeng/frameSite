/*
 *  模型文件 query/notice.htm 公告信息
*/
const db = require('../database/database')

const Event_notice = db.model('Event_notice', new db.Schema({}), 'query/notice.htm')

module.exports = Event_notice
