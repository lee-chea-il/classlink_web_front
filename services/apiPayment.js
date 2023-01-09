import http from './http'
// 로그인
async function postLogin(userPayload) {
  return await http.post('/api/v1/account/login', userPayload)
}

const apiPayment = {
  postLogin,
}

export default apiPayment
