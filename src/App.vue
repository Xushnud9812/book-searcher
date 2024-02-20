<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <router-view :key="route.fullPath" />
  </div>
</template>

<style scoped></style>
