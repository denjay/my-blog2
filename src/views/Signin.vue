<template>
  <div class="counter" @click.self="toIndex">
    <el-form label-position="left" label-width="80px" status-icon :model="ruleForm" :rules="rules" ref="ruleForm" class="shadow">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" required></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password1">
        <el-input type="password" v-model="ruleForm.password1"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input type="password" v-model="ruleForm.password2"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">注 册</el-button>
      <div><router-link to="/login">已有帐号？立即登录>>></router-link></div>
    </el-form>
  </div>
</template>

<script scoped>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password1) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    };
    return {
      ruleForm: {
        username: '',
        password1: '',
        password2: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在3到20个字符之间' ,trigger: 'blur' }
        ],
        password1: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在6到20个字符之间' ,trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass, trigger: 'blur' },
        ],
        email: [
          { type: 'email', required:true, message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]

      }
    };
    },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.signin();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    signin() {
      this.$axios.post("http://127.0.0.1:8800/api/v1.0/users_register", {
        user_name: this.ruleForm.username,
        user_password: this.ruleForm.password1,
        user_email: this.ruleForm.email
      })
      .then(response => {
        if (response.status === 201) {
          this.$message({
            message: '注册成功！请登录',
            type: 'success'
          });
          setTimeout(()=>{this.$router.push({path:"/login"})}, 2000)
        }
      })
      .catch(()=> {
          this.$message.error('注册失败，请重试');
        });
    },
  toIndex() {
    this.$router.push({path:"/"})
  }
  }
}
</script>

<style scoped>
  .counter {
    background: url(../assets/login.jpg) no-repeat center top #0F2E64;
    background-size: cover; 
    height: 100%;
  }
  .counter:before {
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