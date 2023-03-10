import http from './http'
// 로그인
async function postLogin(userPayload) {
  return await http.post('/api/v1/account/login', userPayload)
}

// 회원가입
async function postSignup(payload) {
  return await http.post('/api/v1/account/sign-up', payload)
}
// 아이디 중복체크
async function getIdCheck(id) {
  return await http.get(`/api/v1/account/check-id?id=${id}`)
}
// 이메일 중복체크
async function getEmailCheck(email) {
  return await http.get(`/api/v1/account/check-email?email=${email}`)
}

// 교육기관 개설
async function postOpenInstitution(payload) {
  return await http.post('/api/v1/institution', payload)
}

// 유저 정보 불러오기
async function getUserInfo() {
  return await http.get('/api/v1/account/me')
}

// 아이디 찾기
async function getFindId(email) {
  return await http.get(`/api/v1/account/find-id?email=${email}`)
}

// 비밀번호 찾기
async function getFindPw(email, id) {
  return await http.get(`/api/v1/account/find-pw?email=${email}&id=${id}`)
}

// 비밀번호 변경
async function putUpdatePw(payload) {
  return await http.put('/api/v1/account/pw', payload)
}

// 로그인 한 유저 비밀번호 변경
async function putUpdateLoginPw(payload) {
  return await http.put('/api/v1/mypage/pw', payload)
}

const apiLogin = {
  postLogin,
  postSignup,
  getIdCheck,
  getEmailCheck,
  getUserInfo,
  postOpenInstitution,
  getFindId,
  getFindPw,
  putUpdatePw,
  putUpdateLoginPw,
}

export default apiLogin
