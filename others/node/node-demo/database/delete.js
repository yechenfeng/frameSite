/*
 *  删除data
*/
const Event = require('../models/event')

let id = '59e2fadb31ab229561bc1ff3';

Event.findByIdAndRemove(id)
    .then(document => console.log(document))
