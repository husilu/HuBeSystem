<template lang="pug">
  div 推荐管理
    ul
      li(v-for='item in list') {{item.name}} 价钱：{{item.val}}
        Button(@click='add(item)') 加入购物车
    cart
</template>

<script>
import { GETTER_DATA, ADD_SHOP } from 'store/xxgl';
import { mapGetters } from 'vuex';
import cart from './cart';
export default {
  components: {
    cart
  },
  data() {
    return {
      // list: [
      //   {name: '三星', val: '1000'},
      //   {name: '苹果', val: '1200'},
      //   {name: '华为', val: '1500'}
      // ]
    };
  },
  computed: {
    ...mapGetters({
      list: GETTER_DATA
    })
  },
  methods: {
    add(item) {
      // console.log(item);
      this.$store.commit(ADD_SHOP, item);
    }
  }
};
</script>

<style lang="less">

</style>
