<template>
  <div class="wrapper">
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(send_word, index) in send_words" :key="send_word">
        <b><p :style="{backgroundImage: 'url(/static/' + index + '.jpg)'}">{{ send_word }}</p></b>
        <!-- <router-link :to="'/articles/' + article.article_id"></router-link> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      send_words: [
        "真理惟一可靠的标准就是永远自相符合",
        "世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理",
        "没有人不爱惜他的生命，但很少人珍视他的时间",
        "毫无经验的初恋是迷人的，但经得起考验的爱情是无价的",
      ]
    }
  },
  methods: {
    to() {
      this.$router.push("/articles/1")
    }
  }
}
</script>

<style scoped>
  .wrapper {
    border-radius: 5px;
    margin: 0px 10px 0px 10px;
    padding: 10px;
    background-color: #83a3c79f
 }
 p {
   padding: 40px;
   color: white;
   height: 100%;
   background-size: cover;
 }
</style>

<style>
  .el-carousel__item {
    border-radius: 5px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
