/**
 * action配置 用户行为
 * Created by chenfeng on 2017/11/28.
 * tips(行为的抽象、普通JS对象、一般由方法生成、必须有一个唯一的type)
 */

 let nextTodoId = 0;

 /* 添加 */
 export const addTodo = (text) => {
 	return {
 		type: 'ADD_TODO', // 必填
 		id: nextTodoId++,
 		text
 	}
 }

 /* 底部显示状态 */
 export const setVisibility = (filter) => {
 	return {
 		type: "SET_VISIBILITY",
 		filter
 	}
 }

 /* 触发 */
 export const toggleTodo = (id) => {
 	return {
 		type: "TOGGLE_TODO",
 		id
 	}
 }
