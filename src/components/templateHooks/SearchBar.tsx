import React, { forwardRef, useImperativeHandle } from 'react'
import { Form, Input } from 'antd'

interface Pps {
  searchSubmit: any
}

const SearchBar = forwardRef((props: Pps, ref) => {
  const [form] = Form.useForm()
  const { searchSubmit } = props

  useImperativeHandle(ref, () => ({
    form,
  }))

  return (
    <Form layout='inline' form={form}>
      <Form.Item name='keywords'>
        <Input.Search
          placeholder='输入名称搜索'
          style={{ width: 240 }}
          onSearch={searchSubmit}
        />
      </Form.Item>
    </Form>
  )
})

export default SearchBar
