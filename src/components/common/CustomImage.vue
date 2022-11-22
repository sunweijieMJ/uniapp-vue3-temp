<template>
  <image
    class="custom-image"
    :src="src"
    :mode="mode"
    :lazy-load="lazyLoad"
    :fade-show="fadeShow"
    :webp="webp"
    :show-menu-by-longpress="showMenuByLongpress"
    :draggable="draggable"
    @load="load"
    @error="error"
  ></image>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomImage',
  props: {
    src: {
      type: String,
      default:
        'https://devops01.oss-cn-shanghai.aliyuncs.com/staticImg/image_null.jpg',
    },
    mode: {
      type: String,
      default: 'scaleToFill',
    },
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    fadeShow: {
      type: Boolean,
      default: true,
    },
    webp: {
      type: Boolean,
      default: false,
    },
    showMenuByLongpress: {
      type: Boolean,
      default: false,
    },
    draggable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['load', 'error'],
  setup(props, { emit }) {
    // 图片加载成功
    const load = (evt: any) => {
      emit('load', evt);
    };

    // 图片加载失败
    const error = (evt: any) => {
      emit('error', evt);
    };

    return {
      load,
      error,
    };
  },
});
</script>
