import axios from 'axios'

const request = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
})


request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((res) => {
  return res.data
},(err) => {
  return Promise.reject(err)
})

export default request