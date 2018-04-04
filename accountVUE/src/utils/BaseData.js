/**
 * 基础数据
 * Created by chenfeng on 2017/11/28.
 */
import Request from '../constant/Request'
import React, {Component} from 'react'
import Utils from '../utils/Utils'

const BASE_DATA = {}

/** 初始化定义数据 **/
BASE_DATA.PROJECT_NAME = '好买财富' // 项目名称
BASE_DATA.LOGO = ''

/**
 * 获取用户信息
 */
BASE_DATA.getCustInfo = () => {
    if (Utils.isEmpty(Utils.getLocalStorage('custInfo'))) {
        Request.AJAX(Request.CUST_INFO, null, function (data) {
            if (data && data.code == '0000') {
                Utils.setLocalStorage('custInfo', JSON.stringify(data.body))
            } else {
                Request.AJAXFail(data)
            }
        })
    }
}

export default BASE_DATA
