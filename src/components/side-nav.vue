<template id="sideNav">
    <div class="sideNav open">
        <div class="app-logo">
            <a class="home" href="/">
                <img src="../assets/images/logo.png" />
                <h3>校宝云服务平台</h3>
            </a>
        </div>
        
        <ul class="nav-list">
            <li class="sideLi"><router-link to="/home"><Icon type="home" size="18"></Icon><span class="sideSpan">工作台</span></router-link></li>
            <!-- <li><router-link to="/login">login</router-link></li> -->
        </ul>
        <a href="#" class="toggle-nav"><Icon type="chevron-left" size="12" color="#fff" class="sideBtn"></Icon></a>
        <!--  @click="clickFun" -->
    </div>
</template>
<style>
.sideNav{ position: relative; z-index: 10; top:0; left:0; bottom:0; width:230px; min-height: 100vh; background-color: #373d47; transition: all .2s;}
.sideNav.open {flex: 0 0 230px; max-width: 230px; min-width: 230px; width: 230px;}
.sideNav.close {flex: 0 0 52px; max-width: 52px; min-width: 52px; width: 52px;}
.sideSpan{display:none;}
.nav-list{padding-top: 30px;}
.sideLi{height: 40px; line-height: 40px; padding-left: 20px; font-size:14px; color:#fff; cursor: pointer;}
.sideLi a{color:#aaa;}
.sideLi.active a{color:#fff;}
.sideLi i{vertical-align: middle;}
.sideSpan{display: inline-block; margin-left: 10px; vertical-align: middle;}
.home{padding:5px 8px; display: block; height: 60px;}
.home img{ width:35px;margin-top: 7px;}
.home h3{display: inline-block; margin-left: 20px; line-height: 50px; font-size: 18px; color:#979da7; vertical-align: top; font-weight: normal;}
.app-logo:hover,.sideLi:hover {background-color: #24272d;}
.app-logo:hover h3{color: #fff;}
.toggle-nav{position: fixed; top:60px; right: 0; height: 30px;}
</style>
<script>
export default {
  name: 'side-nav',
  data () {
      return{}
  }
}
</script>
