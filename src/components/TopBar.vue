<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item id="logo" index="1"><router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link></el-menu-item>
    <el-submenu index="2">
        <template slot="title">文章分类</template>
        <el-menu-item index="2-1">技术</el-menu-item>
        <el-menu-item index="2-2">生活</el-menu-item>
        <el-menu-item index="2-3">笔记</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><router-link to="/about">关于本站</router-link></el-menu-item>
    <el-menu-item class="right" v-if="!loggedIn" index="4"><router-link to="/login">登录</router-link></el-menu-item>
    <el-submenu class="right" v-else index="4">
        <template slot="title"><img src="../assets/user.png" alt="头像">{{ username }}</template>
        <el-menu-item index="4-1">个人中心</el-menu-item>
        <el-menu-item index="4-2">设置</el-menu-item>
        <el-menu-item index="4-3" @click="logOut">退出</el-menu-item>
    </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: localStorage.token ? true: false,
            username: localStorage.username
        }
    },
    methods: {
        logOut() {
            delete localStorage.token;
            this.$store.state.token = "";
            this.loggedIn = false;
        }
    }
}
</script>

<style scoped>
    img[alt="logo"] {
        position:relative;
        z-index: 10;
        width: 70px;
    }
    img[alt="头像"] {
        width: 30px;
        margin-right: 10px;
        border: 2px solid white;
        border-radius: 50%;
    }
    div {
        margin-bottom: 25px;
    }
    .right {
        float: right;
    }
    #logo {
      border-bottom-color: rgb(84, 92, 100) !important;
    }
</style>