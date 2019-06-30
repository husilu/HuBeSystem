<template lang="pug">
  div 服务概况
    //- Button(@click='openModal') 打开弹窗
    //- Table(:columns="columns1" :data="data1")
    //- edit(ref='edit')
</template>

<script>
import edit from './edit';
import { mapGetters } from 'vuex';
import { GETTER_COLUMNS } from 'store/fwgk/index';
export default {
  components: { edit },
  computed: {
    ...mapGetters({
      columns: GETTER_COLUMNS
    })
  },
  methods: {
    openModal() {
      this.$refs.edit.openModal();
    }
  }
};
</script>

<style lang="less">
</style>
