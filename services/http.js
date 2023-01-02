import axios from 'axios'

axios.defaults.baseURL = 'http://112.171.101.31:45490'
// axios.defaults.baseURL = 'http://112.171.101.31:30118'
axios.defaults.headers = { 'Content-Type': 'application/json' }
const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://112.171.101.31:45490',
  /* baseURL: 'http://localhost:8301', */
  timeout: 10000,
})

http.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  const temp = config
  temp.headers.Authorization = `Bearer ${token}`

  return temp
})

export default http
