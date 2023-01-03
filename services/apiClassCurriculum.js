import http from './http'

// 트리뷰 리스트 가져오기
const getTreeViewList = async (payload) => {
  return await http.get(
    `/api/v1/prepare-class/curriculum/tree-view-list?type=${payload.type}`
  )
}

// 트리뷰에 폴더 생성
const addFolderTreeViewList = async (payload) => {
  return await http.post(
    '/api/v1/prepare-class/curriculum/tree-view-list/folder', payload
  )
}

// 트리뷰에 폴더 삭제
const deleteFolderTreeViewList = async (payload) => {
  // console.log('-------- MD/1-2-3 ',payload)
  return await http.delete(`/api/v1/prepare-class/curriculum/tree-view-list/folder/${payload}`)
}

// 트리뷰에 폴더 수정
const updateFolderTreeViewList = async (data) => {
  console.log('--------',data)
  return await http.put(
    '/api/v1/prepare-class/curriculum/tree-view-list/folder', data
  )
}

const apiClassCurriculum = {
  getTreeViewList,
  addFolderTreeViewList,
  deleteFolderTreeViewList,
  updateFolderTreeViewList,
}

export default apiClassCurriculum
