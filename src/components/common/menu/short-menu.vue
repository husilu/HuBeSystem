<template>
  <Dropdown placement="right-start" class="menu-dropdown" @on-click="toChangeMenu">
    <a href="javascript:void(0)">
      <Icon :type="menuItem.icon"></Icon>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem v-for="(item, index) in menuItem.subs" :key="index" :name="item.index">{{ item.title }}</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
	name: "ShortMenu",
	props: {
		menuItem: {
			type: Object
		}
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
.ivu-dropdown {
	width:100%;
}
.menu-dropdown {
	text-align: center;
	// width: 100%;
	font-size: 20px;
	padding: 6px 15px; 
	a {
		color : #fff;
	}
	.ivu-select-dropdown {
		margin-left: 15px;
		min-width: 100px;
	}
}
</style>
