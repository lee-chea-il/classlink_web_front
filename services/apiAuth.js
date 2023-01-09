import http from './http'

// 유저 정보 & 권한 정보
async function getUserAuthInfo() {
  return await http.get('/api/v1/account/me')
}

// 선생님 정보 (과목)
async function getTeacherInfo() {
  return await http.get('/api/v1/management/operation/teacher/me')
}

const apiLogin = {
  getUserAuthInfo,
  getTeacherInfo,
}

export default apiLogin
