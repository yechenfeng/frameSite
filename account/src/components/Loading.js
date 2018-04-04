/**
 * 公用组件-加载中
 * Created by chenfeng on 2017/11/28.
 */

import React, {Component} from 'react'

export default class Loading extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShow: props.isShow,
            title: props.title ? this.state.title : '加载中...'
        }
    }

    render() {
        return (
            <div className={this.state.isShow ? "dialog-bg" : "hide"}>
                <div className="c_loading">
                    <ul>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                    </ul>
                    <p>{this.state.title}</p>
                </div>
            </div>
        )
    }
}
