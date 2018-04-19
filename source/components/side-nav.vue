<template id="sideNav">
    <div class="sideNav">
        <ul>
            <li class="sideLi"><router-link to="/home"><Icon type="home" size="18"></Icon><span class="sideSpan">工作台</span></router-link></li>
            <!-- <li><router-link to="/login">login</router-link></li> -->
        </ul>
        <Button @click="clickFun">收起导航</Button>
    </div>
</template>
<style lang="less">
.sideNav{ position: relative; z-index: 10; top:0; left:0; bottom:0; width:300px; min-height: 100vh; background-color: #001529; transition: all .2s; 
    &.open {flex: 0 0 256px; max-width: 256px; min-width: 256px; width: 256px;}
    &.close {flex: 0 0 80px; max-width: 80px; min-width: 80px; width: 80px;
    .sideSpan{display:none;}
    }
    
}
.sideLi{height: 40px; line-height: 40px; padding-left: 20px; font-size:14px; color:#fff; cursor: pointer;
a{color:#aaa;}
&:hover a{color:#fff;}
i{vertical-align: middle;}
}
.sideSpan{display: inline-block; margin-left: 10px; vertical-align: middle;}

</style>
<script>
export default {
  name: 'side-nav',
  data () {
      return{}
  }
}
</script>
