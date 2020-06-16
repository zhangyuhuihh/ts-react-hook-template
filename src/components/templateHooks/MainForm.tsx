import React, { forwardRef, useImperativeHandle } from 'react'
import { Form, Input } from 'antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}
// const tailLayout = {
//   wrapperCol: { offset: 4, span: 20 },
// }

interface Pps {
  initValues: any
}

const addEditForm = forwardRef((props: Pps, ref) => {
  const [form] = Form.useForm()
  const { initValues } = props

  useImperativeHandle(ref, () => ({
    form,
  }))

  return (
    <Form
      form={form}
      {...layout}
      name='basic'
      initialValues={{ ...initValues }}
      scrollToFirstError={true}
    >
      <Form.Item
        label='种类名称'
        name='category'
        rules={[{ required: true, message: '请输入种类名称' }]}
        initialValue={initValues.category}
      >
        <Input placeholder={'请输入种类名称'} className='i_w' />
      </Form.Item>
      <Form.Item
        label='备注'
        name='remark'
        initialValue={initValues.remark || ''}
      >
        <Input.TextArea placeholder={'请输入备注'} className='i_w' />
      </Form.Item>
    </Form>
  )
})
export default addEditForm
