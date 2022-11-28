<template>
  <view class="home">
    {{ i18n.t('home.title') }}
    <button @click="skip">跳转详情</button>
  </view>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { navigateTo } from '@/utils/href';

const i18n = useI18n();

defineComponent({
  name: 'HomePage',
});

const skip = () => {
  navigateTo('/pages/detail/index', { id: '123' });
};
</script>
