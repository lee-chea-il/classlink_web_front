import http from './http'

// 트리뷰 리스트 가져오기
const getTreeViewList = async (payload) => {
  return await http.get(
    `/api/v1/prepare-class/curriculum/tree-curriculum-get-list?type=${payload.type}`
  )
}

// 트리뷰에 폴더 생성
const addTreeViewListFolder = async (payload) => {
  console.log('payload  ',payload)
  return await http.post(
    '/api/v1/prepare-class/curriculum/curriculum-foler-set-append', payload
  )
}
const apiClassCurriculum = {
  getTreeViewList,
  addTreeViewListFolder,
}

export default apiClassCurriculum
