<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
  import { useHead } from '#imports';
  useHead({
    title: 'EdgeOne',
    meta: [
      {
        name: 'description',
        content: 'EdgeOne is a Nuxt 3 starter template'
      }
    ]
  });
</script>
