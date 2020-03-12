<template lang="pug">
  div.chart
    Row(:gutter="16")
      Col(span='8')
        Card(style='width:100%')
          p(slot='title') 雷达图
          div(id='radar' style='width:100%; height:200px;')
      Col(span='8')
        Card(style='width:100%')
          p(slot='title') 折线图
          div(id='line' style='width:100%; height:200px;')
      Col(span='8')
        Card(style='width:100%')
          p(slot='title') 饼图
          div(id='pine' style='width:100%; height:200px;')
    div.wrap
      div.line
      div.box 内容信息
      button(@click='show=!show') 显示动画
    //- transition(name='tran1' mode="")
    //-   div.box(v-if='show')
    //- div.animate(ref='ani')
    //-   div.child(ref='child')
    //-   div.info 园区信息
    transition(name='animal' mode='')
      div.box(v-if='show')
</template>

<script>
/* eslint-disable */
// import toast from '@/components/common/toast/index.js';
import echarts from "echarts";
export default {
  name: "chart",
  data() {
    return {
      show: false,
      radarChart: {},
      radar: {
        indicator: [
          { max: 6500 },
          { max: 16000 },
          { max: 30000 },
          { max: 38000 },
          { max: 52000 },
          { max: 25000 }
        ],
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000]
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000]
              }
            ]
          }
        ]
      },
      lineChart: {},
      line: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: false
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
            symbol: "none"
          }
        ]
      },
      pineChart: {},
      pine: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.$refs.line.style.width = "400px";
    });
    this.initRadar();
    this.initLine();
    this.initPine();
  },
  methods: {
    initRadar() {
      this.radarChart = echarts.init(document.getElementById("radar"));
      let radarChartOption = {
        title: {
          text: "基础雷达图"
        },
        legend: {
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: this.radar.indicator
        },
        series: this.radar.series
      };
      this.radarChart.setOption(radarChartOption);
    },
    initLine() {
      this.lineChart = echarts.init(document.getElementById("line"));
      let lineChartOption = {
        xAxis: this.line.xAxis,
        yAxis: this.line.yAxis,
        series: this.line.series
      };
      this.lineChart.setOption(lineChartOption);
    },
    initPine() {
      this.pineChart = echarts.init(document.getElementById("pine"));
      let pineChartOption = {
        tooltip: this.pine.tooltip,
        legend: this.pine.legend,
        series: this.pine.series
      };
      this.pineChart.setOption(pineChartOption);
    }
  }
};
</script>

<style lang="less">
@keyframes mybox {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mymove {
  from {
    width: 0px;
  }
  to {
    width: 100px;
  }
}
.chart {
  .wrap {
    margin-top: 100px;
    width: 200px;
    height: 100px;
    transform: rotate(-30deg);
    // border: 1px solid #000;
    position: relative;
    .line {
      // width: ;
      height: 1px;
      background-color: blue;
      position: absolute;
      top: 20px;
      animation: mymove 2s forwards;
    }
    .box {
      opacity: 0;
      width: 100px;
      height: 50px;
      background-color: red;
      position: absolute;
      top: -1px;
      left: 106px;
      transform: rotate(30deg);
      animation: mybox 2s forwards;
      animation-delay: 2s;
    }
  }
  .animate {
    padding-top: 100px;
    width: 200px;
    height: 200px;
    background: transparent;
    text-align: center;
    font-size: 20px;
    position: relative;
    transition: width 5s;
    .child {
      background-color: red;
      height: 2px;
      transform: rotate(135deg);
      position: absolute;
      top: 170px;
      animation: mymove 2s forwards;
      left: 0px;
    }
    .info {
      width: 200px;
      height: 100px;
      background-color: red;
      position: absolute;
      top: 41px;
      left: 73px;
      opacity: 1;
    }
  }
  .box {
    width: 100px;
    height: 100px;
    background: red;
  }
  .tran1-enter-active {
    // 入场动画时间段
    transition: all 1s ease;
  }
  /* 隐藏过渡效果 */
  .tran1-leave-active {
    // 离场动画时间段
    transition: all 1s ease;
  }
  /* 显示前或隐藏后的效果 */
  .tran1-enter, // 这是一个时间点
  .tran1-leave-to {
    // 动画离开之后
    opacity: 0;
    transform: translateX(
      10px
    ); /* 水平方向右移10px  tran2-enter 一开始让DOM元素处于靠右10px的位置 */
  }
  .animal-enter-active {
    animation: bounce-in 3s;
  }
  .animal-leave-active {
    animation: bounce-out 3s;
  }

  .animal-enter, // 这是一个时间点
  .animal-leave-to {
    // 动画离开之后
    transform: translateX(30px);
  }
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }
    50% {
      opacity: 0.5;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(30px);
    }
  }
  @keyframes bounce-out {
    0% {
      opacity: 1;
      transform: translateX(30px);
    }
    50% {
      opacity: 0.5;
      transform: translateX(20px);
    }
    100% {
      opacity: 0;
      transform: translateX(10px);
    }
  }
}
</style>
