<script setup lang="ts"></script>

<template>
  <div>我是app页</div>
  <RouterLink to="/">Go To Home</RouterLink>
  <RouterLink to="/about">Go To About</RouterLink>
  <RouterView></RouterView>
</template>

<style scoped>
a {
  margin: 10px;
  text-decoration: underline;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
