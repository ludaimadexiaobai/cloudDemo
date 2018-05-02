<template id="sideNav">
    <div class="sideNav open">
        <div class="app-logo">
            <a class="home" href="/">
                <img src="../assets/images/logo.png" />
                <h3>校宝云服务平台</h3>
            </a>
        </div>
        <Menu :theme="theme" accordion>
            <MenuItem name="user">
                <Icon type="ios-people" size="18"></Icon>
                    用户管理
            </MenuItem>
            <MenuItem name="organization">
                <Icon type="home" size="18"></Icon>
                    机构管理
            </MenuItem>
            <Submenu name="sms">
                <template slot="title">
                    <Icon type="ios-email" size="18"></Icon>
                    短信管理
                </template>
                <MenuItem name="smsSearch">短信查询</MenuItem>
                <MenuItem name="smsSet">短信配置</MenuItem>
                <MenuItem name="smsTemplate">短信模板配置</MenuItem>
                <MenuItem name="smsPackage">机构短信包</MenuItem>
            </Submenu>
            <Submenu name="wechats">
                <template slot="title">
                    <Icon type="chatbubbles" size="18"></Icon>
                    微信消息管理
                </template>
                <MenuItem name="wechatsSearch">微信消息查询</MenuItem>
                <MenuItem name="wechatsSet">微信消息配置</MenuItem>
                <MenuItem name="wechatsThird">微信第三方平台配置</MenuItem>
            </Submenu>
            <Submenu name="dingding">
                <template slot="title">
                    <Icon type="chatbox-working" size="18"></Icon>
                    钉钉消息管理
                </template>
                <MenuItem name="dingdingSearch">钉钉消息查询</MenuItem>
                <MenuItem name="dingdingSet">钉钉消息配置</MenuItem>
            </Submenu>
            <MenuItem name="docLibrary">
                <Icon type="ios-paper" size="18"></Icon>
                    文档库
            </MenuItem>
        </Menu>
        
    </div>
</template>
<style lang="less">
.sideNav {position: relative; z-index: 10; top: 0; left: 0; bottom: 0; width: 240px; min-height: 100vh; background-color: #495060; transition: all 0.2s;
  &.open {flex: 0 0 240px; max-width: 240px; min-width: 240px; width: 240px;}
  &.close {flex: 0 0 52px; max-width: 52px; min-width: 52px; width: 52px;}
}
.home {padding: 5px 8px; display: block; height: 60px; text-align: center;
  img {width: 35px; margin-top: 7px;}
  h3 {display: inline-block; margin-left: 10px; line-height: 50px; font-size: 18px; color: #979da7; vertical-align: top; font-weight: normal; }
  &:hover {background-color: #363e4f;}
  &:hover h3 {color: #fff;}
}
.nav-list {padding-top: 20px;}
.sideLi {height: 40px; line-height: 40px; padding-left: 20px; font-size: 14px; color: #fff; cursor: pointer;
  a {color: #aaa;}
  &:hover,&.active {background-color: #24272d;}
  &.active a {color: #fff;}
  i {vertical-align: middle;}
}
.sideSpan {display: inline-block; margin-left: 10px; vertical-align: middle;}
</style>
<script>
export default {
  name: "side-nav",
  data() {
    return {
        theme: 'dark'
    }
  }
};
</script>

