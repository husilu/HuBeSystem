<template lang="pug">
    span
      slot(:user='user') {{user.lastName}}
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
export default {
  components: {
    HelloWorld, Login
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    changeshow() {
      this.show = !this.show; 
    }
  }
}
</script>

<style lang="less">
  .home {
    a {
      margin-right: 5px;
    }
    .router-wrap {
      height: 200px;
      border: 1px solid #000;
    }
  }
</style>
