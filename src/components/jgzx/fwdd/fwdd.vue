<template lang="pug">
  div.jgzx
    Tabs(type='card')
      TabPane(label="农服订单")
        nf
      TabPane(label="农资订单")
        nz
</template>

<script>
import nf from './nf';
import nz from './nz';
export default {
  components: { nf, nz }
};
</script>

<style lang="less">
.jgzx {
}
</style>
