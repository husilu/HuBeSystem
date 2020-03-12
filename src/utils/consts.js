import { joinUrl, getProcessEnv } from './common';

export const ENV = getProcessEnv();
// 表单状态
export const FORM_STATUS = {
  // 详情
  detail: 0,
  // 添加
  add: 1,
  // 编辑
  edit: 2,
  FORM_STATUS_NAME: {
    0: '详情',
    1: '添加',
    2: '编辑'
  }
};
export const PAGE_SIZE = 20;
export const BASEURL =
  window.config.baseUrl ||
  joinUrl(ENV.CROSS ? `http://${ENV.HOST}:${ENV.PORT}/` : '/', ENV.ROOT);
export const ZONELEVELNAMES = {
  7: '国家',
  6: '省',
  5: '市',
  4: '县',
  3: '镇',
  2: '村',
  1: '组'
};
// 接口返回结果类型
export const RESULTTYPE = {
  // 正常
  NORMAL: 0,
  // 警告。
  WARRING: 1,
  // 失败。
  FAILED: 2,
  // VO 无效。
  INVALID: 3
};
// 未登录状态码
export const NOLOGINSTATUS = 401;
// 接口返回自定义头名称
export const CUSTOMHEADER = 'X-Responded-JSON';

// 正则表达式验证
export const REGULAR = {
  // 手机号码
  phoneNumber: '^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$'
};

// 返回服务类型字体图标
export const getFwlbIconArr = () => {
  return [
    { icon: 'icon-fahuo', code: '&#xe687;' },
    { icon: 'icon-nongyeshengchanyongdian', code: '&#xe6d6;' },
    { icon: 'icon-nongyao', code: '&#xe609;' },
    { icon: 'icon-jinkouxiangmu_nongyeyiyao', code: '&#xe683;' },
    { icon: 'icon-agricultural-market', code: '&#xe695;' },
    { icon: 'icon-nongye', code: '&#xe647;' },
    { icon: 'icon-yangzhishe', code: '&#xe607;' },
    { icon: 'icon-peixun1', code: '&#xe676;' },
    { icon: 'icon-tudi1', code: '&#xe74c;' },
    { icon: 'icon-tuoguan', code: '&#xe615;' },
    { icon: 'icon-yuancailiaojiagong', code: '&#xe65c;' },
    { icon: 'icon-cb-nongyaoshiyongjilu', code: '&#xe646;' },
    { icon: 'icon-nongzinongji', code: '&#xe63b;' },
    { icon: 'icon-kuaidibaoguo', code: '&#xe671;' },
    { icon: 'icon-jixiediandonggongjumechanical-jiguangqie', code: '&#xe6b8;' },
    { icon: 'icon-jixiediandonggongjumechanical-choushuiji', code: '&#xe6b6;' },
    { icon: 'icon-jixiediandonggongjumechanical-paoguangji', code: '&#xe6b5;' },
    { icon: 'icon-jixiediandonggongjumechanical-damoji', code: '&#xe6b0;' },
    { icon: 'icon-jixiediandonggongjumechanical-fadianji1', code: '&#xe6af;' },
    { icon: 'icon-jixiediandonggongjumechanical-fadianji', code: '&#xe6ad;' },
    { icon: 'icon-jixiediandonggongjumechanical-daqiege', code: '&#xe6ac;' },
    { icon: 'icon-saodijiqiren', code: '&#xe694;' },
    { icon: 'icon-penguan-', code: '&#xe614;' },
    { icon: 'icon-zhihuipenguan', code: '&#xe606;' },
    { icon: 'icon-nongji', code: '&#xe604;' },
    { icon: 'icon-zuowu-xiaomai', code: '&#xe60f;' },
    { icon: 'icon-nongye1', code: '&#xe691;' },
    { icon: 'icon-tiandiguanli', code: '&#xe60c;' },
    { icon: 'icon-bingchonghaiyujing', code: '&#xea2a;' },
    { icon: 'icon-nongji1', code: '&#xe60e;' },
    { icon: 'icon-caigouon', code: '&#xe659;' },
    { icon: 'icon-feiliao', code: '&#xe60b;' },
    { icon: 'icon-wurenji', code: '&#xe605;' },
    { icon: 'icon-chanpin', code: '&#xe718;' },
    { icon: 'icon-leisiliaohuamux', code: '&#xe692;' },
    { icon: 'icon-tudi', code: '&#xe608;' },
    { icon: 'icon-nongmin', code: '&#xe631;' },
    { icon: 'icon-zhongzitouzi', code: '&#xe613;' },
    { icon: 'icon-guimohuaxuqinyangzhichang', code: '&#xe653;' },
    { icon: 'icon--fuwu', code: '&#xe8aa;' },
    { icon: 'icon-yingyeting', code: '&#xe725;' },
    { icon: 'icon-iconfontwojianongchang', code: '&#xe610;' },
    { icon: 'icon-emizhongzi', code: '&#xe65f;' },
    { icon: 'icon-bozhong', code: '&#xe624;' },
    { icon: 'icon-nongyaohuafei', code: '&#xe652;' }
  ];
};

// 返回服务类型背景色
export const getFwlbColorArr = () => {
  return [
    '#726AC6',
    '#6D8BF7',
    '#74BEE6',
    '#78C78E',
    '#F4BA41',
    '#F19E57',
    '#EF886E',
    '#EE756F'
  ];
};

// 统计图颜色
export const COLOR = [
  '#52AC06',
  '#4B98E8',
  '#FCA446',
  '#E64060',
  '#306AA0',
  '#E07856',
  '#64D2ED',
  '#599AD0',
  '#7CD9A4',
  '#F497B0'
];
