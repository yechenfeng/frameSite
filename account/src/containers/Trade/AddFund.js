/**
 * 添加自选基金
 * Created by chenfeng on 2017/11/28.
 */

import React, { Component } from 'react'
import AddTodo from '../../components/AddTodo' // redux组件-添加自选基金头部
import Bar from '../../components/Bar' // redux组件-tab切换
import VisibleTodoList from '../../components/VisibleTodoList' // redux组件-自选基金列表

class AddFund extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="todo-box">
        		<div className="todo-innerBox">
                    <AddTodo />
        			<Bar />
        			<VisibleTodoList />
        		</div>
        	</div>
        )
    }
}

export default AddFund
