/**
 * redux组件-添加自选基金头部
 * Created by chenfeng on 2017/11/28.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

let AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input className="todo-input mt12 mr10" ref={node => {input = node}} />
                <button className="todo-btn" type="submit" >添加自选</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
