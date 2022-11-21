<template>
  <view class="home">
    {{ i18n.t('pages.home') }}
    <uni-badge text="1"></uni-badge>
  </view>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

defineComponent({
  name: 'HomePage',
});
</script>
