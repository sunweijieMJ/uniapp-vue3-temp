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
<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'CustomImage',
});

defineProps({
  src: {
    type: String,
    required: true,
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
});

const emit = defineEmits<{
  (e: 'load', evt: Event): void;
  (e: 'error', evt: Event): void;
}>();

// 图片加载成功
const load = (evt: Event) => {
  emit('load', evt);
};

// 图片加载失败
const error = (evt: Event) => {
  emit('error', evt);
};
</script>
