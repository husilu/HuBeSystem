<template lang="pug">
  div
    span 我是detail
    //- child
</template>
<script>
import child from "./child";
export default {
  name: 'DetailCom',
  components: {
    child
  },
  props: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
