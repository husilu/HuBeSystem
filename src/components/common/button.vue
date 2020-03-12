<template lang="pug">
  Button(v-bind='$attrs') {{msg}}
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="less" scoped>

</style>
