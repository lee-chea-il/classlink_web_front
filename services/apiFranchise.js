import http from './http'

// 가맹점리스트
async function getFranchiseList(mem_idx) {
  return await http.get(`/api/v1/management/franchise/list?mem_idx=${mem_idx}`)
}

async function getFranchiseSearchCode(code) {
  return await http.get(`/api/v1/management/franchise/search-code?code=${code}`)
}

const apiFranchise = {
  getFranchiseList,
  getFranchiseSearchCode,
}

export default apiFranchise
