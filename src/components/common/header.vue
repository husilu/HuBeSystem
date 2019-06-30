<template>
  <Header class="header">
    <div class="flex">
      <div>
        <div class="flex icon-wrap">
          <i class="iconfont icon-shouqi1" @click="changeMenu"></i>
          <p class="sys-title">后台管理系统</p>
        </div>
      </div>
      <div class="flex">
        <div class="mr10">
          <Dropdown>
            <span class="username">
              语言
              <Icon type="ios-arrow-down"></Icon>
            </span>
            <DropdownMenu slot="list">
              <DropdownItem>中文</DropdownItem>
              <DropdownItem>英文</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <span class="username">
              {{ username }}
              <Icon type="ios-arrow-down"></Icon>
            </span>
            <DropdownMenu slot="list">
              <DropdownItem>个人中心</DropdownItem>
              <DropdownItem>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    collapsed: {
      type: Boolean
    }
  },
  computed: {
    username() {
      return localStorage.getItem('ms_user');
    }
  }, 
  methods: {
    changeMenu() {
      this.$emit("changeMenu", !this.collapsed);
    }
  }
};
</script>

<style lang="less">
.header {
  .ivu-dropdown-rel {
    cursor: pointer;
  }
  .mr10 {
    margin-right: 10px;
  }
  padding-right: 20px;
  .ivu-select-dropdown {
    .ivu-dropdown-menu {
      min-width: auto;
    }
    width: auto;
    text-overflow: ellipsis;
  }
  .username {
    color: #fff;
    font-size: 14px;
  }
  .icon-shouqi1 {
    cursor: pointer;
    margin-right: 10px;
  }
  header ul {
    display: flex;
    li {
      margin-right: 10px;
      list-style: none;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
