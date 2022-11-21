<template>
  <view class="mine">{{ i18n.t('pages.mine') }}</view>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

defineComponent({
  name: 'MinePage',
});
</script>
