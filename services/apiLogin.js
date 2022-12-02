import http from './http'

async function postLogin(userPayload) {
  return await http.post('/api/v1/account/login', userPayload)
}

const apiLogin = {
  postLogin,
}

export default apiLogin
