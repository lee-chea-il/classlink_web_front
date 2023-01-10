import axios from 'axios'

axios.defaults.headers = { 'Content-Type': 'application/json' }
const httpFile = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.VUE_APP_UPLOAD_URL,
  timeout: 10000,
})

httpFile.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  const temp = config
  temp.headers.Authorization = `Bearer ${token}`

  return temp
})

export default httpFile
