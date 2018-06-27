<template>
<el-row class="game-ticket">
  <el-col class="header">
    <el-col class="container">
      <el-col class="back">
        <img src="@/assets/tk/back.png" alt="" v-on:click='backToLobby'>
      </el-col>
      <el-col class="back-a">
        <img src="@/assets/tk/LOGO03.png" alt="">
      </el-col>
      <el-col class="back-b">
        <img v-if ='checkGameMode' src="@/assets/tk/freeMode.png" alt="">
        <img v-else src="@/assets/tk/back2.png" alt="">
      </el-col>      
    </el-col>
  </el-col>

  <el-col class="content">
    <el-col class="content-a">
      <el-col class="hot">
        <img src="@/assets/tk/card.png" alt="">
      </el-col>
      <el-col class="hotgame">
        <el-col>
          <a @click="goToNunu"><img src="@/assets/tk/icons/icons016.png" alt=""><p class='gameTitle'>元宝牛牛</p></a>
        </el-col >
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons017.png" alt=""><p class='gameTitle'>百家乐</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons018.png" alt=""><p class='gameTitle'>炸金花</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons019.png" alt=""><p class='gameTitle'>通比牛</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons020.png" alt=""><p class='gameTitle'>梭哈</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons021.png" alt=""><p class='gameTitle'>德州扑克</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons022.png" alt=""><p class='gameTitle'>斗地主</p></a>
        </el-col>                        
      </el-col>
    </el-col>
    <el-col class="content-b">
      <el-col class="eleven">
        <img src="@/assets/tk/tech.png" alt="">
      </el-col>
      <el-col class="elevengame">
        <el-col>
          <a :href="'../dragonTiger/index_'+todayURL+'.html'"><img src="@/assets/tk/icons/icons023.png" alt=""><p class='gameTitle'>龙虎</p></a>
        </el-col>
        <el-col>
          <a :href="'../dice/index_'+todayURL+'.html'"><img src="@/assets/tk/icons/icons024.png" alt=""><p class='gameTitle'>骰宝</p></a>
        </el-col>
      </el-col>
    </el-col>
  </el-col>

  <el-footer>
    <footer-view></footer-view>
  </el-footer>
</el-row>
  


  
</template>


<script>
import footerView from "@/components/view/footerView";

export default {
  name: "indexTicket",
  data() {
    return {
      title: "",
      todayURL: "",
      checkGameMode: false
    };
  },
  mounted() {
    this.todayURL = new Date().yyyymmdd();
  },
  computed: {
    getGameMode() {
      return this.$store.state.getData.checkMode;
    }
  },
  watch: {
    getGameMode(val) {
      this.checkGameMode = val;
    }
  },
  components: {
    "footer-view": footerView
  },
  methods: {
    backToLobby() {
      this.$router.push({ path: "/" });
    },
    goToNunu() {
      this.$router.push({ path: "/indexNunu" });
    }
  }
};
</script>

<style lang="scss" scoped>
.game-ticket {
  height: 100%;
  .header {
    background-image: url("../../assets/og/topbar_BG.png");
    background-size: 100% 100%;
    padding: 0;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: auto;
    .container {
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
      .back {
        margin-right: 30px;
      }
      .bavk-a {
      }
      .back-b {
        margin-left: 30px;
      }
    }
  }

  .content {
    background-image: url("../../assets/og/BG.png");
    background-size: 100% 100%;
    position: absolute;
    top: 39px;
    width: 100%;
    left: 0;
    bottom: 44px;
    overflow: auto;
    height: 700px;
    @media screen and (min-width: 350px) {
      height: 800px;
    }
    @media screen and (min-width: 400px) {
      height: 900px;
    }
    .content-a {
      margin: 10px 0;
      .hotgame {
        display: flex;
        flex-wrap: wrap;
        // width: 70%;
        .el-col {
          background-image: url("../../assets/tk/icons_BG.png");
          background-size: 100% 100%;
          max-width: 21%;
          flex-basis: 21%;
          margin: 6px;
          a {
            text-decoration: none;
            color: #fff;
          }
          .gameTitle {
            margin: -8px 0px 7px;
            color: #fff;
            font-size: 12px;
            text-align: center;
          }
          a img {
            width: 90%;
            margin: -6px 5px;
          }
        }
      }
    }
    .content-b {
      margin: 10px 0;
      .elevengame {
        display: flex;
        flex-wrap: wrap;
        .el-col {
          background-image: url("../../assets/tk/icons_BG.png");
          background-size: 100% 100%;
          max-width: 21%;
          flex-basis: 21%;
          margin: 6px;
          a {
            text-decoration: none;
            color: #fff;
          }
          .gameTitle {
            margin: -8px 0px 7px;
            color: #fff;
            font-size: 12px;
            text-align: center;
          }
          a img {
            width: 90%;
            margin: -6px 5px;
          }
        }
      }
    }
  }
}
</style>