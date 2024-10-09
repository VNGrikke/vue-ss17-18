<template>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>
</script>

<style>
</style>
