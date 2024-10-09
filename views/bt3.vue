<template>
    <div>
      <input type="text" v-model="input" />
      <button @click="handleSearch">Tim kiem</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const input = ref("");
  const router = useRouter();
  
  const handleSearch = () => {
    router.push({ name: "search", query: { q: input.value } });
  };
  </script>
  
  <style>
  </style>
  