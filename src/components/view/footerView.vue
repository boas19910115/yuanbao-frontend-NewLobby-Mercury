<template>
  <el-row>
    <el-col class="img1">
      <a :href="'../bow_SC/bow_index_'+todayURL+'.html'"><img src="@/assets/og/icon01.png" alt=""></a>
    </el-col>
    <el-col class="img1">
      <!-- <a :href="'../add/index_'+todayURL+'.html'"> -->
      <a @click="goToAdd">
      <img src="@/assets/og/icon03.png" alt="">
      </a>
    </el-col>
    <el-col class="img2">
      <!-- <button class="img2-a" type="button" v-on:click="changeMode"><img :src="imgUrl"></button> -->
      <a class="img2-a"><img :src="imgUrl" alt="" class="footerBtnTo" v-on:click='changeMode'></a>
      <!-- <button class="img2-a" type="button" v-on:click="change"><img src="@/assets/og/icon07.png"></button> -->
    </el-col>
    <el-col class="img1">
      <a :href="'../change/change-lobby_'+todayURL+'.html'"><img src="@/assets/og/icon02.png" alt=""></a>
    </el-col>
    <el-col class="img1">
      <a :href="'https://kf1.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=933818&configID=71687&jid=5043740959&operatorId=30319&s=1'"><img src="@/assets/og/icon04.png" alt=""></a>
    </el-col>                
  </el-row>
</template>

<script>
export default {
  name: "footerView",
  data() {
    return {
      title: "",
      gameMode: "",
      URLfront: "http://ws.myyg168.com",
      todayURL: new Date().yyyymmdd(),
      imgUrl: require("@/assets/og/icon06.png")
      // imgUrl:'<p>aaa</p>',
    };
  },
  methods: {
    changeMode: function() {
      if (this.gameMode) {
        this.imgUrl = require("@/assets/og/icon07.png");
        this.gameMode = false;
        localStorage.setItem("Free", "");
        this.$store.dispatch("checkMode");
      } else {
        this.imgUrl = require("@/assets/og/icon06.png");
        this.gameMode = true;
        localStorage.setItem("Free", "free");
        this.$store.dispatch("checkMode");
      }
    },
    goToAdd() {
      this.$router.push({ path: "/indexAdd" });
    }
  },
  mounted() {
    // this.todayURL = dateStr;

    // 取得目前模式
    this.gameMode = localStorage.getItem("Free");
    // 第一次近來
    if (this.gameMode == null) {
      // this.gameMode = false;
      localStorage.setItem("Free", "");
    }
    if (this.gameMode == "free") {
      this.imgUrl = require("@/assets/og/icon06.png");
    } else {
      this.imgUrl = require("@/assets/og/icon07.png");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  background-image: url("../../assets/og/footer_BG.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  .img1 {
    a img {
      width: 100%;
    }
  }
  .img2-a {
    padding: 0;
    img {
      width: 120px;
      margin-bottom: -5px;
      @media screen and (max-width: 359px) {
        width: 100px;
      }
      @media screen and (min-width: 426px) {
        width: 200px;
      }
    }
  }
}
</style>