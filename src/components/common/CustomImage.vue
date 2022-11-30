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

type Mode =
  | 'scaleToFill'
  | 'aspectFit'
  | 'aspectFill'
  | 'widthFix'
  | 'heightFix'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

interface IProps {
  /**
   * 图片资源地址
   */
  src: string;
  /**
   * 图片裁剪、缩放的模式
   */
  mode?: Mode;
  /**
   * 图片显示动画效果
   */
  fadeShow?: boolean;
  /**
   * 是否能拖动图片
   */
  draggable?: boolean;
}

interface IEmits {
  (e: 'load', evt: Event): void;
  (e: 'error', evt: Event): void;
}

defineComponent({
  name: 'CustomImage',
});

withDefaults(defineProps<IProps>(), {
  mode: 'scaleToFill',
  fadeShow: true,
  draggable: true,
});

const emits = defineEmits<IEmits>();

/**
 * 当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}
 * @param evt
 */
const load = (evt: Event) => {
  emits('load', evt);
};

/**
 * 当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}
 * @param evt
 */
const error = (evt: Event) => {
  emits('error', evt);
};
</script>
