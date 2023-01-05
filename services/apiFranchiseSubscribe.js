import http from './http'

// 가맹점리스트
async function getFranchiseList(mem_idx) {
  return await http.get(`/api/v1/management/franchise/lists?mem_idx=${mem_idx}`)
}

async function getFranchiseSearchCode(code) {
  return await http.get(`/api/v1/management/franchise/code?code=${code}`)
}

const apiFranchise = {
  getFranchiseList,
  getFranchiseSearchCode,
}

export default apiFranchise
