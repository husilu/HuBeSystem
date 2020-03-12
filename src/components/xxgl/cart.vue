<template lang='pug'>
  div
    p 购物车
    p(v-for='item in shop_data') {{item.name}} {{item.val}}元 {{item.num}}个 总价{{item.val * item.num}}
    p 合计：{{totalprice}}
    Button(type='default' @click='clean') 清空购物车
</template>
<script>
import { GETTER_SHOP_DATA, CLEAN_SHOP, GETTER_TOTAL_PRICE } from 'store/xxgl';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      shop_data: GETTER_SHOP_DATA,
      totalprice: GETTER_TOTAL_PRICE
    })
  },
  methods: {
    clean() {
      this.$store.commit(CLEAN_SHOP);
    }
  }
};
</script>
<style lang='less'>

</style>
