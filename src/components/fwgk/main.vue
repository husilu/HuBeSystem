<template>
  <div id="virtualList" class="virtualList" @scroll="handleScroll">      
    <div class="list-view-content" :style="{paddingTop:startOffset + 'px',paddingBottom:endOffset+'px'}">
      <div class="list-view-item" v-for="(item,index) in visibleList" :key="index">
        <div class="col">{{ item.name }}</div>
        <div class="col">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name: "virtualList",
  data() {
    return {
      list: [],
      visibleList: [],
      timer: null,
      startTime: null,
      startIndex: 0,
      endIndex: 0,
      startOffset: 0,
      endOffset: 0,
      listLength: 0
    };
  },
  mounted() {
    this.startTime = new Date().getTime();
    for (let i = 0; i < 10000; i++) {
      let obj = {};
      obj["name"] = i;
      obj["value"] = "test" + Math.random();
      this.list.push(obj);
    }
    this.visibleCount = Math.ceil(1000 / 50);
    this.endIndex = this.startOffset + this.visibleCount;
    this.visibleList = this.list.slice(this.startOffset, this.endIndex);
    this.endOffset = (this.visibleList.length - this.endIndex) * 50;
    this.listLength = this.list.length;
  },
  updated: function() {
    let lastTime = new Date().getTime();
    console.log(lastTime - this.startTime);
  },
  methods: {
    handleScroll: function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      var vm = this;
      // this.timer = setTimeout(() => {
        var contentDiv = document.getElementById("virtualList");
        var scrollTop = contentDiv.scrollTop;
        vm.startOffset = scrollTop;
        vm.startIndex = Math.ceil(scrollTop / 50);
        vm.endIndex = vm.startIndex + vm.visibleCount;
        vm.visibleList = vm.list.slice(vm.startIndex, vm.endIndex);
      // }, 400);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.virtualList {
  height: 200px;
  overflow-y: scroll;
}

.list-view-content {
  min-height: 10px;
  width: 100%;
  /* height: 1000px; */
}
.list-view-item {
  display: inlien-block;
}
.col {
  display: inline-block;
  margin-right: 200px;
}
</style>
