<style>
.login { width: 100%; height: 100%; background-image: url("../assets/images/bg.jpg");  background-size: cover; background-position: center; position: relative;}
.login-con {position: absolute; right: 200px; top: 50%; transform: translateY(-60%);
width: 300px;}
.form-con { padding: 10px 0 0;}
.login-tip { font-size: 10px; text-align: center;color: #c3c3c3;}
.alignC {text-align: center;}
</style>
<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <div slot="title">
          <p class="alignC">欢迎登录</p>
        </div>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" icon="user" placeholder="请输入用户名" />
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" icon="locked" placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        userName: "admin",
        password: ""
      },
      rules: {
        userName: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push({
           path:'/home'
          });
        }
      });
    }
  }
};
</script>
