<template lang="pug">
  div.dashboard
    Row(:gutter='16')
      Col(span=8)
        Card.mb20(:bordered="false" shadow v-cpt-drag='')
          div(class='flex')
            img(src='@/assets/timg.jpeg' class='user-pic')
            div
              h2 {{username}}
              p.notice 时刻谨记 定期做review，提高代码质量，学会总结。
        Card.mb20(:bordered="false" shadow)
            p(slot='title') 语言详情
            p
              span Vue
              Progress(:percent="70" status='normal' stroke-color='rgb(66, 185, 131)')
            p
              span JavaScript
              Progress(:percent="20" status='normal' stroke-color='rgb(241, 224, 90)')
            p
              span Css+Html
              Progress(:percent="10" status='normal' )
        Card(:bordered="false" shadow)
            p(slot='title') 求职意向
            p 期望职位: 前端工程师
            p 工作技能: Vue
            p 目标城市: 成都
            p 入职时间: 随时入职
      Col(span=16)
        Card(:bordered="false" shadow)
          p(slot='title') 工作经历
          p(class='exp-time') 2016.9 - 2016.12
          p(class='exp-com') Ncs公司
          p(class='exp-pro') 项目名称: 某保险公司项目
          p 主要是熟悉软件公司的工作流程，技术上基本什么也没学到。
          p(class='exp-time') 2017.7 - 2018.6
          p(class='exp-com') 成都猎云万罗科技有限公司
          p(class='exp-pro') 项目名称: 有店小程序商家后台项目
          p 主要用的PHP的yii框架，（前后端未分离）前端只需要写样式和部分简单的JS。其中有一部分功能用到了Vue的双向数据绑定。
          p(class='exp-pro') 项目名称: 有店小程序 + 相关营销小程序
          p 主要熟悉微信小程序Api，体验了一下前后端分离。
          p(class='exp-time') 2018.7 - 2018.11
          p(class='exp-com') 云和恩墨有限公司
          p(class='exp-pro') 项目名称: Z-Data后台管理系统
          p 主要用Vue全家桶，熟悉Vue组件写法，mock数据，Echarts在Vue中的使用，Git的使用，前端Review，敏捷开发体系。虽然说公司氛围很好，但是前端框架还很凌乱，需要封装的地方还很多。导致开发很费时。
          p(class='exp-time') 2019.2.27 - ....
          p(class='exp-com') 四川开普顿有限公司
          p(class='exp-pro') 项目名称: 社会化服务系统
          p 主要负责后台系统，该项目封装的很好，感觉让我突破了Vue的瓶颈期，加油...只要你开始，就不会晚。（待续）
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    username() {
      return localStorage.getItem("ms_user");
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.dashboard {
  .notice {
    color: #bf5159;
    font-weight: bold;
  }
  .user-pic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .exp-time {
    font-size: 14px;
    color: #999;
  }
  .exp-com {
    font-size: 16px;
    font-weight: bold;
  }
  p {
    margin-bottom: 5px;
  }
  .exp-pro {
    font-size: 15px;
    color: rgb(66, 185, 131);
  }
}
</style>
