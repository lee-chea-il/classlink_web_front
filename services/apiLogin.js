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
  return await http.get(`/api/v1/account/sign-up/id-check?id=${id}`)
}

const apiLogin = {
  postLogin,
  postSignup,
  getIdCheck,
}

export default apiLogin
