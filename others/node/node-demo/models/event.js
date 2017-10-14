/*
 *  模型文件 活动
*/
const db = require('./../config/database.js')
const options = {}

const schema = new db.Schema({
    title: {
        type: String
    }
}, options)

const Event = db.model('Event', schema)

module.exports = Event
