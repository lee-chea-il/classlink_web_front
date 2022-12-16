import axios from 'axios'

axios.defaults.headers = { 'Content-Type': 'application/json' }
const httpFile = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://112.171.101.31:45290',
  timeout: 10000,
})

httpFile.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  const temp = config
  temp.headers.Authorization = `Bearer ${token}`

  return temp
})

export default httpFile
