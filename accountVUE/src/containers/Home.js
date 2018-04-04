/**
 * 主页
 * Created by chenfeng on 2017/11/28.
 */

/* 基础 */
import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import $ from 'zepto'
/* 公用组件 */
import Loading from '../components/Loading'
import Notice from '../components/Notice'
/* 请求与常量 */
import Request from  '../constant/Request'
/* 文案与信息 */
import Message from  '../constant/Message'
/* 类型与参数 */
import PublicParams from '../constant/PublicParams'
/* 通用工具 */
import Utils from '../utils/Utils'
/* 基础数据 */
import BaseData from '../utils/BaseData'

class Home extends Component {

    constructor(props) {
        super(props)
        BaseData.getCustInfo()
        this.state = {
            data: null,
            custInfo: JSON.parse(Utils.getLocalStorage('custInfo')), // 获取用户信息，从缓存中获取，如果缓存中没有数据则发送请求
            loading: true
        }
    }

    componentDidMount() {
        this.queryHoldFundSummary() // 查询资产信息
    }

    queryHoldFundSummary() {
        Request.AJAX(Request.HOLD_FUND_SUMMARY, null, function (data) {
            if (data && data.code == '0000') {
                this.setState({
                    data: data.body,
                    loading: false
                })
            } else {
                Request.AJAXFail(data)
                this.setState({
                    loading: false
                })
            }
        }.bind(this))
    }

    render() {
        if (this.state.data) {
            let data = this.state.data
            let totalAmt = (data.totalAmt && data.totalAmt != 0) ? parseFloat(data.totalAmt) : 0 // 基金资产
            let hqjiaAmt = (data.hqPlusTotalAmt != 0 && data.hqPlusTotalAmt) ? parseFloat(data.hqPlusTotalAmt) : 0 // 活期加资产
            let zongheAmt= Utils.formatMoney((totalAmt + hqjiaAmt), 2) // 总资产=基金资产+活期加资产
            let totalAmtqian = zongheAmt.slice(0,zongheAmt.indexOf(".") + 1) // 总资产整数
            let totalAmthou = zongheAmt.slice(-2) // 总资产小数
            if (PublicParams.FUND_STORE_TYPE.indexOf('股票型') == -1) { // 如果用户持仓中，没有基金类型中的基金
                console.log("not fund")
            }
            return (
                <div>
        			<div className="pl15 asset_title">
        				<p className="tac f17">{Message.NAV_BAR_INDEX}-{this.state.custInfo.custName}</p>
        				<span className="asset_person"></span>
        			</div>
                    <Notice/>
        			<div className="red_bg4 pl15 pr15 white pt12 pb15 bor_b_ddd">
        				<p className="f16 lh24">总资产(元)</p>
        				<div className="dt">
        					<div className="dtc asset_head">
        						<p className="cf lh58 fa"><span className="fl f35">{totalAmtqian}</span><span className="fl f23 lh24 mt22">{totalAmthou}</span></p>
        					</div>
        				</div>
        			</div>
        			<div className="pt10 pb10 bkgw dt pl20 pr20 bor_b_ddd mb10">
        				<p className="dtc pl38 w3x asset_various1">买基金</p>
        				<p className="dtc pl38 w3x asset_various2">定投合约</p>
        				<p className="dtc pl38 asset_various3">交易记录</p>
        			</div>
        			<div className="cf bkgw bor_t_ddd bor_b_ddd lh24 mt-1">
        				<div className="fl w50 pl15 pt10 pb10 bor_rd_d">
        					<p className="cf"><span className="f17 fwb fl">活期</span><span className="f12 gray9 pl10 fl fa">0.0</span></p>
        					<p className="f14 blue6 pt5">快速存，极速取</p>
        				</div>
        				<div className="fl w50 pl15 pt10 pb10">
        					<p className="cf"><span className="f17 fwb fl">活期+</span><span className="f12 gray9 pl10 fl fa">0.0</span></p>
        					<p className="f14 blue6 pt5">收益稳，轻松跑赢通账</p>
        				</div>
        			</div>
        			<div className="cf bkgw bor_t_ddd bor_b_ddd lh24 mt-1">
        				<div className="fl w50 pl15 pt10 pb10 bor_rd_d">
        					<p className="cf"><span className="f17 fwb fl">定期</span></p>
        					<p className="f15 blue6 pt5 fa">0.0</p>
        				</div>
        			</div>
        			<div className="bkgw bor_t_ddd bor_b_ddd mt10 lh24 pt12 pb12 pl15 pr15"
                        onClick={function () {
                            hashHistory.push({
                                pathname: '/addfund',
                                query: {
                                    arg: 'arg'
                                },
                            })
                        }}>
        				<p className="cf"><span className="fl f17 fwb">+ 点击添加自选基金</span></p>
        			</div>
        		</div>
            )
        } else {
            return (<Loading isShow={this.state.loading}/>)
        }
    }
}

export default Home
