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
        this.$store.commit('change_page',{ page: this.$data.currentPage, per_page: this.$data.per_page })
      }
    },
    data() {
      return {
        per_page: 3,
        currentPage: 1,
        total: this.$store.state.total
      };
    }
  }
</script>
