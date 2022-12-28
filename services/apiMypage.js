import http from './http'

// 유저 정보 불러오기
async function getUserInfo(mem_idx) {
  return await http.get(`api/v1/mypage?mem_idx=${mem_idx}`)
}

// 교육기관 개설
async function postOpenInstitution(payload) {
  return await http.post('/api/v1/institution', payload)
}

// 교육기관 정보 수정
async function putUpdateInstitution(payload) {
  return await http.put('/api/v1/mypage/institution', payload)
}

// 비밀번호 변경
async function putUpdatePw(payload) {
  return await http.put('/api/v1/mypage/pw', payload)
}

// 내 정보 수정
// 내 정보 수정
async function putUpdateUserInfo(payload) {
  return await http.put('/api/v1/mypage/my-info', payload)
}
// 이메일 중복체크
async function getEmailCheck(email) {
  return await http.get(`/api/v1/account/sign-up/email-check?email=${email}`)
}

// 프랜차이즈 개설
async function postOpenFranchise(payload) {
  return await http.post('/api/v1/franchise', payload)
}

// 개설 후 state 업데이트 하기 위한 정보 불러오기
async function getNewUserInfo() {
  return await http.get('/api/v1/account/me')
}

// 알림 팝업
async function putUpdateAlarm(payload) {
  return await http.put('/api/v1/mypage/alarm', payload)
}

const apiMypage = {
  getUserInfo,
  postOpenInstitution,
  putUpdatePw,
  putUpdateInstitution,
  getEmailCheck,
  putUpdateUserInfo,
  postOpenFranchise,
  getNewUserInfo,
  putUpdateAlarm,
}

export default apiMypage
