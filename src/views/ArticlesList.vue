<template>
  <div>
    <carousel></carousel>
    <el-container>
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
            <span class="right"><i class="el-icon-date"></i>{{ article.article_date }}</span>
          </li>
        </ui>
      </el-main>
    </el-container>
    <pagination></pagination>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import Pagination from './Pagination.vue'
export default {
    data(){
        return {
            articles: this.$store.state.articles
        }
    },
    components: { Carousel, Pagination },
    methods:{
      get_article_list(){
        var page = this.$store.state.page;
        var per_page = this.$store.state.per_page;
        if (typeof(page) === "undefined"){
          var query = ""
          }
        else{
          var query = "?page=" + page + "&per_page=" + per_page
        };
        alert(query);
        this.$axios.get("http://127.0.0.1:8800/api/v1.0/articles" + query)
        .then(response => {
          this.$store.commit("change_article_list",{ articles: response.data.articles })
          alert(response.data.count)
          this.$store.commit("change_total",{ total: response.data.count })
          this.$data.articles = this.$store.state.articles
        })
      }
    },
    mounted() {
      this.get_article_list()
    },
    watch:{
      '$store.state.page':'get_article_list'
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
  .el-pagination {
    border-radius: 5px;
    padding: 15px;
    margin: 0px 10px 10px 10px;
    background-color: #B3C0D1;
  }
  .el-pagination .btn-next, .el-pagination .btn-prev, .el-pager li,.el-pagination button.disabled {
    background-color: #B3C0D1;
  }
  .el-pagination button.disabled {
    color: #303133;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0px;
  }
</style>

