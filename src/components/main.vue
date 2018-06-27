<template>
  <el-container>
    <el-header>
      <header-view></header-view>
    </el-header>
    <el-main>
      <content-view></content-view>
    </el-main>
    <el-footer>
      <footer-view></footer-view>
    </el-footer>
  </el-container>
</template>

<script>
import headerView from "@/components/view/headerView";
import contentView from "@/components/view/contentView";
import footerView from "@/components/view/footerView";



export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    "header-view": headerView,
    "content-view": contentView,
    "footer-view": footerView,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .el-header, .el-footer, .el-main{
//   padding: 0;
//   height: auto !important;
// }
.el-main{
  background-image: url('../assets/og/BG.png');
  background-size: 100% 100%;
}
</style>
