<template>
  <Sider ref="side1" :collapsed-width="64" v-model="collapsed" hide-trigger collapsible>
    <Menu
      v-show="!collapsed"
      :active-name="activeName"
      theme="dark"
      width="auto"
      accordion
      @on-select="toChangeMenu"
      @on-open-change="clickSub"
    >
      <template v-for="(item, index) in menuList">
        <template v-if="!item.subs">
          <MenuItem :name="item.index" :key="index">
          <Icon :type="item.icon" :key="item.icon + index"></Icon>
          <span :key="index">{{ item.title }}</span>
          </MenuItem>
        </template>
        <template v-else>
          <Submenu :name="item.index" :key="index">
            <template slot="title">
              <Icon :type="item.icon"></Icon>
              <span>{{ item.title }}</span>
            </template>
            <MenuItem v-for="(sitem, sindex) in item.subs" :key="sindex" :name="sitem.index">
            <span>{{ sitem.title }}</span>
            </MenuItem>
          </Submenu>
        </template>
      </template>
    </Menu>
    <div v-show="collapsed" :list="menuList" class="menu-collapsed">
      <div class="icon-menu">
        <template v-for="(item, index) in menuList">
          <template v-if="!item.subs">
            <Tooltip :key="item.icon + index" :content="item.title" placement="right">
              <div :name="item.index" :key="index" class="icon-item">
                <Icon :type="item.icon" @click="toChangeMenu(item.index)"></Icon>  
              </div>
            </Tooltip>
          </template>
          <template v-else>
            <ShortMenu :menu-item="item" :key="index"></ShortMenu>
          </template>
        </template>
      </div>
    </div>
  </Sider>
</template>
<script>
/* eslint-disable */
import _ from "lodash";
import ShortMenu from './short-menu';
export default {
	name: "LoneMenu",
	components: {
		ShortMenu
	},
  props: {
    menuList: {
      type: Array
    },
    collapsed: {
      type: Boolean,
      default: false
    }
	},
	computed: {
		activeName() {
			return this.$route.path;
		}
	},
  data() {
    return {
      active: "/"
    };
  },
  mounted() {},
  methods: {
    toChangeMenu(name) {
      this.$router.push(name);
      this.active = name;
    },
    clickSub(name) {
      if (name.length) {
        let obj = _.find(this.menuList, { index: name[0] });
        if (obj.subs) {
          this.$router.push(obj.subs[0].index);
          this.active = obj.subs[0].index;
        }
      }
    }
  }
};
</script>
<style lang = 'less'>
.menu-collapsed {
	.ivu-tooltip {
		width: 64px;
	}
  background-color: #515a6e;
  .icon-menu {
		color: #fff;
		.icon-item {
			padding: 6px 15px;
			text-align: center;
			font-size: 20px;
			cursor: pointer;
		}
  }
}
</style>
