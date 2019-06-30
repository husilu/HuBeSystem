<template lang="pug">
  div.jgzx-fwdd
    p 农资
    //- Table(ref="table" :columns="vcolumns" :data="data" v-grid-autosize="10")
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {};
  },
  computed: {
    vcolumns() {
      let columns = _.cloneDeep(this.columns);
      return columns;
    }
  },
  methods: {
    bookmark(link) {
      link.bookmarked = true;
    }
  }
};
</script>

<style lang="less">
.jgzx-fwdd {
}
</style>
