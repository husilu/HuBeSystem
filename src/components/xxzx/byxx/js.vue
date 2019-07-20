<template lang="pug">
	div.js-com
		p(v-for="item in list") {{item.content}}
</template>
<script>
import api from "@/api/byxx";
export default {
  name: "JsCom",
  data() {
    return {
			list: []
		};
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      api.jssearch().then(res => {
        this.list = res.data;
      });
    }
  }
};
</script>
<style lang='less'>
</style>
