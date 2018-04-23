<template id="topBar">
    <div class="topBar">
        <Icon type="arrow-left" size="30" class="anticon-menu-trigger"></Icon>
        <div class="pull-r"><a @click="backToLogin">退出登录</a></div>
    </div>
</template>
<style>
.topBar{ height: 64px; flex: 0 0 auto; background: #fff; -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08); box-shadow: 0 1px 4px rgba(0,21,41,.08); position: relative;}
.topBar .pull-r{float: right; }
.topBar a{line-height: 64px; height: 64px; display: inline-block; padding:0 15px; font-size:14px; color:#474747;}
.topBar a:hover{background-color: #e6f7ff;}
.anticon-menu-trigger{line-height: 64px; width: 50px; padding-left: 7px;}
.anticon-menu-trigger:hover{background-color: #e6f7ff; cursor: pointer;}
</style>
<script>
export default {
  name: 'top-bar',
  data () {
      return{}
  },
  methods:{
      backToLogin(){
          this.$router.push({
           path:'/login'
          });
      }
  }
}
</script>