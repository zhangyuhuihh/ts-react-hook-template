import React, { Suspense, memo } from 'react'
import { Spin } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteConfig } from '@/route'
import _ from 'lodash'
import NoMatch from '@/components/NoMatch'

function AppMain() {
  const renderRoute = (routeList) => {
    let arr = []
    const itera = (routeList) => {
      routeList.forEach((item) => {
        if (!_.isEmpty(item.children)) {
          itera(item.children)
        } else {
          arr.push(
            <Route
              exact
              name={item.role}
              key={item.path}
              path={item.path}
              component={item.component}
            ></Route>
          )
        }
      })
    }
    itera(routeList)

    return arr
  }
  const rendereDirect = (routeList) => {
    const newList = routeList.filter((v) => v.redirect)
    let arr = []
    const itera = (List) => {
      List.forEach((item) => {
        if (item.redirect) {
          arr.push(
            <Redirect
              exact
              from={item.path}
              to={item.redirect}
              key={item.path}
            ></Redirect>
          )
        }
        item.children && itera(item.children)
      })
    }

    itera(newList)
    return arr
  }
  return (
    <Suspense fallback={<Spin delay={400} />}>
      <Switch>
        <Redirect exact from='/' to='/Dashboard' />
        {rendereDirect(RouteConfig)}
        {renderRoute(RouteConfig)}
        <Route component={NoMatch}></Route>
      </Switch>
    </Suspense>
  )
}
export default memo(AppMain)
