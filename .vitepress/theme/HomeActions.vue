<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { GITHUB_URL, INVITE_URL } from '../../lib/links';

const { lang } = useData();
const portuguese = computed(() => lang.value.startsWith('pt'));
const guideHref = computed(() =>
  portuguese.value ? '/pt/guide/quick-start' : '/guide/quick-start',
);
</script>

<template>
  <div class="home-actions">
    <VPButton
      v-if="INVITE_URL"
      theme="brand"
      text="Invite"
      :href="INVITE_URL"
      target="_blank"
      rel="noreferrer"
    />
    <VPButton
      theme="alt"
      :text="portuguese ? 'Documentação' : 'Documentation'"
      :href="guideHref"
    />
    <VPButton theme="alt" text="GitHub" :href="GITHUB_URL" />
  </div>
</template>
