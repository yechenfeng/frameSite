/**
 * redux组件-tab切换
 * Created by chenfeng on 2017/11/28.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibility } from '../redux/actions'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibility(ownProps.filter))
		}
	}
}

const Link = ({ active, children, onClick }) => (
	<div className="todo-tab_item">
		<a href = "#" style={{ color: active? '#f01414' : '#4d555d' }}
			onClick = {
				e => {
					e.preventDefault()
					onClick()
				}
			}>
			{children}
		</a>
	</div>
)

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

/**
 * [Bar 纯UI，只关乎显示]
 */
const Bar = () => (
    <div className="todo-tab">
		<FilterLink filter="SHOW_ALL">全部基金</FilterLink>
		<FilterLink filter="SHOW_ACTIVE">自选基金</FilterLink>
		<FilterLink filter="SHOW_COMPLETED">已删除基金</FilterLink>
	</div>
)

export default Bar
