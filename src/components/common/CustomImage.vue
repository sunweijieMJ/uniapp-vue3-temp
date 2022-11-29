<template>
  <image
    class="custom-image"
    :src="src"
    :mode="mode"
    :fade-show="fadeShow"
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
  /**
   * 图片资源地址
   */
  src: {
    type: String,
    required: true,
  },
  /**
   * 图片裁剪、缩放的模式
   */
  mode: {
    type: String,
    default: 'scaleToFill',
  },
  /**
   * 图片显示动画效果
   */
  fadeShow: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否能拖动图片
   */
  draggable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  (e: 'load', evt: Event): void;
  (e: 'error', evt: Event): void;
}>();

/**
 * 当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}
 * @param evt
 */
const load = (evt: Event) => {
  emit('load', evt);
};

/**
 * 当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}
 * @param evt
 */
const error = (evt: Event) => {
  emit('error', evt);
};
</script>
