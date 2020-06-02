const SET_OPENKEYS = 'SET_OPENKEYS'
const UPDATE_OPENKEYS = 'UPDATE_OPENKEYS'
const SET_AUTHARR = 'SET_AUTHARR'
const ADD_VISITIEDVIEWS = 'ADD_VISITIEDVIEWS'
const REMOVE_VISITIEDVIEWS = 'REMOVE_VISITIEDVIEWS'
const CLEAR_VISITIEDVIEWS = 'CLEAR_VISITIEDVIEWS'
export const setOpenkeys = (arr) => ({ type: SET_OPENKEYS, openKeys: arr })
export const updateOpenKeys = (arr) => ({
  type: UPDATE_OPENKEYS,
  addedKeys: arr
})
export const setAuthArr = (arr) => ({ type: SET_AUTHARR, authArr: arr })
export const addVisitiedViews = (o) => ({
  type: ADD_VISITIEDVIEWS,
  visitedObj: o
})

export const clearVisitiedViews = () => ({
  type: CLEAR_VISITIEDVIEWS
})
export const removeVisitiedViews = (o) => ({
  type: REMOVE_VISITIEDVIEWS,
  visitedObj: o
})
