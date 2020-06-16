import request from '@/assets/utils/request'

export function findCigarPage(params) {
  return request({
    url: '/cigarProduct/findCigarPage',
    method: 'post',
    params
  })
}
export function deleteProductById(params) {
  return request({
    url: '/cigarProduct/deleteProductById',
    method: 'post',
    params
  })
}
export function insertProduct(data) {
  return request({
    url: '/cigarProduct/insertProduct',
    method: 'post',
    data
  })
}
export function updateProductById(data) {
  return request({
    url: '/cigarProduct/updateProductById',
    method: 'post',
    data
  })
}
export function getProductBrands() {
  return request({
    url: '/cigarProduct/getProductBrands',
    method: 'post'
  })
}
export function deleteProductBranch(data) {
  return request({
    url: '/cigarProduct/deleteProductBranch',
    method: 'post',
    data
  })
}
