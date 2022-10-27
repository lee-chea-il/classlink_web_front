// import http from '@/services/http'
export const state = () => ({
  activeNavIdx: 0,
})

export const mutations = {
  setActiveNavIdx(state, payload) {
    state.activeNavIdx = payload
  },
}

export const actions = {
  // async fetchUser(payload) {
  //   const response = await http.postLogin('/getLogin', payload)
  //   state.commit('setUser', response.data)
  // },
}
