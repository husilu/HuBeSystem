<template lang="pug">
	div.zssj
		canvas(v-hsl-code:[codedata]='' width='300' height='300')
		//- span {{code}}
</template>
<script>
export default {
  name: "Zssj",
  data() {
    return {
      codedata: {
        url: "http://www.baidu.com",
        name: "西瓜",
        price: 12,
        num: 10
      }
    };
  }
};
</script>
<style lang='less'>
</style>
