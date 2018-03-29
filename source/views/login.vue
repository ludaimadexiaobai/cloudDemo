<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url("../images/bg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  &-con {
    position: absolute;
    right: 200px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
    &-header {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      padding: 30px 0;
    }
    .form-con {
      padding: 10px 0 0;
    }
    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
</style>
<template>

  <div class="login">
    <div class="login-con">
        <Card>
            <div slot="title">欢迎登录</div>
            <div class="form-con">
                <from>
                    <Input icon="user" placeholder="请输入..."  />
                    <Input icon="locked" placeholder="请输入..." />
                    <Button type="primary">登录</Button>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </from>
            </div>
        </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>
