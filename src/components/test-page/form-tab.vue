<template lang="pug">
  div.test-page
</template>

<script>
export default {
  props: {
    value: Number
  },
  watch: {
    value(nv) {
      console.log(nv);
    }
  }
};
</script>

<style lang="less">
.test-page {
}
</style>
