<template>
  <el-row class="game-tiger">
    <el-col class="header">
      <el-col class="container">
        <el-col class="back">
          <img src="@/assets/tk/back.png" alt="" v-on:click='backToLobby'>
        </el-col>
        <el-col class="back-a">
          <img src="@/assets/tk/nunuTitle.png" alt="">
        </el-col>
        <el-col class="back-b">
          <img v-if='checkGameMode' src="@/assets/tk/freeMode.png" alt="">
          <img v-else src="@/assets/tk/back2.png" alt="">
        </el-col>
      </el-col>
    </el-col>
    <el-col class="content">
      <el-col class="content-a">
        <el-col >
            <a :href="'../cowcow/index_'+todayURL+'.html'">
              <img src="../../assets/tk/nunuIcons/nu1.png" alt="">
              <p class='gameTitle'>牛牛01</p>
              <p class='limit'>上限10000</p>
            </a>
            <!-- <img class="img1" src="@/assets/og/hot.png"> -->
          </el-col>
      </el-col>
      <!-- <el-col class="content-a" v-for="(item,index) in gameItems" :key="index">
          <el-col v-for="(subItem,subIndex) in item" :key="subIndex">
            <a :href="checkGameMode?subItem.link :subItem.linkTry">
              <img :src="subItem.icon" alt="">
              <p class='gameTitle'>{{subItem.title}}</p>
            </a>
            <img class="img1" src="@/assets/og/hot.png">
          </el-col>
      </el-col> -->
    </el-col>

    <el-footer>
      <footer-view></footer-view>
    </el-footer>
  </el-row>




</template>

<script>
import footerView from "@/components/view/footerView";
import nunuItemConfig from "../js/tiger_nunu_util/nunuUtil/nunuItemConfig.js";
import { login, getRoomSet } from "../../api/common";
export default {
  name: "indexTiger",
  data() {
    return {
      title: "",
      todayURL: new Date().yyyymmdd(),
      checkGameMode: false,
      gameType: "cowCow",
      user: {
        account: "gaAccount"
      },
      gameItems: []
    };
  },
  created() {},
  mounted() {
    // this.todayURL = dateStr;
    // this.axQuik(
    //   "/yuanbao-backend/lobby/Login.do",
    //   {},
    //   res => {
    //     if (res.data.retCode == "0") {
    //       console.log("login()_data.retCode", res.data);
    //       window.localStorage["yuanBaoLogin"] = res.data.sessionId;
    //       nunuItemConfig(this.gameType);
    //     }
    //   },
    //   err => {}
    // );
    login()
      .then(data => {
        if (data.retCode == "0") {
          console.log("login()_data.retCode", data);
          window.localStorage["yuanBaoLogin"] = data.sessionId;
          this.getRoomSet();
        }
      })
      .catch(err => {
        console.log("login()_err", err);
      });
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
    axQuik(url, params, resDo, errDo) {
      this.axios
        .post(url, params)
        .then(res => {
          console.log("nunuItemConfig.js_res", res);
          resDo(res);
        })
        .catch(err => {
          console.log("nunuItemConfig.ks_err", err);
          errDo(err.response);
        });
    },
    backToLobby() {
      this.$router.push({
        path: "/"
      });
    },
    getRoomSet() {
      var params = {
        gameType: "cowCow"
      };
      getRoomSet(params)
        .then(data => {
          console.log("getRoomSet___", data);
        })
        .catch(err => {
          console.log("login()_err", err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.game-tiger {
  height: 100%;
  .header {
    background-image: url("../../assets/og/topbar_BG.png");
    background-size: 100% 100%;
    padding: 0;
    width: 100%;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    height: 40px;
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
      height: 670px;
    }
    @media screen and (min-width: 400px) {
      height: 700px;
    }
    .content-a {
      margin: 5px 10px;
      display: flex;
      width: 100%;
      text-align: center;
      .el-col {
        background-image: url("../../assets/tk/icons_BG.png");
        background-size: 100% 100%;
        max-width: 22%;
        flex-basis: 21%;
        margin: 0px 135px;
        position: relative;
        a {
          text-decoration: none;
          color: #fff;
        }
        .gameTitle {
          margin: 2px 0px;
          color: #fff;
          font-size: 14px;
          text-align: center;
          font-family: "Courier New", Courier, monospace;
        }
        .limit {
          margin: 2px 0px;
          background-color: #fff;
          color: rgb(19, 61, 247);
          font-size: 12px;
          text-align: center;
          font-weight: bold;
          border-radius: 5px 5px 2px 2px;
          font-family: "Courier New", Courier, monospace;
        }
        .img1 {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 45%;
        }
        a img {
          width: 90%;
          margin: 0px 5px;
          padding: 4px 0px 0px 0px;
        }
      }
    }
  }
}
</style>
