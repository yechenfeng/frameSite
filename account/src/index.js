/**
 * 路由配置
 * Created by chenfeng on 2017/11/28.
 */

require('./theme/css/common.css')
require('./theme/css/components.css')
require('./theme/css/containers.css')

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import BaseData from './utils/BaseData'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoApp from './redux/reducers'

/* 路由切割模块 */
const HomeContainer = (location, cb) => { // =>首页
    require.ensure([], require => {
        cb(null, require('./containers/Home').default)
    },'Home')
}
const AddFundContainer = (location, cb) => { // =>添加自选基金
    require.ensure([], require => {
        cb(null, require('./containers/Trade/AddFund').default)
    },'AddFund')
}

/* 初始化请求数据 */
BaseData.getCustInfo()

/* redux 数据仓库 */
const store = createStore(todoApp, composeWithDevTools())

/* router 路由列表 */
render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" getComponent={HomeContainer}></Route>
                <Route path="/home" getComponent={HomeContainer}/>
                <Route path="/addfund" getComponent={AddFundContainer}/>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
