/*
 * @Author: your name
 * @Date: 2020-03-20 14:17:34
 * @LastEditTime: 2020-03-26 11:27:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: 。。。。。。。。。。
 */
import axios from 'axios'
import { Message } from 'element-ui'
 
const token ='你自己的token'
// create an axios instance
const service = axios.create({
  baseURL: '/api',
  timeout: 80000 // request timeout
})
 
// request interceptor
service.interceptors.request.use(
 
  config => {
    // Do something before request is sent
    if (token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers.Authorization = token 
      
    }
    return config
  },
  error => {
    // Do something with request error
    // console.log("出错啦",error) // for debug
    Promise.reject(error)
  }
)
 
// response interceptor
service.interceptors.response.use(
  response => response,
 
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
 
