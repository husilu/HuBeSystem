<template>
  <div class="layout">
    <Layout>
      <my-header :collapsed="collapsed" @changeMenu="changeMenu"></my-header>
      <Layout class="flex-row">
        <long-menu :menu-list="menu" :collapsed="collapsed"></long-menu>
        <Layout>
          <div class="bread-wrap">
            <app-breadcrumb></app-breadcrumb>
          </div>
          <slot></slot>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
// import _ from "lodash";
import AppBreadcrumb from './app-breadcrumb';
import menuJson from "@/assets/static/menu-data.json";
import LongMenu from "./menu/long-menu";
import MyHeader from "./header";
export default {
  name: "MyLayout",
  components: {
    LongMenu,
    MyHeader,
    AppBreadcrumb
  },
  data() {
    return {
      collapsed: false,
      menu: menuJson
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.collapsed ? "collapsed-menu" : ""];
    }
  },
  mounted() {},
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    changeMenu(collapsed) {
      this.collapsed = collapsed;
    }
  }
};
</script>
<style lang='less'>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout {
  .bread-wrap {
    padding: 10px 15px;
    box-shadow: 0px 0 3px 2px rgba(100, 100, 100, 0.1) inset;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .icon-wrap {
    font-size: 22px;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 22px;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon {
    transition: all 0.3s;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  // .menu-item i{
  //     transform: translateX(0px);
  //     transition: font-size .2s ease, transform .2s ease;
  //     vertical-align: middle;
  //     font-size: 16px;
  // }
  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
    // display: none;
  }
  .collapsed-menu {
    .ivu-menu-submenu-title-icon {
      display: none;
    }
  }
  .ivu-menu-vertical {
    .ivu-menu-submenu-title {
      padding: 14px 22px;
    }
    .ivu-menu-item {
      padding: 14px 22px;
    }
  }
  // .ivu-menu-opened {
  //   .ivu-menu-submenu-title {
  //     color: #2d8cf0;
  //   }
  // }
  .ivu-layout-header {
    padding-left: 0px;
  }
  .icon-visible {
    display: none;
  }
  .content-layout {
    // height: calc(100vh - 64px);
    // overflow-y: auto;
  }
}
</style>
