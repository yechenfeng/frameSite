/**
 * 公用组件-公告
 * Created by chenfeng on 2017/11/28.
 */

import React, {Component} from 'react'
import Request from  '../constant/Request'

export default class Notice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.queryNotice() // 查询公告信息
    }

    queryNotice() {
        Request.AJAX(Request.NOTICE, null, function (data) {
            if (data && data.code == '0000') {
                this.setState({
                    data: (data.body && data.body.length != 0) ? data.body : null
                })
            } else {
                this.setState({
                    data: null
                })
            }
        }.bind(this))
    }

    handleClose(e) {
        let currentTarget = e.currentTarget
        $(currentTarget).parent().addClass('hide')
    }

    render() {
        if (this.state.data) {
            return (
                <p className="news-tips1 pl32 pr35 pt10 pb10 lh22 ft14 white owh gray_bg4 p_r">
                    <i>&nbsp;</i>
                    <span>{this.state.data[0].tipMsg}</span>
                    <span onClick={this.handleClose.bind(this)} className="close">（删除）&nbsp;</span>
                </p>
            )
        } else {
            return null
        }

    }
}
