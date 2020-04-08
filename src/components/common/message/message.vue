<template>
  <transition name='fade'>
    <div class='message' :class='type' v-show='show'>
      <i class='icon'></i>
      <span class='text'>{{text}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'message',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: val => {
        ['info', 'success', 'warning', 'error'].includes(val)
      }
    },
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.common-message{
  
}
</style>
