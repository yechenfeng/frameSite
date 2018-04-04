/**
 * redux组件-自选基金列表
 * Created by chenfeng on 2017/11/28.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed)
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

/**
 * [Todo 相当于render]
 * @param {[type]} onClick   [description]
 * @param {[type]} completed [description]
 * @param {[type]} text      [description]
 */
 const Todo = ({onClick, completed, text}) => (
	 <li className="todo-list_li" style={{textDecoration:completed ? "line-through" : "none", backgroundColor:completed ? "#ddd" : "#fff"}}>
	 	{text}
 		<span onClick={onClick} className="todo-list_del">{completed ? '增加自选' : '删除自选'}</span>
 	 </li>
 )

/**
 * [TodoList 纯UI，只关乎显示]
 * @param {[type]} todos       [mapStateToProps]
 * @param {[type]} onTodoClick [mapDispatchToProps]
 */
 const TodoList = ({todos, onTodoClick}) => (
	<ul className="list-group">
	{
		todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
			/>
		)}
	</ul>
)

/**
 * [VisibleTodoList connect]
 * 使用connect，实现 mapStateToProps-todos 和 mapDispatchToProps-onTodoClick ，两个参数传入TodoList
 * @type {[type]}
 */
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList
