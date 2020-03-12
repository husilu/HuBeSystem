<template lang="pug">
  div.zssj
    canvas(v-hsl-code:[codedata]='' width='300' height='300')
    zujian(chushu='chuanshu' @mouseover='parentMethod' @click='dianji')
</template>
<script>
import zujian from "@/components/common/zujiantest";
export default {
  name: "Zssj",
  components: {
    zujian
  },
  data() {
    return {
      codedata: {
        url: "http://www.qq.com",
        name: "西瓜",
        price: 12,
        num: 10
      }
    };
  },
  methods: {
    parentMethod() {
      console.log('parentMethod');
    },
    dianji() {
      console.log('dianji');
    }
  }
};
</script>
<style lang='less'>
</style>
