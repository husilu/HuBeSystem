<template>
  <div>
    <div :style="`height:${viewH}px;overflow-y:scroll;`" @scroll="hanldeScroll">
      <div :style="{height:scorllH}">
        <div class="item_box" :style="`transform:translateY(${offSetY}px); `">
          <div v-for="item in list" :key="item.id" class="item">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div class='container' style='height:50px;overflow-y:scroll;'>
      <div style="height: 100px">
        <div>
          <div class='code'>1</div>
          <div class='code'>2</div>
          <div class='code'>3</div>
          <div class='code'>4</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lastTime: "", // 上次执行滚动事件的时刻
      scorllH: "", // 列表总高度
      list: [], // 展示列表
      offSetY: "", // 动态偏移量
      showNum: "", // 显示的个数
      viewH: 500,
      itemH: 20,
      data: []
    };
  },

  mounted() {
    for (let i = 0; i < 1000; i++) {
      this.data.push({
        id: i,
        content: "内容" + i
      });
    }
    // 计算总高度
    this.scorllH = this.itemH * this.data.length + "px"; 
    // 计算可视区域能展示的个数 这里可以随机多加几个让滚动有个临界区间，避免向下滑动时元素直接替换
    this.showNum = this.viewH / this.itemH + 1;
    this.lastTime = new Date().getTime();
    // 默认展示
    this.list = this.data.slice(0, this.showNum);
  },
  methods: {
    hanldeScroll(e) {
      // console.log(e.target.scrollTop); // 滚动条高度
      //   节流滚动计算
      if (new Date().getTime() - this.lastTime > 20) {
        this.offSetY = e.target.scrollTop - (e.target.scrollTop % this.itemH); // 设置动态偏移量模拟滚动 
        // this.offSetY = e.target.scrollTop
        this.list = this.data.slice(
          Math.floor(e.target.scrollTop / this.itemH),
          Math.floor(e.target.scrollTop / this.itemH) + this.showNum
        ); // 根据滚动条高度来截取需要展示的列表区间
        this.lastTime = new Date().getTime();
      }
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
.item_box {
  /* transition: ease-in 1s; */
}
.code {
  height: 25px;
}
</style>
