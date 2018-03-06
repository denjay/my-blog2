<template>
  <div class="container" @click.self="toIndex">
    <el-form label-position="left" label-width="60px" :model="form" class="shadow">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="记住我" id="switch">
        <el-switch v-model="form.remember" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-form-item>
      <el-button type="primary" @click="login">登 录</el-button>
      <div><router-link to="/signin">还没有帐号？立即注册>>></router-link></div>
    </el-form>
  </div>
</template>

<script scoped>
export default {
  data() {
      return {
        form: {
          username: '',
          password: '',
          remember: false
        }
      };
    },
  methods: {
    login() {
      this.$axios.post("http://127.0.0.1:8800/api/v1.0/users_login", {
        user_name: this.form.username,
        user_password: this.form.password,
        remember: this.form.remember
      })
      .then(response => {
        if (response.status === 200) {
          localStorage.token = response.headers['authorization'];
          localStorage.username = this.form.username;
          this.$message({
            message: '登录成功！正在跳转到首页',
            type: 'success'
          });
          setTimeout(()=>{this.$router.push({path:"/"})}, 2000)
        }
      })
      .catch(()=> {
          this.$message.error('登录失败，请重试');
        });
    },
  toIndex() {
    this.$router.push({path:"/"})
  }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    background: url(../assets/login.jpg) no-repeat center top #0F2E64;
    background-size: cover; 
  }
  .container:before {
    content:'';
    display: table;
  }
  form {
    width:350px;
    margin: 200px auto;
    padding: 50px 50px 20px 50px;
    background-color: rgba(87, 22, 22, 0.479);
  }
  button {
    width: 100%;
  }
  #switch {
    text-align: left;
  }
  button {
    margin-bottom: 20px;
  }
</style>

<style>
  .el-form-item__label {
    color: white;
  }
  .el-input__inner {
    background-color: rgba(87, 22, 22, 0.479);
    color: white;
  }
</style>