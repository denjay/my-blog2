<template>
  <div>
    <el-container>
      <carousel></carousel>
      <el-main>
        <ui v-bind="articles">
          <li class="shadow" v-for="article in articles" v-bind:key="article.index">
            <router-link :to="'/articles/' + article.id">
              <el-button type="primary" size="small">{{ article.article_title }}</el-button>
            </router-link>
            <br>
            <p>{{ article.article_content }}</p>
            <br>
            <span><i class="el-icon-view"></i>{{ article.click }}</span>
            <span class="right"><i class="el-icon-date"></i>{{ article.article_date | date_only }}</span>
          </li>
        </ui>
      </el-main>
      <el-footer>底部栏</el-footer>
    </el-container>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
export default {
    data(){
        return {
            articles: [
                {'article_title': '默认博客', 'article_content': '表示axios请求没收到数据'},
            ]
        }
    },
    components: { Carousel },
    mounted() {
        this.$axios.get("http://127.0.0.1:8800/api/v1.0/articles")
        .then(response => {
            this.articles = response.data
        })
    },
    filters: {
      date_only(datetime) {
        return datetime.split(" ")[0]
      }
    }
}
</script>

<style scoped>
  li {
    background-color: #71D38C;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    line-height: 30px;
    text-align: left;
  }
  li b {
    padding: 3px;
    border-bottom: 1px solid ;
  }
  li p {
    text-indent: 2em;
    margin: 10px 0px;
    min-height: 50px;
  }
  li i {
    margin-right: 5px;
  }
  li:hover {
    background: rgb(75, 206, 112);
  }
  .right {
    float: right;
  }
</style>

<style>
  .el-footer {
    border-radius: 5px;
    margin: 0px 10px 10px 10px;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0px;
  }
</style>

