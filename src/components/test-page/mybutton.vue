<template lang="pug">
  div
    Button(v-on="$listeners" v-bind="$attrs" :class="getClass")
      slot
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    }
  },
  data() {
    return {};
  },
  computed: {
    getClass() {
      if (!this.type) {
        return "";
      }
      return `app-btn--${this.type}`;
    }
  },
  mounted() {
    console.log(this.$listeners);
    console.log(this.$attrs);
  }
};
</script>
