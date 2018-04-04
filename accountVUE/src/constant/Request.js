/**
 * 请求与常量
 * Created by chenfeng on 2017/11/28.
 */

import Utils from '../utils/Utils'

const REQUEST = {}
REQUEST.HOLD_FUND_SUMMARY = URL_HEADER + 'query/holdFundSummary.htm' // 资产信息
REQUEST.CUST_INFO = URL_HEADER + 'account/custInfo.htm' // 用户信息
REQUEST.NOTICE = URL_HEADER + 'query/notice.htm' // 公告信息

/**
 * Ajax请求
 * @param url 请求地址
 * @param params 请求参数
 * @param callback 回调函数
 */
REQUEST.AJAX = (url, params, callback) => {
    let requestParams = {}
    if (params) {
        var paramsLength = params.length
        for (var i = 0; i < paramsLength; i++) {
            requestParams[params[i].split("=")[0]]=params[i].split("=")[1]
        }
    }
    requestParams['h5req'] = "1"
    let ajaxRequest = $.ajax({
        cache: false,
        url: url,
        dataType: 'jsonp',
        data: requestParams,
        timeout: 20000,
        success: function (res) {
            callback && callback.call(this, res)
        },
        error: function () {
            let result = {"message": "服务器连接失败"}
            callback && callback.call(this, result)
        },
        complete: function () {

        }
    })
    return ajaxRequest
}

/**
 * Ajax请求失败，错误代码处理
 * @param result 返回的数据
 * @param callback 回调函数
 */
REQUEST.AJAXFail = (result, callback) => {
    if (result && result.code) {
        let code = result.code
        if (code == 'B006') { // 重新登录
            window.location.href = URL_WAP + 'account/login/login.htm?targeturl=' + window.location.href
            return false
        } else if (code == 'B900') { // 客户端更新

        } else {
            callback && callback()
        }
    } else {
        callback && callback()
    }
}

export default REQUEST
