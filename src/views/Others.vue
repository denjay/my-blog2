<template>
  <div class="container shadow">
      <b>热门文章</b>
      <hr>
      <ul v-bind="articles">
            <li v-for="article in articles" v-bind:key="article.index">
                <img src="../assets/hot.gif" alt="hot">
                <router-link :to="'/articles/' + article.id">{{ article.article_title }}</router-link>
                <!-- <a :href="'/#/articles/' + article.article_id"></a> -->
            </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
          articles: []
        }
    },
    mounted() {
      this.$axios.get("http://127.0.0.1:8800/api/v1.0/articles_hot")
      .then(response => {
          this.articles = response.data
      })
    }
}
</script>

<style scoped>
    .container {
        border-radius: 5px;
        max-width: 300px;
        margin: 0px 10px 10px 10px;
        padding: 5px 10px;
        background-color: #71D38C;
    }
    img {
        position: relative;
        top: 5px;
        text-align: center;
        width: 25px;
    }
    li {
        margin: 5px;
        text-align: left;
    }
    .right {
        float: right;
    }
    hr { 
        border: none;
        border-top: 2px solid rgba(0, 102, 204, 0.459);
        margin: 5px 0px; 
    }
</style>
