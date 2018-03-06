<template>
  <div>
    <top-bar></top-bar>
    <div class="container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
          <router-view></router-view>
        </el-col >
        <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
          <others></others>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Article from './Article'
import TopBar from '@/components/TopBar'
import ArticlesList from './ArticlesList'
import Others from './Others'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      TopBar,
      ArticlesList,
      Others,
    }
};
</script>

<style scoped>
  .container {
    max-width: 1200px;
    margin: auto;
  }
</style>

<style>
  body {
    background: url(../assets/background.jpg) no-repeat center top #B4DAEF;   
    background-size: cover;    
  }
</style>
