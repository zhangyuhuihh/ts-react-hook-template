import React, { FC, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './views/HomePage'
import './App.css'

const App: FC = () => (
  <Fragment>
    <Router basename='/cigar-manage'>
      <HomePage></HomePage>
    </Router>
  </Fragment>
)

export default App
