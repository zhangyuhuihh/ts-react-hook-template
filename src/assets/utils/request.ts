import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import _ from 'lodash'
import getHeaders from './distinguishHeader'

const request = (config: AxiosRequestConfig = {}) => {
  const { url } = config
  const omitConfig = _.omit(config, ['url'])

  const _baseURL = '/cigar/web'

  const _config: AxiosRequestConfig = {
    url: _baseURL + url,
    timeout: 5000,
    method: 'get',
    headers: getHeaders(),
    ...omitConfig,
  }

  const promise = axios(_config).then((result) => {
    const body = result.data
    switch (body.code) {
      case '00000':
        return Promise.resolve(body)

      // 11111: token无权限, 22222:长时间未操作, 33333别处登录
      case '11111':
      case '22222':
      case '33333':
      case '44444':
        message.error(body.msg)
        setTimeout(() => {
          window.location.href = '/react-admin-template/login'
        }, 3000)
        break
      case '99999':
        message.error('操作失败')
        return Promise.reject(body)

      default:
        return Promise.reject(body)
    }
  })
  return promise
}

export default request
