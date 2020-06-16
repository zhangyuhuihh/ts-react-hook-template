import request from '@/assets/utils/request'

// POST /cigar/web/cigarProduct/getProductBrands 获取所有雪茄品牌
export function getProductBrands(params) {
  return request({
    url: '/cigarProduct/getProductBrands',
    method: 'post',
    params
  })
}

// POST /cigar/web/cigarProduct/insertProductBrand 新增雪茄品牌
export function insertProductBrand(data) {
  return request({
    url: '/cigarProduct/insertProductBrand',
    method: 'post',
    data
  })
}

// POST /cigar/web/cigarProduct/updateProductBrandById 编辑雪茄品牌
export function updateProductBrandById(data) {
  return request({
    url: '/cigarProduct/updateProductBrandById',
    method: 'post',
    data
  })
}

// POST /cigar/web/cigarProduct/deleteProductBrandById 删除雪茄品牌
export function deleteProductBrandById(params) {
  return request({
    url: '/cigarProduct/deleteProductBrandById',
    method: 'post',
    params
  })
}
