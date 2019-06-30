<template>
  <div class="test-page">
    <span>n123</span>
    <!-- <menu-test :menu="menuList"></menu-test> -->
    <ul class="test-menu">
      <li>
        <span>测试1</span>
      </li>
      <li>
        <span @click="open">测试2</span>
        <ul :class="isShow ? 'noShow' : 'isShow'" class="childul">
          <li>测试2-1</li>
          <li>测试2-2</li>
          <li>测试2-3</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuTest from '@/components/menu-test/menu-test';
export default {
  name: 'TestPage',
  components: {
    MenuTest
  },
  data() {
    return {
      menuList: [
        {
          title: '菜单1',
          children: [
            {
              title: '菜单1-1'
            },
            {
              title: '菜单1-2'
            }
          ]
        },
        {
          title: '菜单2'
        },
        {
          title: '菜单3'
        }
      ],
      isShow: false
    };
  },
  mounted() {
    // console.log(this.name);
  },
  methods: {
    open() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="less">
.test-page {
  .test-menu:hover .childul {
    height: 200px;
  }
  // .noShow {
  //   height: 200px;
  //   transition:  all 1s ease-in;
  // }
  // .isShow {
  //   height: 0px;
  //   overflow: hidden;
  // }
  .childul {
    padding-left: 10px;
    height: 0;
    overflow: hidden;
    transition:  all .3s ease-in;
    li {
      width: 200px;
      background: #000;
      display: block;
    }
  }
}
</style>
