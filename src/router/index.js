import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/views/Frame'
import Article from '@/views/Article'
import ArticlesList from '@/views/ArticlesList'
import Login from '@/views/Login'
import Signin from '@/views/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Frame,
      children:[
        { path: '/', name:'Index', component: ArticlesList},
        { path: '/articles/:article_id', name:Article, component: Article},
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    }
  ]
})
