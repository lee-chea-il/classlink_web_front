import _ from 'lodash'
// import http from '@/services/http'
const initState = {
  isLogin: false,
  loginIdentity: '',
  userEmail: '',
}

export const state = () => {
  return _.cloneDeep(initState)
}

export const mutations = {
  // 로그인
  setUserLogin(state) {
    state.isLogin = true
  },
  // 로그인 신분 타입
  setUserIdentity(state, type) {
    state.loginIdentity = type
  },
  // 로그아웃
  setUserLogout(state) {
    state.isLogin = false
  },
  // 비밀번호 재설정
  setUserEmail(state, email) {
    state.userEmail = email
  },

  // state 초기화
  initState(state) {
    Object.assign(state, _.cloneDeep(initState))
  },
}

// export const actions = {
//   async fetchUser(payload) {
//     const response = await http.postLogin('/getLogin', payload)
//     state.commit('setUser', response.data)
//   },
// }
