/*
 *  模型文件 query/fundrecommend.htm 推荐基金
*/
const db = require('../database/database')

const Event_fundrecommend = db.model('Event_fundrecommend', new db.Schema({}), 'query/fundrecommend.htm')

module.exports = Event_fundrecommend
