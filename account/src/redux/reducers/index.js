/**
 * reducer配置 分发action(用户行为)
 * Created by chenfeng on 2017/11/28.
 * tips(响应的抽象、纯方法、传入旧状态和action、返回新状态)
 */

 import todos from './todos'
 import visibilityFilter from './visibilityFilter'
 import { combineReducers } from 'redux'

 const todoApp = combineReducers({
 	todos,
 	visibilityFilter
 })

 export default todoApp
