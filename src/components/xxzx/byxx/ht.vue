<template lang="pug">
	div.ht-com
		p(v-for="item in list") {{item.content}}
</template>
<script>
import api from "@/api/byxx";
export default {
	name: "HtCom",
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
      api.htsearch().then(res => {
        this.list = res.data.data;
      });
    }
  }
};
</script>
<style lang='less'>

</style>
