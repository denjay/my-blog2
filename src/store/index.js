import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        page: 1,
        per_page: 3,
        total: 1,
        articles: []
    },
    mutations:{
        change_page(state,data){
            state.page = data.page,
            state.per_page = data.per_page
        },
        change_article_list(state,data){
            state.articles = data.articles
        },
        change_total(state,date){
            state.total = data.total
        }
    }
})