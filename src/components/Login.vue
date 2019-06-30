<template lang="pug">
  div.login login
    current-user(slot='slotProps')  {{slotProps.user.firstName}}
</template>

<script>
import currentUser from '@/components/currentUser'
export default {
  data() {
    return {
      count: 0
    }
  },
  mounted () {
    this.$sub('order-refresh', (data) => {
      this.count = data;
    });
  },
  methods: {
     changeShow() {
      this.$emit('changeshow')
    }
  }
}
</script>

<style lang="less">
.login {
  .count {
    font-size: 20px;
    color: red;
  }
}
</style>
