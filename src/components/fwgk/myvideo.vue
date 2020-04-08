<template lang="pug">
  div.fwgk
    video-player.video-player.vjs-custom-skin(ref="videoPlayer"
    :playsinline="true"
    :options="playerOptions"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)")
</template>

<script>
import { videoPlayer } from "vue-video-player";
export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        controls: true, // 控制条
        preload: "auto", // 视频预加载
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "application/x-mpegURL",
            src:
              "http://221.10.172.117:7086/live/cameraid/1000006%240/substream/2.m3u8"
          }
        ],
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放请稍后再试" // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  mounted() {
    console.log("mounted");
  },
  // beforedestroy() {
  //   console.log('destoryed');
  //   this.$refs.videoPlayer.player.dispose();
  // },
  methods: {
    onPlayerPlay(player) {
      alert("play");
    },
    onPlayerPause(player) {
      alert("pause");
    },
    pause() {
      this.$refs.videoPlayer.dispose();
    }
  }
};
</script>

<style lang="less">
.fwgk {
}
</style>
