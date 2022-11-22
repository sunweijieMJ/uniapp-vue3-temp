<template>
  <view class="mine">
    {{ i18n.t('mine.title') }}
    <uni-file-picker
      v-model="imageValue"
      file-mediatype="image"
      mode="grid"
      @select="select"
      @progress="progress"
      @success="success"
      @fail="fail"
    />
  </view>
</template>
<script setup lang="ts">
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

defineComponent({
  name: 'MinePage',
});

const i18n = useI18n();
const imageValue = reactive([]);

// 获取上传状态
const select = (evt: InputEvent) => {
  console.log('选择文件：', evt);
};
// 获取上传进度
const progress = (evt: InputEvent) => {
  console.log('上传进度：', evt);
};
// 上传成功
const success = (evt: InputEvent) => {
  console.log('上传成功：', evt);
};
// 上传失败
const fail = (evt: InputEvent) => {
  console.log('上传失败：', evt);
};
</script>
