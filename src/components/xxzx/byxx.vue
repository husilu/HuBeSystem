<template lang="pug">
	div.byxx
		Card(:bordered="false" shadow)
			h1 {{month}}月
			Tabs(v-model="val" :animated="false")
				TabPane(label="Html/Css" name="Html/Css")
					Ht
				TabPane(label="JavaScript" name="JavaScript")
					Js
				TabPane(label="其他" name="其他")
</template>
<script>
import Ht from "./byxx/ht";
import Js from "./byxx/js";
export default {
	name: "Byxx",
	components: { Ht, Js },
  data() {
    return {
      val: "Html/Css"
    };
	},
  computed: {
    month() {
      let Nowdate = new Date();
      return Nowdate.getMonth() + 1;
    }
  }
};
</script>
<style lang='less'>
</style>
