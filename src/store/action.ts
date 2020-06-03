const SET_OPENKEYS = 'SET_OPENKEYS'
type SET_OPENKEYS = typeof SET_OPENKEYS

const UPDATE_OPENKEYS = 'UPDATE_OPENKEYS'
type UPDATE_OPENKEYS = typeof UPDATE_OPENKEYS

const SET_AUTHARR = 'SET_AUTHARR'
type SET_AUTHARR = typeof SET_AUTHARR

const ADD_VISITIEDVIEWS = 'ADD_VISITIEDVIEWS'
type ADD_VISITIEDVIEWS = typeof ADD_VISITIEDVIEWS

const REMOVE_VISITIEDVIEWS = 'REMOVE_VISITIEDVIEWS'
type REMOVE_VISITIEDVIEWS = typeof REMOVE_VISITIEDVIEWS

const CLEAR_VISITIEDVIEWS = 'CLEAR_VISITIEDVIEWS'
type CLEAR_VISITIEDVIEWS = typeof CLEAR_VISITIEDVIEWS

export interface setOpenkeysAction {
  openKeys: string[]
  type: SET_OPENKEYS
}

export interface updataOpenKeysAction {
  addedKeys: string[]
  type: UPDATE_OPENKEYS
}

export interface setauthArrAction {
  authArr: string[]
  type: SET_AUTHARR
}

export interface addVisitiedViewsAction {
  type: ADD_VISITIEDVIEWS
  visitedObj: tagsViewObj
}

export interface clearVisitiedViewsAction {
  type: CLEAR_VISITIEDVIEWS
}

export interface removeVisitiedViewsAction {
  type: REMOVE_VISITIEDVIEWS
  visitedObj: tagsViewObj
}

export const setOpenkeys = (arr: string[]): setOpenkeysAction => ({
  type: SET_OPENKEYS,
  openKeys: arr,
})

export const updateOpenKeys = (arr: string[]): updataOpenKeysAction => ({
  type: UPDATE_OPENKEYS,
  addedKeys: arr,
})

export const setAuthArr = (arr: string[]): setauthArrAction => ({
  type: SET_AUTHARR,
  authArr: arr,
})

interface tagsViewObj {
  routeName: string
  path: string
  state: string
}

export const addVisitiedViews = (o: tagsViewObj): addVisitiedViewsAction => ({
  type: ADD_VISITIEDVIEWS,
  visitedObj: o,
})

export const clearVisitiedViews = (): clearVisitiedViewsAction => ({
  type: CLEAR_VISITIEDVIEWS,
})

export const removeVisitiedViews = (
  o: tagsViewObj
): removeVisitiedViewsAction => ({
  type: REMOVE_VISITIEDVIEWS,
  visitedObj: o,
})
