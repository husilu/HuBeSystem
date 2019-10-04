<template lang="pug">
  div(v-bind='$attrs' v-on='$listeners') attrs 和 listeners 测试
</template>
<script>
export default {
  data() {
    return {
      str: "123"
    };
  },
  mounted() {
    // console.log(this.$attrs);
    // console.log(this.$listeners);
  },
  methods: {
    add() {
      console.log("add");
    }
  }
};
</script>
<style>
</style>
