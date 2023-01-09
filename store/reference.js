// import http from '@/services/http'
// import _ from 'lodash'

// const initState = {
//   institutionData: [],
//   franchiseData: [],
//   openData: [],
//   myData: [],
// }

export const state = () => {
  // return _.cloneDeep(initState)
}

export const mutations = {
  getInstiturionData(state, payload) {
    state.institutionData = payload
  },
}

export const actions = {
  // async fetchUser(payload) {
  //   const response = await http.postLogin('/getLogin', payload)
  //   state.commit('setUser', response.data)
  // },
}
