<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: '/'
    };
  },
  mounted() {
    // console.log('app')
  },
  methods: {
    toChangeMenu(name) {
      this.$router.push(name);
      this.active = name;
    }
  }
};
</script>

<style lang='less'>
#app {
  .layout {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .ivu-layout-sider {
    height: calc(100vh - 64px);
  }
}
</style>
