<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="per_page"
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    methods: {
      handleCurrentChange(val) {
        this.$store.commit('change_page',{ page: this.currentPage, per_page: this.$data.per_page })
      }
    },
    data() {
      return {
        per_page: this.$store.state.per_page,
        currentPage: this.$store.state.page
      };
    },
    computed: {
        total(){
          return this.$store.state.total
        },
        currentPage(){
          return this.$store.state.page
        }
    }
  }
</script>
