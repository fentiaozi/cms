import axios from 'axios'
const service = axios.create({
  baseURL: window.SITE_CONFIG['apiURL'],
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 6 * 1000 // request timeout
})
// response interceptor
service.interceptors.response.use(
  function (response) {
    switch (response.data.code) {
      case 50000:
        Vue.prototype.$toast({ type: "error", message: "系统异常" });
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
)
export default service
