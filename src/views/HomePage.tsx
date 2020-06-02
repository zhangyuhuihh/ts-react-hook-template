import React, { FC, Fragment } from 'react'
import MyLayOut from './layOut/LayOut'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import NoMatch from '@/components/NoMatch'
import Login from './login'

import SinglePage from '@/views/test/SinglePage'

const HomePage: FC = () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/SinglePage' component={SinglePage} />
        <Route
          path='/'
          render={() => {
            return sessionStorage.getItem('account') ? (
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
