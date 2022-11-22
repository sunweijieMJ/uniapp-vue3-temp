<template>
  <NavBar></NavBar>
  <view class="home">
    {{ i18n.t('home.title') }}
    <CustomImage :src="captchaCode"></CustomImage>
    <button @click="getCaptcha">验证码</button>
    <uni-badge text="1"></uni-badge>
  </view>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import { defineComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { commonApi } from '@/api';
import { NavBar } from '@/components/business';
import { CustomImage } from '@/components/common';

const i18n = useI18n();

defineComponent({
  name: 'HomePage',
});

const captchaCode = ref('');
const getCaptcha = () => {
  commonApi.getCaptcha().then((res) => {
    console.log(res);
    captchaCode.value = res.data.data.imageBase;
  });
};

onMounted(() => {
  console.log(dayjs('2022-11-22 14:30:22').fromNow());
});
</script>
