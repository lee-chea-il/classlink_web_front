import http from './http'

// 로그인
async function postLogin(mem_id) {
  return await http.post('/api/v1/account/mypage/main')
}

const apiLogin = {
  postLogin,
}

export default apiLogin
