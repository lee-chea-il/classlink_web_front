import http from './http'

// 가맹점리스트
async function getFranchiseList(mem_idx) {
  return await http.get('/api/v1/management/franchise/list', mem_idx)
}

const apiFranchise = {
  getFranchiseList,
}

export default apiFranchise
