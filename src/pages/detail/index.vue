<template>
  <NavBar></NavBar>
  <view class="detail">
    <uni-badge text="1"></uni-badge>
  </view>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import { defineComponent, onMounted } from 'vue';
import NavBar from '@/components/business/NavBar.vue';

defineComponent({
  name: 'HomePage',
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
