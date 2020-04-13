<template lang="pug">
  div(class='fwgk-wrap') 服务概况
    div(class='line-wrap')
</template>

<script>
import edit from "./edit";
// import { mapGetters } from "vuex";
// import { GETTER_COLUMNS } from "store/fwgk/index";
export default {
  components: { edit },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.fwgk-wrap {
  .line {
    display: inline-block;
    width: 43px;
    height: 1px;
    background: red;
    transform: rotate(135deg);
  }
  .line-wrap {
    border-style: solid;
    border-width: 0px 0px 100px 100px;
    border-color: transparent transparent blue transparent;
    width: 0px;
    height: 0px;
  }
}
</style>
