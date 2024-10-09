<template>
    <div>
      <nav>
        <router-link exact-active-class="active" to="/admin">Dashboard</router-link>
        <router-link active-class="active" to="/admin/manage-user">Manage User</router-link>
        <router-link active-class="active" to="/admin/manage-product">Manage Product</router-link>
        <router-link active-class="active" to="/admin/setting">Setting</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  nav {
    display: flex;
    gap: 20px;
  }
  .active {
    color: red;
    background-color: pink;
  }
  
  .default-active {
    color: black;
    background-color: white;
  }
  </style>
  