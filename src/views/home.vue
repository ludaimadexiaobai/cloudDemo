<style scoped>
.layout{display: -ms-flexbox; display: flex; -ms-flex-direction: column; flex-direction: column; -ms-flex: auto; flex: auto;min-height: 100vh; overflow-x: hidden; background-color: #f0f2f5;}
.layout-has-sider{-ms-flex-direction: row; flex-direction: row;}
</style>

<template>
    <div class="layout layout-has-sider">
       <side-nav></side-nav>
       <div class="layout">
            <top-bar></top-bar>
            <body-content></body-content>
       </div>
    </div>
</template>
<script>
import topBar from '../components/top-bar.vue'
import sideNav from '../components/side-nav.vue'
import bodyContent from '../components/body-content.vue'

export default {
  name: "home",
  components:{
      topBar,sideNav,bodyContent
  },
  data() {
    return {};
  }
};
</script>
