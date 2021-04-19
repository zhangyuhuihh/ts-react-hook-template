import React, { FC, Fragment } from 'react'
import MyLayOut from '@/layOut/LayOut'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import NoMatch from '@/components/NoMatch/index'
import Login from './login'

const HomePage: FC = () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/login' component={Login} />
        <Route
          path='/'
          render={() => {
            return sessionStorage.getItem('accountId') ? (
              <MyLayOut />
            ) : (
              <Redirect to='/login' />
            )
          }}
        />
        <Route component={NoMatch}></Route>
      </Switch>
    </Fragment>
  )
}

export default withRouter(HomePage)
