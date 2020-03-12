<template lang="pug">
	div.js-com
		p(v-for="item in list") {{item.id}} : {{item.content}}
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
        // console.log(this.list);
      });
    }
  }
};
</script>
<style lang='less'>
</style>
