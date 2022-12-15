import http from './http'

// 유저 정보 불러오기
async function getUserInfo(mem_idx) {
  return await http.get(`/api/v1/account/mypage/main?mem_idx=${mem_idx}`)
}

// 교육기관 개설
async function postOpenInstitution(payload) {
  return await http.post('/api/v1/account/open-institution', payload)
}

// 교육기관 정보 수정
async function putUpdateInstitution(payload) {
  return await http.put('/api/v1/account/mypage/update-institution', payload)
}

// 비밀번호 변경
async function putUpdatePw(payload) {
  return await http.put('/api/v1/account/mypage/upd-pw', payload)
}

const apiMypage = {
  getUserInfo,
  postOpenInstitution,
  putUpdatePw,
  putUpdateInstitution
}

export default apiMypage
