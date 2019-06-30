<template lang="pug">
  div.hw  我是helloworld页面
</template>

<script>
export default {
  data() {
    return {
      count:4
    };
  },
  mounted() {},
  methods: {
    add() {
      this.count++;
    },
    jian() {
      this.count--;
    },
    trigger() {
      this.$pub("count-refresh", this.count);
    },
    changeShow() {
      this.$emit('changeshow')
      this.$pub("count-refresh", this.count);
    }
  }
};
</script>

<style lang="less">
.hw {
  button {
  width: 50px;
  }
  .count {
    font-size: 20px;
    color: red;
  }
}

</style>
