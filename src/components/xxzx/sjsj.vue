<template lang="pug">
  div 书记手机
    div.mb3
      Button(type='default' @click='search') 刷新表格
    Table(:columns="vcolumns" :data="tableData" border @on-row-dblclick='toEdit')
    Edit(ref='edit' :initModel='initModel')
</template>
<script>
import ajax from "@/utils/request";
import { toGetColumns } from "@/utils/customize";
import Edit from "./sjsj/edit";
import pageMixin from "@/mixin/page";
// import { modelUtils } from "cpt-toolkit";
// import _ from "lodash";
import enhance from "@/utils/enhance-comp";
// import api 
export default enhance({
  mixins: [pageMixin()],
  components: {
    Edit
  },
  data() {
    return {
      vcolumns: [],
      tableData: [],
      initModel: {}
    };
  },
  async mounted() {
    let res = await this.search();
    await this.DataSearch();
    // console.log(this.pageParams);
  },
  methods: {
    search() {
      ajax
        .get(
          "http://rap2.taobao.org:38080/app/mock/243364/api/v1/customizeTable"
        )
        .then(res => {
          this.vcolumns = toGetColumns(res.data);
        });
    },
    DataSearch() {
      ajax
        .get("http://rap2.taobao.org:38080/app/mock/243364/api/v1/tableData")
        .then(res => {
          this.tableData = res.data;
        });
    },
    toEdit(row) {
      this.initModel = row;
      console.log(this.initModel);
      this.$refs.edit.show(row);
    }
  }
});
</script>
<style lang="less">
</style>
