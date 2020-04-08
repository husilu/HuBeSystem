<template lang="pug">
  button.hsl-btn(@click='clickHandler')
    slot
</template>

<script>
export default {
  methods: {
    clickHandler(eve) {
      // console.log(eve);
      this.$emit("click");
    }
  }
};
</script>

<style lang="less">
.hsl-btn {
}
</style>
