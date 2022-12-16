import _ from 'lodash'

const initState = {
  user: {},
  isLogin: false,
  loginIdentity: '',
  userEmail: '',
  activeNavIdx: 0,
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
