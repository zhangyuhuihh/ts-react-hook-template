import React, { useState, useRef } from 'react'
import { Button, Table, Modal, message } from 'antd'
import { useFormTable } from '@umijs/hooks'
import MainForm from './MainForm'
import useModal from '@/components/hooks/useModal'
import { PaginatedParams } from '@umijs/hooks/lib/useFormTable'
import SearchBar from './SearchBar'
import { AxiosPromise } from 'axios'
import request from '@/assets/utils/request.ts'
// import {
//   getProductCategorys as apiTableData,
//   insertProductCategory as apiAddData,
//   updateProductCategoryById as apiUpdateData,
//   deleteCategoryById as apiDeleteData,
// } from '@/assets/api/cigarproductinfo/cigarvariety.js'

const apiTableData = (params: BodyParam): AxiosPromise<any> => {
  return request({
    data: { keywords: params.keywords },
  })
}
const apiAddData = (params: BodyParam): AxiosPromise<any> => {
  return request({
    data: { keywords: params.keywords },
  })
}
const apiUpdateData = (params: BodyParam): AxiosPromise<any> => {
  return request({
    data: { keywords: params.keywords },
  })
}
const apiDeleteData = (params): AxiosPromise<any> => {
  return request({ params })
}

interface BodyParam {
  keywords: string
}

interface Item {
  name: {
    last: string
  }
  email: string
  phone: string
  gender: 'male' | 'female'
}

interface Result {
  total: number
  list: Item[]
}
// @ts-igore

const MAINROWKEY = 'categoryId'

const { confirm } = Modal

const getTableData = (
  { current, pageSize }: PaginatedParams[0],
  formData: any
): Promise<any> => {
  const { keywords } = formData
  return apiTableData({
    keywords: keywords,
    // page: current,
    // pageSize,
  }).then((res: any) => ({
    list: res.list,
    // list: res.data.rows,
    total: res.total,
  }))
}

function MainComp() {
  const mainFormRef = useRef(null)
  const searchFormRef = useRef(null)

  const { tableProps, search, refresh: refreshTable } = useFormTable(
    getTableData,
    {
      defaultPageSize: 10,
      form: (searchFormRef.current as any).form,
      loadingDelay: 200,
    }
  )
  const [
    { modalTitleName, modalvisible },
    { setModalTitleName, setModalVisible },
  ] = useModal()

  const [initFormValues, setinitFormValues] = useState({})
  const [currentFormKey, setcurrentFormKey] = useState('')
  // const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const { submit } = search

  const columns: any = [
    {
      title: '资料名称',
      dataIndex: 'category',
    },
    {
      title: '类别',
      dataIndex: 'remark',
    },
    {
      title: '适用范围',
      dataIndex: 'remark',
    },
    {
      width: 350,
      dataIndex: 'action',
      title: '操作',
      align: 'center',
      render: (text, record, index) => {
        return (
          <div>
            <Button
              onClick={() => handleEdit(record)}
              type='primary'
              style={{ marginRight: '10px' }}
            >
              编辑
            </Button>
            {/* @ts-ignore */}
            <Button onClick={() => handleDelete(record)} type='danger'>
              删除
            </Button>
          </div>
        )
      },
    },
  ]

  const handleAdd = () => {
    setModalTitleName!('新增')
    setModalVisible!(true)
  }

  const handleEdit = (record) => {
    setModalVisible!(true)
    setModalTitleName!('编辑')
    setinitFormValues({ ...record })
    setcurrentFormKey(record[MAINROWKEY])
  }

  const handleDelete = (record) => {
    confirm({
      title: '提示?',
      content: '确认删除嘛?',
      okText: '是',
      okType: 'danger',
      cancelText: '否',
      onOk() {
        handletoDeleteService([record[MAINROWKEY]])
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  // const handleBothDelete = () => {
  //   confirm({
  //     title: '提示?',
  //     content: '确认批量删除嘛?',
  //     okText: '是',
  //     okType: 'danger',
  //     cancelText: '否',
  //     onOk() {
  //       handletoBothDeleteService()
  //     },
  //     onCancel() {
  //       console.log('Cancel')
  //     },
  //   })
  // }

  const handletoAddService = (bodyParams) => {
    apiAddData(bodyParams)
      .then((res) => {
        message.success('新增成功')
        setModalVisible!(false)
        refreshTable()
      })
      .catch((error) => {
        message.error(error.msg)
      })
  }

  const handletoEditService = (bodyParams) => {
    apiUpdateData({
      ...bodyParams,
      [MAINROWKEY]: currentFormKey,
    })
      .then((res) => {
        message.success('编辑成功')
        setModalVisible!(false)
        refreshTable()
      })
      .catch((error) => {
        message.error(error.msg)
      })
  }

  const handletoDeleteService = (idArr) => {
    apiDeleteData({ [MAINROWKEY]: idArr[0] })
      .then((res) => {
        message.success('删除成功')
        refreshTable()
      })
      .catch((error) => {
        message.error(error.msg)
      })
  }

  // const handletoBothDeleteService = () => {}

  const doSubmit = () => {
    // @ts-ignore
    const formToValidate = mainFormRef.current.form
    formToValidate
      .validateFields()
      .then((values) => {
        if (modalTitleName === '新增') {
          const queryParams = {
            ...values,
          }
          handletoAddService(queryParams)
          return
        }
        if (modalTitleName === '编辑') {
          const queryParams = {
            ...values,
          }
          handletoEditService(queryParams)
          return
        }
      })
      .catch((e) => {
        console.log('e: ', e)
      })
  }

  const resetForm = () => {
    setcurrentFormKey(String(new Date().getTime()))
    setinitFormValues({})
  }

  const renderModal = () => {
    return (
      <Modal
        width={600}
        afterClose={() => resetForm()} // 这个周期发生在promise之前？
        title={modalTitleName}
        visible={modalvisible}
        onOk={doSubmit}
        onCancel={() => {
          setModalVisible!(false)
          resetForm()
        }}
      >
        <MainForm
          key={currentFormKey}
          initValues={initFormValues}
          ref={mainFormRef}
        ></MainForm>
      </Modal>
    )
  }

  const rendersearchFrom = () => {
    return (
      <div
        style={{
          marginBottom: 16,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Button
            onClick={handleAdd}
            type='primary'
            style={{ marginRight: '20px' }}
          >
            新增
          </Button>
          {/* <Button onClick={handleBothDelete} type="danger">
            批量删除
          </Button> */}
        </div>
        <div>
          <SearchBar ref={searchFormRef} searchSubmit={submit}></SearchBar>
        </div>
      </div>
    )
  }

  // const onSelectChange = (selectedRowKeys) => {
  //   console.log('selectedRowKeys changed: ', selectedRowKeys)
  //   setSelectedRowKeys(selectedRowKeys)
  // }

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // }

  return (
    <div>
      {rendersearchFrom()}
      <Table
        // rowSelection={rowSelection}
        columns={columns}
        scroll={{ y: 600 }}
        rowKey={MAINROWKEY}
        {...tableProps}
      />
      {renderModal()}
    </div>
  )
}
export default MainComp