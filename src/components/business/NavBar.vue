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

interface IProps {
  /**
   * 标题文字
   */
  title?: string;
  /**
   * 左侧按钮文本
   */
  leftText?: string;
  /**
   * 右侧按钮文本
   */
  rightText?: string;
  /**
   * 左侧按钮图标
   */
  leftIcon?: string;
  /**
   * 右侧按钮图标
   */
  rightIcon?: string;
  /**
   * 图标和文字颜色
   */
  color?: string;
  /**
   * 导航栏背景颜色
   */
  backgroundColor?: string;
  /**
   * 是否固定顶部
   */
  fixed?: boolean;
  /**
   * 是否包含状态栏
   */
  statusBar?: boolean;
  /**
   * 导航栏下是否有阴影
   */
  shadow?: boolean;
  /**
   * 导航栏下是否有边框
   */
  border?: boolean;
  /**
   * 导航栏高度
   */
  height?: number | string;
  /**
   * 导航栏开启暗黑模式
   */
  dark?: boolean;
  /**
   * 导航栏左侧插槽宽度
   */
  leftWidth?: number | string;
  /**
   * 导航栏右侧插槽宽度
   */
  rightWidth?: number | string;
  /**
   * 是否开启统计标题功能
   */
  stat?: boolean | string;
}

interface IEmits {
  (e: 'clickLeft'): void;
  (e: 'clickRight'): void;
}

defineComponent({
  name: 'NavBar',
});

withDefaults(defineProps<IProps>(), {
  title: '自定义导航栏',
  leftText: '',
  rightText: '',
  leftIcon: 'back',
  rightIcon: 'home',
  color: '#000',
  backgroundColor: '#fff',
  fixed: true,
  statusBar: true,
  shadow: false,
  border: true,
  height: 44,
  dark: false,
  leftWidth: '120rpx',
  rightWidth: '120rpx',
  stat: '120rpx',
});

defineEmits<IEmits>();

/**
 * 左侧按钮点击时触发
 */
const clickLeft = () => {
  navigateBack();
};

/**
 * 右侧按钮点击时触发
 */
const clickRight = () => {
  reLaunch('/pages/home/index');
};
</script>
