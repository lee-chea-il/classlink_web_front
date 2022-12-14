import _ from 'lodash'

const initState = {
  user: {},
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
