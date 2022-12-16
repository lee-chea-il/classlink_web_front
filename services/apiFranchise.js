import http from './http'

// 가맹점리스트
async function getFranchiseList(mem_idx) {
  return await http.get(`/api/v1/management/franchise/list?mem_idx=${mem_idx}`)
}

async function postFranchiseSearchCode(code) {
  return await http.post(
    `/api/v1/management/franchise/search-code?code=${code}`
  )
}

const apiFranchise = {
  getFranchiseList,
  postFranchiseSearchCode,
}

export default apiFranchise
