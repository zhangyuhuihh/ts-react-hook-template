import React, { FC, Fragment, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './views/HomePage'
import './App.css'
import { useDispatch } from 'react-redux'
import { setAuthArr } from '@/store/action'

const App: FC = () => {
  console.log('dev')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      setAuthArr([
        '表格',
        '学校管理',
        '学校管理-学生管理',
        '学校管理-学生管理-班级管理',
        '学校管理-教师管理',
        '学校管理-教师管理-授课管理',
      ])
    )
  }, [dispatch])

  return (
    <Fragment>
      <Router basename='/cigar-manage'>
        <HomePage></HomePage>
      </Router>
    </Fragment>
  )
}

export default App
