import axios from 'axios'

axios.defaults.headers = { 'Content-Type': 'application/json' }
const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.VUE_APP_API_URL,
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
