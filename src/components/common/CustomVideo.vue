<template>
  <video
    class="custom-video"
    :src="src"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :initial-time="initialTime"
    :duration="duration"
    :controls="controls"
    :object-fit="objectFit"
    :poster="poster"
    @play="play"
    @pause="pause"
    @ended="ended"
    @timeupdate="timeupdate"
    @fullscreenchange="fullscreenchange"
    @waiting="waiting"
    @error="error"
  ></video>
</template>
<script lang="ts" setup>
import { defineComponent, PropType } from 'vue';

type ObjectFit = 'contain' | 'fill' | 'cover';

defineComponent({
  name: 'CustomVideo',
});

defineProps({
  /**
   * 要播放视频的资源地址
   */
  src: {
    type: String,
    required: true,
  },
  /**
   * 是否自动播放
   */
  autoplay: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否循环播放
   */
  loop: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否静音播放
   */
  muted: {
    type: Boolean,
    default: false,
  },
  /**
   * 指定视频初始播放位置，单位为秒（s）
   */
  initialTime: {
    type: Number,
    default: 0,
  },
  /**
   * 指定视频时长，单位为秒（s）
   */
  duration: {
    type: Number,
    default: 0,
  },
  /**
   * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   */
  controls: {
    type: Boolean,
    default: true,
  },
  /**
   * 当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖
   */
  objectFit: {
    type: String as PropType<ObjectFit>,
    default: 'contain',
  },
  /**
   * 视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效
   */
  poster: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (e: 'play', evt: Event): void;
  (e: 'pause', evt: Event): void;
  (e: 'ended', evt: Event): void;
  (e: 'timeupdate', evt: Event): void;
  (e: 'fullscreenchange', evt: Event): void;
  (e: 'waiting', evt: Event): void;
  (e: 'error', evt: Event): void;
}>();

/**
 * 当开始/继续播放时触发play事件
 * @param evt
 */
const play = (evt: Event) => {
  emit('play', evt);
};

/**
 * 当暂停播放时触发 pause 事件
 * @param evt
 */
const pause = (evt: Event) => {
  emit('pause', evt);
};

/**
 * 当播放到末尾时触发 ended 事件
 * @param evt
 */
const ended = (evt: Event) => {
  emit('ended', evt);
};

/**
 * 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次
 * @param evt
 */
const timeupdate = (evt: Event) => {
  emit('timeupdate', evt);
};

/**
 * 当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal
 * @param evt
 */
const fullscreenchange = (evt: Event) => {
  emit('fullscreenchange', evt);
};

/**
 * 视频出现缓冲时触发
 * @param evt
 */
const waiting = (evt: Event) => {
  emit('waiting', evt);
};

/**
 * 视频播放出错时触发
 * @param evt
 */
const error = (evt: Event) => {
  emit('error', evt);
};
</script>
