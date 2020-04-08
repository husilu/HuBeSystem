<template lang="pug">
  div 书记手机
    div.mb3
      Button(type='default' @click='search') 刷新表格
    Table(:columns="vcolumns" :data="[]" border)
</template>
<script>
import ajax from "@/utils/request";
import { toGetColumns } from '@/utils/customize';
export default {
  components: {},
  data() {
    return {
      vcolumns: []
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      ajax.get("/customize").then(res => {
        this.vcolumns = toGetColumns(res.data);
      });
    }
  }
};
</script>
<style lang="less">
</style>
