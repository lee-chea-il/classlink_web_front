
// import http from '@/services/http'
export const state = () => ({
  isLogin: false,
  userInfo: {},
  loginIdentity: '',
})

export const mutations = {
  // 로그인
  setUserLogin(state) {
    state.isLogin = true
  },
  // 로그인 유저 정보
  setUser(state, user) {
    state.userInfo = user
  },
  // 로그인 신분 타입
  setUserIdentity(state, type) {
    state.loginIdentity = type
  },
  // 로그아웃
  setUserLogout(state) {
    state.isLogin = false
  },
  // 로그인 유저 정보 초기화
  initUserInfo(state) {
    state.user_info = null
  },
}

// export const actions = {
//   async fetchUser(payload) {
//     const response = await http.postLogin('/getLogin', payload)
//     state.commit('setUser', response.data)
//   },
// }
