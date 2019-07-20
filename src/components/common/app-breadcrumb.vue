<template>
  <Breadcrumb>
    <!-- <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem> -->
    <BreadcrumbItem v-for="item in levelList" :key="item.path" :to="item.path">{{ item.meta.title }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
	name: "AppBreadcrumb",
	data() {
		return {
				levelList: []
		};
  },
  watch: {
    $route() {
			this.getBreadcrumb();
		}
	},
	created() {
		this.getBreadcrumb();
	},
	methods: {
		getBreadcrumb() {
			let matched = this.$route.matched.filter(item => item.name);
			const first = matched[0];
			if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        matched = [ {path: '/dashboard', meta: { title: 'dashboard' }} ].concat(matched);
			}
			this.levelList = matched;
			// console.log(this.levelList);
		}
	}
};
</script>

<style lang="less">
</style>
