<template>
  <div class="article shadow">
    <h3>{{ article.article_title }}</h3>
    <a>{{ article.article_date }}</a> 
    <br>   
    <hr>
    <div class="content">
      {{ article.article_content }}
    </div>
    <hr>
    <div class="comment">
      <p v-if="loggedIn">{{ username }}，留下你的评论吧！</p>
      <p v-else>请<router-link to="/login">登录</router-link>后再留言：</p>
      <el-form>
        <el-form-item>
            <el-input type="textarea" rows="4" v-model="form.comment"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :disabled="!loggedIn" @click="submit_comment" size="mini">提交评论</el-button>
        </el-form-item>
      </el-form>
      <br>
      <b>网友留言：</b>
      <ul v-if="comments" v-bind="comments">
        <li v-for="comment in comments" v-bind:key="comment.index" class="shadow">
          <p>
            <span>{{ comment.user_name}}</span><span>{{ comment.comment_date }}</span>
          </p>
          <hr>
          <p>{{ comment.comment_content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return { 
      form :{
        comment: ''
      },
      article:{},
      comments: {},
      loggedIn: false,
      username: '',
    }
  },
  methods:{
    get_article(){
      this.$axios.get("http://127.0.0.1:8800/api/v1.0/articles/" + this.$route.params.article_id)
      .then(response => {
      this.article = response.data
      })
    },
    get_comments(){
      this.$axios.get("http://127.0.0.1:8800/api/v1.0/articles/" + this.$route.params.article_id + "/comments")
      .then(response => {
      this.comments = response.data
      })
    },
    submit_comment(){
      this.$axios.post("http://127.0.0.1:8800/api/v1.0/articles/" + this.$route.params.article_id + "/comments", { comment_content: this.form.comment })
      .then(response => {
        if (response.status === 200) {
          response.data["user_name"] = this.username;
          this.comments.push(response.data);
          this.form.comment = '';
          this.$message({
            message: '评论成功！',
            type: 'success'
          });
        }
      })
    }
  },
  mounted(){
    this.get_article();
    this.get_comments();
    if (localStorage.token) {
      this.loggedIn = true;
      this.username = localStorage.username;
    };
  },
  watch:{
      '$route':'get_article'
  },
}
</script>

<style scoped>
  .article {
    border-radius: 5px;
    padding: 15px;
    background-color: #71D38C;
    margin: 0px 10px 15px 10px;
  }
  h3 + a {
    float: right;
    font-size: 12px;
  }
  hr {
    height:1px; 
    border:none; 
    border-top:1px dashed rgba(0, 102, 204, 0.459);
    margin-bottom: 5px;
  }
  .content + hr {
    margin: 10px 0px;
  }
  .comment hr {
    margin: 5px 0px;
  }
  .content {
    font-size: 20px;
    min-height: 300px;
    text-align: left;
    text-indent: 2em;
  }
  .comment {
    text-align: left;
  }
  .comment > p {
    color: white;
    font-size: 14px;
  }
  .el-form-item {
    margin: 2px;
  }
  button {
    float: right;
  }
  li {
    min-height: 100px;
    padding: 10px;
    margin: 10px 0px;
    border-radius: 8px;
    background-color: #71D38C;
  }
  li:first {
    border: 1px solid black;
  }
  li span {
    color: white;    
    font-size: 14px;
  }
  li span:nth-child(2) {
    float: right;
  }
</style>

<style>
  .el-textarea__inner {
    background-color: rgb(136, 214, 158);
    color: white;
  }
</style>


