<template>
  <NavBar></NavBar>
  <view class="home">
    {{ i18n.t('pages.home') }}
    <CustomImage></CustomImage>
    <button @click="getCaptcha">验证码</button>
    <uni-badge text="1"></uni-badge>
  </view>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { commonApi } from '@/api';
import { NavBar } from '@/components/business';
import { CustomImage } from '@/components/common';

const i18n = useI18n();

defineComponent({
  name: 'HomePage',
});

const getCaptcha = () => {
  commonApi.getCaptcha().then((res) => {
    console.log(res);
  });
};
</script>
