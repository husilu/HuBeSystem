import qs from 'qs';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const instance = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? process.env.BASE_API : ''
  baseURL: ''
});

instance.interceptors.request.use((config) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // 根据返回结果和调用时参数进行提醒
// instance.interceptors.response.use((response) => {
//     const isNotify = response.config.notify;
//     const customNotifyMessage = response.config.notifyMessage;
//     const result = response.data;
//     const $Message = window._vueInstance.$Message;
  
//     let message = result.message;
//     if (isNotify) {
//       if (RESULTTYPE.NORMAL === result.type || result.type === 'NORMAL') {
//         $Message.success(message);
//       }
//       if (RESULTTYPE.WARRING === result.type || result.type === 'WARRING') {
//         $Message.warning(message);
//       }
//     }
//     if (result.type === RESULTTYPE.FAILED || result.type === 'FAILED') {
//       $Message.error(message);
//     }
//     if (result.type === 'INVALID_MODEL') {
//       window._vueInstance.$pub('on-invalid-model', result.data);
//     }
//     return response;
//   });

  // 根据返回结果和调用时参数进行提醒
instance.interceptors.response.use((response) => {
    // console.log()
    // console.log(response);
    const isNotify = response.config.notify;
    // const customNotifyMessage = response.config.notifyMessage;
    const result = response.data;
    const $Message = window._vueInstance.$Message;
    let message = result.message;
    if (isNotify) {
      if (result.code === 0) {
        $Message.success(message);
      } else {
        $Message.warning(message);
      }
    }
  
    return response.data;
  });

export default instance;
