<style>
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.app-main{
    width: 100%;
    height: 100%;
}
</style>

<template>
  <div class="app-main">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

