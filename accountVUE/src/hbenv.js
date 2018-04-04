/**
 * 环境配置
 * Created by chenfeng on 2017/11/28.
 */

var _hbEnvFlag = "1"; //  1 线上环境  2UAT环境   3 测试环境  4 pre环境

var URL_HEADER = "https://trade.ehowbuy.com/cgi/";
var HB_URL = "https://static.ehowbuy.com/tstatic/";
var URL_WAP = "https://trade.ehowbuy.com/wap2/";
var URL_PIG = "https://trade.ehowbuy.com/newpig/";

if (_hbEnvFlag == "2") {
    URL_HEADER = "http://10.168.109.23:26101/howbuy-trade-hdi/";
    HB_URL = "https://static.ehowbuy.uat/tstatic/";
    URL_WAP = "http://192.168.221.213:4081/wap/";
    URL_PIG = "http://192.168.221.213:4081/newpig/";
}else if (_hbEnvFlag == "3") {
    URL_HEADER = "http://192.168.221.54:4085/cgi/";
    HB_URL = "http://192.168.221.209:4080/tws/";
    URL_WAP = "http://192.168.209.209:4081/wap/";
    URL_PIG = "http://192.168.209.209:4081/newpig/";
}else if (_hbEnvFlag == "4") {
    URL_HEADER = "https://trade.ehowbuy.com/cgi_pre/";
    HB_URL = "https://static.ehowbuy.com/tstatic/";
    URL_WAP = "https://trade.ehowbuy.com/wap2/";
    URL_PIG = "https://trade.ehowbuy.com/newpig/";
}
