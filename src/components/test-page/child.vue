<template lang="pug">
  div 我是child
    DetailCom
</template>
<script>
import DetailCom from './detail';
export default {
  name: 'Child',
  components: {
    DetailCom
  },
  data() {
    return {};
  },
  mounted() {
    console.log('child');
  }
};
</script>
