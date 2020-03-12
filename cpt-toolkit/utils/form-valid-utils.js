import _ from 'lodash';
import { checkStrict } from './idcard-utils';

/**
 * 验证-字段只能是数字
 * @param {boolean} required 是否必填
 * @param {string} message 验证必填失败提示信息
 * @param {string} trigger 触发验证方式
 */
export const validOnlyNumber = (required = false, message, trigger) => {
  return {
    required: required,
    validator: (rule, value, callback) => {
      if (value) {
        const reg = /^[0-9]*$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error('只能输入数字'));
        }
      } else {
        required ? callback(new Error(message || '值不能为空')) : callback();
      }
    },
    trigger: trigger || 'change'
  };
};

/**
 * 验证-邮政编码
 * @param {boolean} required 是否必填
 * @param {string} message 验证必填失败提示信息
 * @param {string} trigger 触发验证方式
*/
export const validPostalCode = (required = false, message, trigger) => {
  return {
    required: required,
    validator: (rule, value, callback) => {
      if (value) {
        const reg = /^[0-9]{6}$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error('请输入正确的邮政编码'));
        }
      } else {
        required ? callback(message || new Error('邮政编码不能为空')) : callback();
      }
    },
    trigger: trigger || 'change'
  };
};

/**
 * 验证-电话号码
 * @param {boolean} required 是否必填
 * @param {string} message 验证必填失败提示信息
 * @param {string} trigger 触发验证方式
*/
export const validPhoneNumber = (required = false, message, trigger) => {
  return {
    required: required,
    validator: (rule, value, callback) => {
      if (value) {
        const reg = /^1[3456789]\d{9}$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error('请输入正确的电话号码'));
        }
      } else {
        required ? callback(new Error(message || '号码不能为空')) : callback();
      }
    },
    trigger: trigger || 'change'
  };
};

/**
 * 验证-去空格验空
 * @param {boolean} required 是否必填
 * @param {string} message 验证必填失败提示信息
 * @param {string} trigger 触发验证方式
*/
export const validTrim = (required = false, message, trigger) => {
  return {
    required: required,
    validator: (rule, value, callback) => {
      if (value) {
        if (_.trim(value)) {
          callback();
        } else {
          callback(new Error('值不能为空'));
        }
      } else {
        required ? callback(message || new Error('值不能为空')) : callback();
      }
    },
    trigger: trigger || 'change'
  };
};

/**
 * 验证-身份证（严格模式）
 * @param {boolean} required 是否必填
 * @param {string} message 验证必填失败提示信息
 * @param {string} trigger 触发验证方式
*/
export const validIdCard = (required = false, message, trigger) => {
  return {
    required: required,
    validator: (rule, value, callback) => {
      if (value) {
        if (checkStrict(value)) {
          callback();
        } else {
          callback(new Error('请输入正确的身份证号'));
        }
      } else {
        required ? callback(message || new Error('号码不能为空')) : callback();
      }
    },
    trigger: trigger || 'change'
  };
};

/**
 * 验证-密码（包含数字和字母且在6-14位之间）
 * @param {boolean} required 是否必填
 * @param {string} message 验证必填失败提示信息
 * @param {string} trigger 触发验证方式
*/
export const validPassword = (required = false, message, trigger) => {
  return {
    required: required,
    validator: (rule, value, callback) => {
      if (value) {
        const reg = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
        if (reg.test(value) && value.length >= 6 && value.length <= 14) {
          callback();
        } else {
          callback(new Error('请输入正确格式的密码(包含数字和字母，长度6到14位)'));
        }
      } else {
        required ? callback(new Error(message || '密码不能为空')) : callback();
      }
    },
    trigger: trigger || 'change'
  };
};
