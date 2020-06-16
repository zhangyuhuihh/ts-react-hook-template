import request from '@/assets/utils/request'

// POST /cigar/web/cigarProduct/getProductCategorys 获取所有种类
export function getProductCategorys(params) {
  return request({
    url: '/cigarProduct/getProductCategorys',
    method: 'post',
    params
  })
}

// POST /cigar/web/cigarProduct/insertProductCategory 新增雪茄种类
export function insertProductCategory(data) {
  return request({
    url: '/cigarProduct/insertProductCategory',
    method: 'post',
    data
  })
}

// POST /cigar/web/cigarProduct/updateProductCategoryById 编辑雪茄种类
export function updateProductCategoryById(data) {
  return request({
    url: '/cigarProduct/updateProductCategoryById',
    method: 'post',
    data
  })
}

// POST /cigar/web/cigarProduct/deleteCategoryById 删除雪茄种类
export function deleteCategoryById(params) {
  return request({
    url: '/cigarProduct/deleteCategoryById',
    method: 'post',
    params
  })
}
