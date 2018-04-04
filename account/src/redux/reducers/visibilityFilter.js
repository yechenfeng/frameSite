/**
 * reducer-visibilityFilter
 * Created by chenfeng on 2017/11/28.
 */

 /* 设置可见性 */
const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter
 		default:
 			return state
 	}
}

 export default visibilityFilter
