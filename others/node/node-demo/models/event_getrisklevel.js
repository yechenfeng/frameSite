/*
 *  模型文件 kyc/getrisklevel.htm KYC相关信息
*/
const db = require('../database/database')

const Event_getrisklevel = db.model('Event_getrisklevel', new db.Schema({}), 'kyc/getrisklevel.htm')

module.exports = Event_getrisklevel
