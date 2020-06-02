import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'

const NoMatch: FC = (props) => {
  const handleClick = () => {
    // props.history.replace('/Dashboard')
  }

  return (
    <Result
      status='404'
      title='404'
      subTitle='对不起，您访问的页面不存在！~'
      extra={
        <Button onClick={handleClick} type='primary'>
          返回首页
        </Button>
      }
    />
  )
}

export default withRouter(NoMatch)
