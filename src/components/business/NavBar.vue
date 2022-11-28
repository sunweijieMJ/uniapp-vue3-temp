<template>
  <uni-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    :left-icon="leftIcon"
    :right-icon="rightIcon"
    :color="color"
    :background-color="backgroundColor"
    :fixed="fixed"
    :status-bar="statusBar"
    :shadow="shadow"
    :border="border"
    :height="height"
    :dark="dark"
    :left-width="leftWidth"
    :right-width="rightWidth"
    :stat="stat"
    @clickLeft="clickLeft"
    @clickRight="clickRight"
  />
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue';
import { navigateBack, reLaunch } from '@/utils/href';

defineComponent({
  name: 'NavBar',
});

defineProps({
  title: {
    type: String,
    default: '自定义导航栏',
  },
  leftText: {
    type: String,
    default: '',
  },
  rightText: {
    type: String,
    default: '',
  },
  leftIcon: {
    type: String,
    default: 'back',
  },
  rightIcon: {
    type: String,
    default: 'home',
  },
  color: {
    type: String,
    default: '#000',
  },
  backgroundColor: {
    type: String,
    default: '#fff',
  },
  fixed: {
    type: Boolean,
    default: true,
  },
  statusBar: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
  },
  height: {
    type: [Number, String],
    default: 44,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  leftWidth: {
    type: [Number, String],
    default: '120rpx',
  },
  rightWidth: {
    type: [Number, String],
    default: '120rpx',
  },
  stat: {
    type: [Boolean, String],
    default: '120rpx',
  },
});

const clickLeft = () => {
  navigateBack();
};

const clickRight = () => {
  reLaunch('/pages/home/index');
};
</script>
