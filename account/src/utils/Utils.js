/**
 * 通用工具
 * Created by chenfeng on 2017/11/28.
 * 包括： 设备相关/缓存/验证/字符/日期/金额/其他
 */

const UTILS = {}

/*************** 设备相关 begin ****************/
/**
 * 获取设备信息
 * @returns {*}
 */
UTILS.getPlatform = () => {
    if (window.navigator.userAgent.match(/HowbuyFund/i)) {
        if (window.navigator.userAgent.toLowerCase().match(/android/i)) {
            return 'platform/zjAppAndroid'
        } else {
            return 'platform/zjAppIOS'
        }
    } else if (window.navigator.userAgent.match(/HowbuyPiggy/i)) {
        if (window.navigator.userAgent.toLowerCase().match(/android/i)) {
            return 'platform/cxgAppAndroid'
        } else {
            return 'platform/cxgAppIOS'
        }
    } else {
        return 'platform/WX'
    }
}
/**
 * 验证是否为微信(非APP)
 * @returns {boolean}
 */
UTILS.mathWX = () => {
    return UTILS.getPlatform() == "platform/WX"
}
/**
 * 验证是否为掌基APP
 * @returns {boolean}
 */
UTILS.mathZJAPP = () => {
    return UTILS.getPlatform() == "platform/zjAppAndroid" || UTILS.getPlatform() == "platform/zjAppIOS"
}
/**
 * 验证是否为储蓄罐APP
 * @returns {boolean}
 */
UTILS.mathCXGAPP = () => {
    return UTILS.getPlatform() == "platform/cxgAppAndroid" || UTILS.getPlatform() == "platform/cxgAppAndroid"
}
/**
 * 验证是否为Android APP
 * @returns {boolean}
 */
UTILS.mathAndroid = () => {
    return UTILS.getPlatform() == "platform/zjAppAndroid" || UTILS.getPlatform() == "platform/zjAppAndroid"
}
/**
 * 验证是否为IOS APP
 * @returns {boolean}
 */
UTILS.mathIOS = () => {
    return UTILS.getPlatform() == "platform/zjAppIOS" || UTILS.getPlatform() == "platform/cxgAppIOS"
}
/*************** 设备相关 end ****************/

/*************** 缓存 begin ****************/
/**
 * 设置localStorage缓存
 * @param key
 * @param value
 */
UTILS.setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}
/**
 * 获取localStorage本地缓存数据
 * @param key
 * @returns {null}
 */
UTILS.getLocalStorage = (key) => {
    let obj = window.localStorage.getItem(key)
    if (obj != null) {
        return JSON.parse(obj)
    } else {
        return null
    }
}
/**
 * 清除localStorage缓存数据
 * @param key
 */
UTILS.removeLocalStorage = (key) => {
    window.localStorage.removeItem(key)
}
/**
 * 设置SessionStorage缓存
 * @param key
 * @param value
 */
UTILS.setSessionStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}
/**
 * 获取SessionStorage缓存数据
 * @param key
 * @returns {null}
 */
UTILS.getSessionStorage = (key) => {
    let obj = window.sessionStorage.getItem(key)
    if (obj != null) {
        return JSON.parse(obj)
    } else {
        return null
    }
}
/**
 * 清除sessionStorage缓存数据
 * @param key
 */
UTILS.removeSessionStorage = (key) => {
    window.sessionStorage.removeItem(key)
}
/**
 * 清除session和local缓存文件
 * @param key
 */
UTILS.removeAllStorage = (key) => {
    window.localStorage.removeItem(key)
    window.sessionStorage.removeItem(key)
}
/**
 * 清空所有session缓存
 */
UTILS.clearSessionStorage = () => {
    window.sessionStorage.clear()
}
/**
 * 清空所有local缓存
 */
UTILS.clearLocalStorage = () => {
    window.localStorage.clear()
}
/**
 * 清空所有storage缓存
 */
UTILS.clearAllAStorage = () => {
    window.localStorage.clear()
    window.sessionStorage.clear()
}
/*************** 缓存 end ****************/

/*************** 验证 begin ****************/
/**
 * 非空验证 TODO 验证规则加严格
 * @param params
 * @returns {boolean}
 */
UTILS.isEmpty = (params) => {
    if (params == "" || typeof params == 'undefined' || !params) {
        return true
    } else {
        return false
    }
}
/**
 * 验证手机号正确性
 */
UTILS.validMobile = (str) => {
    return /([0-9])*([0-9])\2{2}([0-9])*/g.test(str)
}
/**
 * 验证邮箱正确性
 */
UTILS.validEmail = (str) => {
    return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(str)
}
/**
 * 验证邮编正确性
 */
UTILS.validZip = (str) => {
    return /^[0-9]{6}$/.test(str)
}
UTILS.validWord = (str) => {
    return /^[a-zA-Z0-9]+$/.test(str)
}
/**
 * 验证是否为数字
 * @param str
 * @returns {boolean}
 */
UTILS.validIsNumber = (str) => {
    return /^\d+$/.test(str)
}
/**
 * 验证字符是否为空
 * @param str
 * @returns {boolean}
 */
UTILS.validEmpty = (str) => {
    return /^[\s\S]+$/.test(str)
}
/**
 * 验证是否为6位数字
 * @param str
 * @returns {boolean}
 */
UTILS.validNumber6 = (str) => {
    return /^[0-9]{6}$/.test(str)
}
/**
 * 验证两次密码输入是否一致
 * @param p1
 * @param p2
 * @returns {boolean}
 */
UTILS.validPasswordEqual = (p1, p2) => {
    if (p1 != p2) {
        return false
    }
    return true
}
/**
 * 表单验证
 * @returns {{add: add, valid: valid}}
 */
UTILS.validForm = () => {
    let validQueue = []
    const reg = {
        empty: {rule: /^[\s\S]+$/, desc: ""},
        mobile: {rule: /^1[3-9]{1}[0-9]{9}$/, desc: "手机号码"},
        number6: {rule: /^[0-9]{6}$/, desc: "6位数字"},
        notasc4: {
            rule: {
                test: function (value) {
                    if (/0123|1234|2345|3456|4567|5678|6789|9876|8765|7654|6543|5432|4321|3210/.test(value)) {
                        return false
                    } else {
                        return true
                    }
                }
            }, desc: ""
        },
        notrp3: {
            rule: {
                test: function (value) {
                    if (/([0-9])*([0-9])\2{2}([0-9])*/g.test(value)) {
                        return false
                    } else {
                        return true
                    }
                }
            }, desc: ""
        },
        word: {rule: /^[a-zA-Z0-9]+$/},
        zip: {rule: /^[0-9]{6}$/, desc: "邮编"},
        email: {rule: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/, desc: "email"},
        script: {
            rule: {
                test: function (value) {
                    return !(/<script[^>]*>.*<\/script>/i.test(value))
                }
            }, desc: ""
        },
        strlength: {
            rule: {
                test: function (value) {
                    if (value.size) {
                        if (value.value.length == value.size) {
                            return true
                        } else {
                            return false
                        }
                    } else {
                        if (value.value.length >= value.min && value.value.length <= value.max) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            }, desc: ""
        },
        cerfiticate: {
            rule: {
                test: function (value) {
                    let cerfiticate18 = /^((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91)\d{4})((((19|20)(([02468][048])|([13579][26]))0229))|((20[0-9][0-9])|(19[0-9][0-9]))((((0[1-9])|(1[0-2]))((0[1-9])|(1\d)|(2[0-8])))|((((0[1,3-9])|(1[0-2]))(29|30))|(((0[13578])|(1[02]))31))))((\d{3}(x|X))|(\d{4}))$/
                    return cerfiticate18.test(value)
                }
            }, desc: "18位身份证"
        },
        equal: {
            rule: {
                test: function (value) {
                    if (value.origin != value.target) {
                        return false
                    }
                    return true
                }
            }, desc: ""
        },
        notEqual: {
            rule: {
                test: function (value) {
                    if (value.origin == value.target) {
                        return false
                    }
                    return true
                }
            }, desc: ""
        },
        more: {
            rule: {
                test: function (value) {
                    if (parseFloat(value.origin) > parseFloat(value.target)) {
                        return true
                    }
                }
            }
        },
        less: {
            rule: {
                test: function (value) {
                    if (parseFloat(value.origin) < parseFloat(value.target)) {
                        return true
                    }
                }
            }
        },
        moreEqual: {
            rule: {
                test: function (value) {
                    if (parseFloat(value.origin) >= parseFloat(value.target)) {
                        return true
                    }
                }
            }
        },
        lessEqual: {
            rule: {
                test: function (value) {
                    if (parseFloat(value.origin) <= parseFloat(value.target)) {
                        return true
                    }
                }
            }
        },
        passwordEqual: {
            rule: {
                test: function (value) {
                    if (value.p1 != value.p2) {
                        return false
                    }
                    return true
                }
            }, desc: ""
        },
        passwordNotEqual: {
            rule: {
                test: function (value) {
                    if (value.p1 == value.p2) {
                        return false
                    }
                    return true
                }
            }, desc: ""
        }
    }
    let valid = (type, value, desc) => {
        if (reg[type]) {
            if (value && reg[type].rule.test(value)) {
                return true
            } else {
                if (desc) {
                    mui.toast(desc)
                } else if (reg[type].desc) {
                    mui.toast("请输入正确的" + reg[type].desc)
                }
                return false
            }
        }
    }
    return {
        add: function (reg, value, desc) {
            validQueue.push({reg: reg, value: value, desc: desc})
            return this
        },
        valid: function () {
            for (let index in validQueue) {
                if (false === valid(validQueue[index].reg, validQueue[index].value, validQueue[index].desc)) {
                    validQueue = []
                    return false
                }
            }
            validQueue = []
            return true
        }
    }
}
/*************** 验证 end ****************/

/*************** 字符 begin ****************/
/**
 * 截取最后四位
 * @param str
 * @returns {string|*}
 */
UTILS.maskCardHead = (str) => {
    return str.length > 4 ? str.substr(str.length - 4, 4) : str
}
UTILS.maskCardCenter = (str) => {
    if (str.length > 8) {
        return str.substr(0, 4) + "********" + str.substr(str.length - 4, 4)
    } else {
        return str
    }
}
/**
 * 自动补位，小数点后两位
 * @param x
 * @returns {*}
 */
UTILS.decimal2 = (x) => {
    let f = parseFloat(x)
    if (isNaN(f)) {
        return "--"
    } else {
        return parseFloat(x).toFixed(2)
    }
}
/**
 * 自动补位，小数点后四位
 * @param x
 * @returns {*}
 */
UTILS.decimal4 = (x) => {
    let f = parseFloat(x)
    if (isNaN(f)) {
        return "--"
    } else {
        return parseFloat(x).toFixed(4)
    }
}
/**
 * 数字转换为字母   例如 1 转换为 A  2 转换为B  ...  TODO 字母转数字
 * @param number  数字
 * @returns {string}  返回转换后的字母
 */
UTILS.numberToLetter = (number) => {
    return String.fromCharCode(64 + parseInt(number))
}
/**
 * 去除空格
 * @type {{
 * left: UTILS.trim.left,  去除左侧空格
 * right: UTILS.trim.right, 去除右侧空格
 * all: UTILS.trim.all, 去除所有空格
 * leftAndRight: UTILS.trim.leftAndRight 去除左右空格
 * }}
 */
UTILS.trim = {
    left: function (str) {
        if (UTILS.isEmpty(str)) {
            return ''
        } else {
            return str.replace(/(^\s*)/g, "")
        }
    },
    right: function (str) {
        if (UTILS.isEmpty(str)) {
            return ''
        } else {
            return str.replace(/(\s*$)/g, "")
        }
    },
    all: function (str) {
        if (UTILS.isEmpty(str)) {
            return ''
        } else {
            return str.replace(/\s|\xA0/g, "")
        }
    },
    leftAndRight: function (str) {
        if (UTILS.isEmpty(str)) {
            return ''
        } else {
            return str.replace(/(^\s*)|(\s*$)/g, "")
        }
    }
}
/*************** 字符 end ****************/

/*************** 日期 begin ****************/
/**
 * 通过日期获取星期
 * @param strDate 日期格式为 yyyymmdd
 * @returns {*}
 */
UTILS.strDayOfWeek = (strDate) => {
    let dayCh = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    if (typeof strDate == "string") {
        let dayInt = (new Date(strDate.substr(0, 4), parseInt(strDate.substr(4, 2)) - 1, strDate.substr(6, 2))).getDay()
        let day = dayCh[dayInt]
        return day
    } else {
        return ""
    }
}
/**
 * 获取前N个月/后N个月
 * @param info  月份步长  正数则为获取之前的月份  负数为获取 之后的月份  例如 1 则获取上一个月  -1 获取下一个月
 * @returns {string}  返回前N个月 or 后N个月
 */
UTILS.getPerMonthDay = (info) => {
    let now = new Date()
    now.setMonth(now.getMonth() - info)
    let myyear = now.getFullYear()
    let mymonth = now.getMonth() + 1
    let myweekday = now.getDate()
    if (mymonth < 10) {
        mymonth = "0" + mymonth
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday
    }
    return (myyear + "-" + mymonth + "-" + myweekday)
}
/**
 * 日期格式转换为字符串 不带分隔符
 * @param date  当前日期  new Date() 格式
 * @returns {string}
 */
UTILS.getFormatDate = (date) => {
    let month = date.getMonth() + 1
    let monthStr = date.getMonth() + 1 + ""
    let day = date.getDate()
    let dayStr = date.getDate() + ""
    return date.getFullYear() + (month > 9 ? monthStr : ("0" + monthStr)) + (day > 9 ? dayStr : ("0" + dayStr))
}
/**
 * 截取8位日期  月-日格式显示 '-'分割
 * @param strDate  8位日期字符
 * @returns {*}
 */
UTILS.strDateToMD = (strDate) => {
    if (typeof strDate == "string") {
        return strDate.substr(4, 2) + "-" + strDate.substr(6, 2)
    } else {
        return strDate || "--"
    }
}
/**
 * 截取8位日期  年-月-日显示 '-'分割
 * @param strDate 8位日期字符
 * @returns {*}
 */
UTILS.strDateToYMD = (strDate) => {
    if (typeof strDate == "string") {
        return strDate.substr(0, 4) + "-" + strDate.substr(4, 2) + "-" + strDate.substr(6, 2)
    } else {
        return strDate || "--"
    }
}
UTILS.splitStrDateToYMD = (strDate) => {
    if (typeof strDate == "string") {
        let array = strDate.split("-")
        return array[0] + array[1] + array[2]
    } else {
        return strDate || "--"
    }
}
/**
 * 获取当前日期，格式为 '2017-01-01'
 * @returns {string}
 */
UTILS.getNowDate = () => {
    let now = new Date()
    let month = now.getMonth()
    let day = now.getDate()
    return now.getFullYear() + "-" + (month + 1 > 9 ? month + 1 : "0" + (month + 1)) + "-" + (day > 9 ? day : "0" + day)
}
/**
 * 字符类型日期格式化  将yyyy-mm-dd 转换为 yyyymmdd
 * @param ymd  格式 yyyy-mm-dd  注意 必须是以为 '-'连接的日期字符串
 * @returns {*}
 * @constructor
 */
UTILS.YMDToStrDate = (ymd) => {
    if (typeof ymd == "string") {
        let array = ymd.split("-")
        return array[0] + array[1] + array[2]
    } else {
        return ymd || "--"
    }
}
/**
 * 时间格式化  TODO 判断是8位还是6位
 * @param hms 8位时间
 * @returns {*}
 */
UTILS.strDateToHMS = (hms) => {
    if (typeof hms == "string") {
        return hms.substr(0, 2) + ":" + hms.substr(2, 2) + ":" + hms.substr(4, 2)
    } else {
        return hms || "--"
    }
}
/**
 * 日期转字符串
 * @param date time类型日期
 * @param fmt  格式
 * @returns {*}
 */
UTILS.dateTimeToDateStr = (date, fmt) => {
    if (date != null) {
        let date = new Date(date)
        return date.pattern(fmt)
    } else {
        return null
    }
}
// 初始化数据
UTILS.initData = () => {
    //TODO 请求初始化数据 加入缓存
}
/*************** 日期 end ****************/

/*************** 金额 begin ****************/
/**
 * 去除金额千分位
 * @param val
 * @returns {string}
 */
UTILS.recoveryMoney = (val) => {
    return val.toString().replace(/,/g, '')
}
/**
 * 格式化金额,包括有负号的情况
 * @param s  金额
 * @param n  小数点后几位
 * @returns {String}
 */
UTILS.formatMoney = (s,n) => {
    if(UTILS.isEmpty(s) || s == "--"|| s == null){
        return "--"
    }
    let num=s
    if (s<0) {
        s = (s+"").slice(1)
    }
    let oldS = s
    n = n >= 0 && n <= 20 ? n : 2
    s = parseFloat((s+"").replace(/[^\d\.-]/g,"")).toFixed(n) + ""
    let l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1]
    let t = ""
    for(let ww = 0; ww < l.length; ww++){
        t+=l[ww]+((ww+1)%3==0&&(ww+1)!=l.length?",":"")
    }
    if(r){
        if(num<0){
            return "-"+t.split("").reverse().join("")+"."+r
        }else{
            return t.split("").reverse().join("")+"."+r
        }
    }else{
        if(oldS.split(".").length>1){
            if(num<0){
                return "-"+t.split("").reverse().join("")+"."
            }else {
                return t.split("").reverse().join("")+"."
            }
        }else{
            if(num<0){
                return "-"+t.split("").reverse().join("")

            }else{
                return t.split("").reverse().join("")
            }
        }
    }
}
/**
 * 按钮被按下时,验证事件
 * @param event
 * @param maxLength 最多输入多少位
 */
UTILS.onKeyPress = (event, maxLength) => {
    //最大可输入位数
    maxLength = maxLength ? maxLength : 11
    let target = event.currentTarget
    let value = target.value
    let i_valueLength = value.length
    if (value.indexOf(".") == -1) {
        if (i_valueLength == 0 && event.which == 46) {
            event.preventDefault()
        }
        if (value == "0" && event.which != 46) {
            event.preventDefault()
        }
        if (i_valueLength == maxLength && event.which != 46) {
            event.preventDefault()
        }
    } else {
        if (i_valueLength == maxLength + 2 ||
            value.split(".")[1].length == 2 ||
            event.which == 110 ||
            event.which == 12290 ||
            event.which == 46) {
            event.preventDefault()
        }
    }
}
/**
 * 输入框输入验证
 * @param event
 * @param maxAmount
 * @returns {string}
 */
UTILS.handleOnInput = (event, maxAmount) => {
    maxAmount = maxAmount ? maxAmount : 100000000 // 最多一个亿
    //获取当前元素
    let target = event.currentTarget
    let value = target.value
    let newValue = ""
    let regStr = [
        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
        ['[^\\d\\.\\,]+$', ''], //禁止录入任何非数字和点
        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
        ['^(\\d+\\.\\d{2}).+', '$1'], //禁止录入小数点后两位以上
        [/[^(\d|\.)]/g, '']
    ]
    let amount = this.unFormatMoney(value)
    if (amount.length > 1 && amount.indexOf("0") == 0 && amount.indexOf(".") == -1) {
        amount = amount.replace(/\b(0+)/gi, "")
    }
    let _value = ''
    for (let i = 0; i < regStr.length; i++) {
        let reg = new RegExp(regStr[i][0])
        _value = amount.replace(reg, regStr[i][1])
        if (_value > parseFloat(maxAmount)) {
            _value = parseFloat(maxAmount)
        }
        newValue = _value
    }
    return newValue
}
/*************** 金额 end ****************/

/*************** 其他 begin ****************/
/**
 * 增加Date的原型函数
 * @param fmt
 * @returns {*}
 * @constructor
 */
Date.prototype.format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    return fmt
}
/**
 * 获取URL中参数
 * @param paramName
 * @returns {*}
 */
UTILS.getParam = (paramName) => {
    let reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)", "i")
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return decodeURI(r[2])
    } else {
        return null
    }
}
/*************** 其他 end ****************/

export default UTILS
