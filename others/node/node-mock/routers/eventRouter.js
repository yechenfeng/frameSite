/*
 *  路由 列表
*/
const express = require('express')
const router = express.Router()
const EventController = require('../controllers/EventController')


router.route('/events')
    .get(EventController.index)
    .post(EventController.store)

router.route('/events/:id')
    .get(EventController.show)
    .patch(EventController.update)
    .delete(EventController.destroy)

router.route('/account/custInfo.htm')
    .get(EventController.custInfo)

router.route('/kyc/getrisklevel.htm')
    .get(EventController.getrisklevel)

router.route('/query/fundrecommend.htm')
    .get(EventController.fundrecommend)

router.route('/query/hdbindinfo.htm')
    .get(EventController.hdbindinfo)

router.route('/query/notice.htm')
    .get(EventController.notice)

router.route('/trade/buyfundindex.htm')
    .get(EventController.buyfundindex)

module.exports = router
