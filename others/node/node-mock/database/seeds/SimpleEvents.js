const data = require('./SimpleEvents.json')
const Event = require('../../models/event')

Event.insertMany(data)
    .then(() => console.log('数据处理成功'))
