import http from './http'

// 유저 정보 불러오기
async function getUserInfo(mem_idx) {
  return await http.get(`/api/v1/account/mypage/main?mem_idx=${mem_idx}`)
}

// 교육기관 개설
async function postOpenInstitution(payload) {
  return await http.post('/api/v1/account/open-institution', payload)
}

const apiMypage = {
  getUserInfo,
  postOpenInstitution,
}

export default apiMypage
