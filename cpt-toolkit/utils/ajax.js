import axios from 'axios';
import { NOLOGINSTATUS, CUSTOMHEADER } from '@/utils/consts';
// import { getProcessEnv } from '@/utils/common';
import { recurseData } from './common-utils';
import moment from 'moment';
import _ from 'lodash';

// const env = getProcessEnv();
const instance = axios.create({
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});
// 默认对日期自动格式化为字符串
instance.interceptors.request.use(config => {
  if (config.method.toLowerCase() !== 'get' && config.handleDate !== false) {
    const handledData = recurseData(config.data, value => {
      if (_.isDate(value)) {
        return moment(value).format('YYYY-MM-DD HH:mm:ss');
      }
      if (_.isString(value)) {
        return _.trim(value);
      }
      return value;
    });
    config.data = handledData;
  }
  return config;
});
// 处理未登录的情况 - 次逻辑不适合当前系统
instance.interceptors.response.use((response) => {
  const headerJson = JSON.parse(response.headers[CUSTOMHEADER.toLocaleLowerCase()] || '{}');
  const loginTimeoutHandler = response.config.loginTimeoutHandler;
  const timeoutHandler = response.config.timeoutHandler;
  if (headerJson.status === NOLOGINSTATUS) {
    const redUrl = headerJson.headers.location;
    if (_.isFunction(timeoutHandler)) {
      timeoutHandler(redUrl, response);
    } else {
      window._vueInstance.$Modal.warning({
        title: '登录过期',
        content: '登录已过期,点击确定重新登录',
        closable: false,
        maskClosable: false,
        onOk: () => {
          if (loginTimeoutHandler) {
            loginTimeoutHandler(redUrl, response);
          } else {
            window.location = redUrl;
          }
        }
      });
    }
  }
  return response;
});

// 根据返回结果和调用时参数进行提醒
instance.interceptors.response.use(response => {
  if (response) {
    const isNotify = response.config.notify;
    const result = response.data;
    const $Message = window._vueInstance.$Message;
    let message = result.msg;
    if (isNotify) {
      if (result.success) {
        $Message.success(message);
      } else {
        $Message.warning(message);
      }
    }
  }
  return response;
});

// 处理返回结果
instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  // 当前系统临时处理未登陆情况
  const requestUrl = error.config.url;
  if (_.get(error, 'response.data.error') === 'invalid_token') {
    window._vueInstance.$pub('logout');
  } else if (_.last(error.config.url.split('/')) === 'findAccount') {
    window._vueInstance.$Modal.warning({
      title: '登录过期',
      content: '登录已过期,点击确定重新登录',
      closable: false,
      maskClosable: false,
      width: 350,
      onOk: () => {
        window.location = requestUrl;
      }
    });
  } else {
    window._vueInstance.$Message.error('系统错误，请联系管理员！');
  }
  return error.response.data;
});

export default instance;
