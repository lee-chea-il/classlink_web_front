import _ from 'lodash'

const initState = {
  user: {},
  isLogin: false,
  loginIdentity: '',
  userEmail: '',
  isReset: false,
}
export const state = () => {
  return _.cloneDeep(initState)
}
export const mutations = {
  // 로그인 유저 정보
  setUser(state, user) {
    state.user = user
  },
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
  // 비밀번호 초기화 후 비밀번호 재설정
  setPwResetFlag(state) {
    if (state.isReset) {
      state.isReset = false
    } else {
      state.isReset = true
    }
  },

  setActiveNavIdx(state, payload) {
    state.activeNavIdx = payload
  },

  // state 초기화
  initState(state) {
    Object.assign(state, _.cloneDeep(initState))
  },
}

export const actions = {
  // async fetchUser(payload) {
  //   const response = await http.postLogin('/getLogin', payload)
  //   state.commit('setUser', response.data)
  // },
}
