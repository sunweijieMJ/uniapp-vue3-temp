<template>
  <NavBar :title="i18n.t('detail.title')"></NavBar>
  <view class="detail">
    <uni-badge text="1"></uni-badge>
  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import dayjs from 'dayjs';
import { defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBar from '@/components/business/NavBar.vue';

const i18n = useI18n();

defineComponent({
  name: 'HomePage',
});

onLoad((options) => {
  console.log(options);
});

onMounted(() => {
  console.log(dayjs('2022-11-22 14:30:22').fromNow());
});
</script>
<style lang="scss" scoped>
.detail {
  background-color: $mainCyan;
}
</style>
