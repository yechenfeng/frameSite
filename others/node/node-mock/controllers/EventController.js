/*
 *  控制器 列表
*/
const Event = require('../models/event')
const Event_custInfo = require('../models/event_custInfo')
const Event_getrisklevel = require('../models/event_getrisklevel')
const Event_fundrecommend = require('../models/event_fundrecommend')
const Event_hdbindinfo = require('../models/event_hdbindinfo')
const Event_notice = require('../models/event_notice')
const Event_buyfundindex = require('../models/event_buyfundindex')

const custInfo = (request, response) =>{
    const callback = request.query["callback"]
    Event_custInfo.find()
        // .then(documents => response.send(callback + '(' + documents[0] + ')'))
        .then(documents => response.jsonp(documents[0]))
}

const getrisklevel = (request, response) =>{
    Event_getrisklevel.find()
        .then(documents => response.jsonp(documents[0]))
}

const fundrecommend = (request, response) =>{
    Event_fundrecommend.find()
        .then(documents => response.jsonp(documents[0]))
}

const hdbindinfo = (request, response) =>{
    Event_hdbindinfo.find()
        .then(documents => response.jsonp(documents[0]))
}

const notice = (request, response) =>{
    Event_notice.find()
        .then(documents => response.jsonp(documents[0]))
}

const buyfundindex = (request, response) =>{
    Event_buyfundindex.find()
        .then(documents => response.jsonp(documents[0]))
}

// const index = (request, response) =>{
//     response.send({
//         message: 'hello events ~'
//     })
// }
const index = (request, response) =>{
    Event.find()
        .then(documents => response.send(documents))
}

const store = (request, response) =>{
    // console.log(request.body)
    const event = new Event({
        title: request.body.title
    })
    event.save()
        .then(document => response.send(document))
}

const show = (request, response) =>{
    const id = request.params.id
    Event.findById(id)
        .then(document => response.send(document))
}

const update = (request, response) =>{
    const id = request.params.id
    const body = {
        title: request.body.title
    }
    Event.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then(document => response.send(document))
}

const destroy = (request, response) =>{
    const id = request.params.id
    const body = {
        title: request.body.title
    }
    Event.findByIdAndRemove(id)
        .then(document => response.send(document))
}

module.exports = {
    custInfo,
    getrisklevel,
    fundrecommend,
    hdbindinfo,
    notice,
    buyfundindex,

    index,
    store,
    show,
    update,
    destroy
}
