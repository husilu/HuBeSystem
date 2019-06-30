<template>
  <ul class="h-list">
    <li
      v-for="(item, index) in menu"
      :key="index"
      :class="!showSub ? '' : 'collased-menu-dropdown'"
    >
      <span @click="openSub">{{ item.title }}</span>
      <template v-if="item.children">
        <menu-test :menu="item.children"></menu-test>
      </template>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'MenuTest',
  props: {
    menu: {
      type: Array
    }
  },
  data() {
    return {
      showSub: false
    };
  },
  mounted() {},
  methods: {
    openSub() {
      this.showSub = !this.showSub;
    }
  }
};
</script>
<style lang='less'>
.h-list {
  li {
    list-style: none;
    padding: 5px 10px;
    // border:1px solid #000;
    cursor: pointer;
    font-size: 16px;
    width: 200px;
  }
  .collased-menu-dropdown {
    height: 0;
  }
}
</style>
