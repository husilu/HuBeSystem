<template lang="pug">
  div.map-list  map-list {{latlng}}
</template>
<script>
export default {
  name: 'MapList',
  data() {
    return {
      latlng: {}
    };
  },
  mounted() {
    this.$sub('change-list', item => {
      this.latlng = item;
    });
  }
};
</script>
<style>
.map-list {
  position: absolute;
  top: 50px;
  left: 0px;
  background-color: #fff;
  width: 200px;
  height: 200px;
  color: #000;
  display: none;
  transition: all .3s ease-in;
}
</style>
