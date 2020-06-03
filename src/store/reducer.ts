import { combineReducers } from 'redux'
import _ from 'lodash'
import {
  setOpenkeysAction,
  updataOpenKeysAction,
  setauthArrAction,
  addVisitiedViewsAction,
  removeVisitiedViewsAction,
  clearVisitiedViewsAction,
} from './action'

const routeWhiteList = ['首页权限']

const MenuReducer = (
  state: string[] = [],
  action: setOpenkeysAction | updataOpenKeysAction
) => {
  switch (action.type) {
    case 'SET_OPENKEYS':
      return action.openKeys
    case 'UPDATE_OPENKEYS':
      return _.uniq(action.addedKeys.concat(state))
    default:
      return state
  }
}

const authReducer = (state: string[] = [], action: setauthArrAction) => {
  switch (action.type) {
    case 'SET_AUTHARR':
      return routeWhiteList.concat(action.authArr)
    default:
      return state
  }
}

const initialstate = [
  {
    routeName: '首页',
    path: '/Dashboard',
  },
]

interface visitedViewsObj {
  routeName: string
  path: string
}

const visitedViewsReducer = (
  state: visitedViewsObj[] = initialstate,
  action: addVisitiedViewsAction | removeVisitiedViewsAction | clearVisitiedViewsAction
) => {
  switch (action.type) {  
    case 'ADD_VISITIEDVIEWS':
      const isHave = state.find((v) => v.path === action.visitedObj.path)
      if (isHave === undefined) {
        return state.concat(action.visitedObj)
      } else {
        (isHave as any).state = action.visitedObj.state
        return state
      }
    case 'REMOVE_VISITIEDVIEWS':
      return state.filter((v) => v.path !== action.visitedObj.path)
    case 'CLEAR_VISITIEDVIEWS':
      return initialstate
    default:
      return state
  }
}

const allReducers = combineReducers({
  Menu: MenuReducer,
  auth: authReducer,
  visitiedViews: visitedViewsReducer,
})
export default allReducers
