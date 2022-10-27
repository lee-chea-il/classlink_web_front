import http from '@/services/http'
export const state = () => ({
  userInfo: {
    name: '김우주',
  },
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async fetchUser(payload) {
    const response = await http.postLogin('/getLogin', payload)
    state.commit('setUser', response.data)
  },
}
