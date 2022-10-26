import http from './http'

async function postLogin(userPayload) {
  return await http.post('/postLogin', userPayload)
}

const apiLogin = {
  postLogin,
}

export default apiLogin
