import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus';

let loading: any

const startLoading = () => {
  interface Options {
    lock: boolean;
    text: string;
    background: string;
  }
  const options: Options = {
    lock: true,
    text: "加载中...",
    background: 'rgba(0,0,0,0.7)'
  }
  loading = ElLoading.service(options)
}
const endLoading = () => {
  loading.close()
}
// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // 可进行loading展示,token存储
  startLoading()
  return config
})
// 响应拦截
axios.interceptors.response.use((response: AxiosResponse) => {
  // 取消loading展示
  endLoading()
  return response
}, error => {
  endLoading()
  // 错误提醒
  return Promise.reject(error)
})

export default axios