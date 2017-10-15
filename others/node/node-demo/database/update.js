/*
 *  更新data
*/
const Event = require('../models/event.js')

let id = '59e2fadb31ab229561bc1ff4';
let body = {
    title: 'mongo3 update'
}

Event.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then(document => console.log(document))
