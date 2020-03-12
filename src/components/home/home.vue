<template>
  <div class="home">
    <my-layout>
      <Content :style="{padding: '24px', minHeight: '280px', background: '#f5f7f9'}" class="overy">
        <router-view></router-view>
      </Content>
    </my-layout>
  </div>
</template>

<script>
import myLayout from '@/components/common/layout';
import myheader from '@/components/common/header';
export default {
  name: 'Home',
  components: { myheader, myLayout },
  data() {
    return {
      active: '/'
    };
  },
  mounted() {
    // console.log('app');
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
.home {
  .ivu-layout {
    background-color: #fff;
  }
  .ivu-layout-content {
    background-color: #f5f7f9;
  }
  .overy {
    overflow-y: auto;
    height: calc(100vh - 64px);
  }
}
</style>
