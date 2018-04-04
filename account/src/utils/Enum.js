/**
 * 枚举方法
 * Created by chenfeng on 2017/11/28.
 */

import BaseData from './BaseData'

const ENUM = {}

/**
 * 根据bankCode获取银行名称
 * @param code 字典Code
 * @returns {string} 返回对应中文描述
 */
ENUM.getBankName = (code) => {
    if  (code != null) {
        if ("102"==code){
            return "工商银行"
        }else if ("103"==code) {
            return "农业银行"
        }else if ("104"==code) {
            return "中国银行"
        }else if ("105"==code) {
            return "建设银行"
        }else if ("106"==code) {
            return "交通银行"
        }else if ("112"==code) {
            return "光大银行"
        }else if ("302"==code) {
            return "中信银行"
        }else if ("304"==code) {
            return "华夏银行"
        }else if ("305"==code) {
            return "民生银行"
        }else if ("306"==code) {
            return "广发银行"
        }else if ("307"==code) {
            return "平安银行"
        }else if ("308"==code) {
            return "招商银行"
        }else if ("309"==code) {
            return "兴业银行"
        }else if ("310"==code) {
            return "浦发银行"
        }else if ("314"==code) {
            return "上海银行"
        }else if ("317"==code) {
            return "温州银行"
        }else if ("403"==code) {
            return "邮储银行"
        }
    }else{
        return null
    }
}

export default ENUM
