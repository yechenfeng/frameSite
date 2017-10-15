/*
 *  保存data到数据库 入口 => models/event.js => config/database.js
*/
const Event = require('../models/event')
const event1 = new Event({
    title: 'node and mongo'
})
event1
    .save()
    .then(document => console.log(document))
    .catch(error => console.log(error))
