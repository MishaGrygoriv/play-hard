<template>
  <div class="video">
    <div class="page-art">
      <div
        class="page-art__colored"
        :style="{
          zIndex: `1`,
          height: `800px`,
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(https://in-rating.ru/space/wp-content/uploads/2020/09/Assassins-Creed-Valhalla-Wallpaper-05-1200.jpg)`,
        }"
      ></div>
    </div>
    <!-- <div class="video__col-wrapper">
        <div class="video__col">
          <div class="video__video-wrapper _margin-right">
            <video
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              class="video__video"
              loop
              controls
              muted
              type="video/mp4"
              :src="firstVideo.clip"
            ></video>
          </div>
          <div class="video__video-wrapper">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="secondVideo.clip"
            ></video>
          </div>
        </div>
        <div class="video__col">
          <div class="video__video-wrapper _margin-right">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="thirdVideo.clip"
            ></video>
          </div>
          <div class="video__video-wrapper">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="fourthVideo.clip"
            ></video>
          </div>
        </div>
        <div class="video__col">
          <div class="video__video-wrapper _margin-right">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="fifthVideo.clip"
            ></video>
          </div>
          <div class="video__video-wrapper">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="sixthVideo.clip"
            ></video>
          </div>
        </div>
        <div class="video__col">
          <div class="video__video-wrapper _margin-right">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="seventhVideo.clip"
            ></video>
          </div>
          <div class="video__video-wrapper">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="eighthVideo.clip"
            ></video>
          </div>
        </div>
        <div class="video__col">
          <div class="video__video-wrapper _margin-right">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="ninthVideo.clip"
            ></video>
          </div>
          <div class="video__video-wrapper">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="tenthVideo.clip"
            ></video>
          </div>
        </div>
        <div class="video__col">
          <div class="video__video-wrapper _margin-right">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="eleventhVideo.clip"
            ></video>
          </div>
          <div class="video__video-wrapper">
            <video
              class="video__video"
              loop
              @mouseover="videoElementMouseHover($event)"
              @mouseout="videoElementMouseOut($event)"
              @touchstart="videoElementTouchStart($event)"
              @touchend="videoElementTouchEnd($event)"
              controls
              muted
              type="video/mp4"
              :src="twelfthVideo.clip"
            ></video>
          </div>
        </div>
      </div> -->
    <div class="video__loader">Loading...</div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { httpService } from "../http";

export default {
  name: "Video",
  data() {
    return {
      titles: "",
      firstVideo: "",
      secondVideo: "",
      thirdVideo: "",
      fourthVideo: "",
      fifthVideo: "",
      sixthVideo: "",
      seventhVideo: "",
      eighthVideo: "",
      ninthVideo: "",
      tenthVideo: "",
      eleventhVideo: "",
      twelfthVideo: "",
    };
  },
  computed: {
    ...mapState("games", ["topGames"]),
  },
  methods: {
    ...mapActions("games", ["fetchTopGames"]),
    videoElementMouseHover(event) {
      event.target.play();
    },
    videoElementMouseOut(event) {
      event.target.pause();
    },
    videoElementTouchStart(event) {
      event.target.play();
    },
    videoElementTouchEnd(event) {
      event.target.pause();
    },
  },
  async created() {
    const { $route, fetchTopGames } = this;
    const { id } = $route.params;
    fetchTopGames(id);
    const showClip = await httpService.getTopGames(this.$route.params.id);
    this.clips = showClip.results;
    this.firstVideo = this.clips[0].clip;
    this.secondVideo = this.clips[1].clip;
    this.thirdVideo = this.clips[2].clip;
    this.fourthVideo = this.clips[3].clip;
    this.fifthVideo = this.clips[4].clip;
    this.sixthVideo = this.clips[5].clip;
    this.seventhVideo = this.clips[12].clip;
    this.eighthVideo = this.clips[7].clip;
    this.ninthVideo = this.clips[8].clip;
    this.tenthVideo = this.clips[13].clip;
    this.eleventhVideo = this.clips[14].clip;
    this.twelfthVideo = this.clips[11].clip;
  },
};
</script>
<style lang="scss">
.page-art {
  position: absolute;
  top: 121px;
  left: 0;
  width: 100%;
  height: 79.5%;
  background-color: #151515;
  &__colored {
    max-height: 100%;
    background-size: cover;
    width: 100%;
    height: 100%;
    background: no-repeat top;
    background-size: cover;
  }
}
.video {
  padding: 100px 0 0;
  &__col-wrapper {
    @include flex(center, center, column);
    flex-wrap: wrap;
    margin: 0 -10px;
    margin-bottom: 30px;
  }
  &__col {
    @include flex(space-between, stretch);
    padding: 10px;
  }
  &__card {
    background-color: $side-bar-bg-color;
    border: 1px solid $text-color;
    outline: none;
  }
  &__video-wrapper {
    width: 100%;
    transform: scale(1);
    transition: transform 0.5s ease;
    &:hover {
      border-radius: 2%;
      transform: scale(1.1);
      z-index: 10;
    }
    &._margin-right {
      margin-right: 70px;
    }
  }
  &__video {
    max-width: 530px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &__loader {
    margin: 100px auto;
    font-size: 15px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load5 1.1s infinite ease;
    animation: load5 1.1s infinite ease;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
}
@-webkit-keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff,
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
      1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff,
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff,
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}
@keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff,
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
      1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff,
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff,
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}
</style>
