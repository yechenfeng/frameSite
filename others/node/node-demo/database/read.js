/*
 *  从数据库提取data
*/
const Event = require('../models/event')
Event.find()
    .then(documents => console.log('\nfind: 所有的文档\n', documents))

Event.find({title: 'mongo1'})
    .then(documents => console.log('\nfind: 指定标题的文档\n', documents))

Event.findOne({title: 'mongo1'})
    .then(document => console.log('\nfindOne: 指定标题的文档\n', document))

Event.findById({_id: '59e2fadb31ab229561bc1ff2'})
    .then(document => console.log('\nfindById: \n', document))

Event.findOne({_id: '59e2fadb31ab229561bc1ff2'})
    .then(document => console.log('\nfindOne: 指定_id的文档\n', document))
