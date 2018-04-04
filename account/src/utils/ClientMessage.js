/**
 * 客户端通信
 * Created by chenfeng on 2017/11/28.
 */

const CLIENT_MESSAGE = {}

/**
 * 获取组合加密参数，提供给JS做网络请求
 * @returns {*} 加密的JSON串, 返回结果里不包含H5发起请求的参数，需要H5返JSON并添加。
 */
CLIENT_MESSAGE.getRequestParams = () => {
    return window.functionAction.encryptInfoForRequest()
}

/**
 * 显示银行卡管理模块
 */
CLIENT_MESSAGE.showBankCardManagerModule = () => {
    window.pushModuleAction.showBankCardManagerModule()
}

export default CLIENT_MESSAGE
