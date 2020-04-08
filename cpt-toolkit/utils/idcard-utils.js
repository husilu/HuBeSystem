import moment from 'moment';

/**
 * 简单验证身份证号码，验证长度，字符类型是否合法
 * @param {String} no - 身份证号码
 */
export const check = (no) => {
  const idcardNoReg = /^\d{10}((0[0-9])|(1[0-2]))(([0-2]\d)|(3[01]))\d{3}[0-9xX]$/;
  const idcarNoReg15 = /^\d{6}\d{2}((0[0-9])|(1[0-2]))(([0-2]\d)|(3[01]))\d{3}$/;
  return idcardNoReg.test(no) || idcarNoReg15.test(no);
};

/**
 * 简洁验证,只验证位数和xX
 * @param {String} no - 身份证号码
 */
export const checkSimple = (no) => {
  const reg15 = /^\d{15}$/;
  const reg18 = /^\d{17}(\d|X)$/i;
  return reg15.test(no) || reg18.test(no);
};

/**
* 严格验证身份证号码 包含了日期、性别、校验码等验证
* @param {String} no - 身份证号码
*/
export const checkStrict = (no) => {
  if (no.length !== 18) {
    return false;
  } else {
    // 6位，地区代码
    const address = no.substring(0, 6);
    // 8位，出生日期
    const birthday = no.substring(6, 14);

    const province = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江 ', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' };

    const year = birthday.substring(0, 4);
    const month = birthday.substring(4, 6);
    const day = birthday.substring(6);
    const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (province[parseInt(address.substr(0, 2))] == null || (tempDate.getFullYear() !== parseFloat(year) || tempDate.getMonth() !== parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day))) {
      return false;
    } else {
      // 加权因子
      const weightedFactors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
      // 身份证验证位值，当中10代表X
      const valideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      // 得到身份证数组
      const certificateNoArray = no.split('');
      // 声明加权求和变量
      let sum = 0;
      // 转换为小写
      if (certificateNoArray[17].toLowerCase() === 'x') {
        // 将最后位为x的验证码替换为10
        certificateNoArray[17] = 10;
      }
      for (let i = 0; i < 17; i++) {
        // 加权求和
        sum += weightedFactors[i] * certificateNoArray[i];
      }
      // 得到验证码所在位置
      const valCodePosition = sum % 11;
      if (certificateNoArray[17] === valideCode[valCodePosition]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

/**
 * 获取出生日期
 * @param {String} no - 身份证号码
 */
export const getBirthday = (no) => {
  if (this.check(no)) {
    const rqStr = no.substr(6, 8);
    if (rqStr.length === 8) {
      const rqMoment = moment(rqStr, 'YYYYMMDD');
      if (rqMoment.isValid()) {
        return rqMoment.toDate();
      }
    }
  }
};

/**
 * 获取性别
 * @param {String} no - 身份证号码
 * @return 性别字典值，2：女，1：男
 */
export const getGender = (no) => {
  if (this.check(no)) {
    const genderNum = no[16];
    if (genderNum) {
      return parseInt(genderNum) % 2 === 0 ? 2 : 1;
    }
  }
};
