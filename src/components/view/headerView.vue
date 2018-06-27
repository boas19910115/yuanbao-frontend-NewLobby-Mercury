<template>
  <el-row>
    <el-col :span="6" class="online">
      <el-col>
        <span class="online-a">在线人数</span>
      </el-col>
      <el-col>
        <!-- <span class="number" v-text="this.data.onlingNumber"></span> -->
        <span class="number">{{data.onlingNumber}}</span>
      </el-col>
    </el-col>
    <el-col :span="8" class="title" >
      <img src="@/assets/og/LOGO218X52.png" alt="">
    </el-col>
    <el-col :span="8" class="player">
      <el-col class="play">
        <el-col class="playerTitle">
          <span>玩家号</span>
        </el-col> 
        <el-col class="play-a">
          <!-- <span v-text="this.data.account"></span>  -->
          <span>{{data.account}}</span>
        </el-col>
      </el-col>
      <el-col class="money">
        <el-col class="playerTitle">
          <span v-if='checkGameMode'>金&nbsp;&nbsp;&nbsp;币</span>
          <span v-else>元&nbsp;&nbsp;&nbsp;宝</span>
        </el-col>
        <el-col class="money-a">
          <span v-if='checkGameMode'>{{data.memberCoin}}</span>
          <span v-else>{{data.memberBalence}}</span> 
        </el-col>  
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import { login, getOnlingUser } from "../../api/common";
export default {
  // name:'headerView',
  data() {
    return {
      data: {
        account: "loading",
        memberCoin: "loading",
        memberBalence: "loading",
        onlingNumber: "loading",
        headurl: "",
        gameMode: ""
      },
      checkGameMode: false
    };
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
  mounted() {
    this.getOnlingUser();
    this.getData();
    this.gameMode = localStorage.getItem("Free");
    if (this.gameMode == "free") {
      this.checkGameMode = true;
    } else {
      this.checkGameMode = false;
    }
  },
  methods: {
    formatNumber: function(number) {
      return parseFloat(number)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    },
    getData() {
      login().then(data => {
        if (data.retCode == "0") {
          this.data.account = data.account;
          window.localStorage["yuanBaoLogin"] = data.sessionId;
          // window.localStorage["account"] = data.account;
          this.data.memberCoin = this.formatNumber(data.memberCoin);
          this.data.memberBalence = this.formatNumber(data.memberBalance);
        }
      });
      // .error(msg => {
      //   console.log('登入失敗');
      // })
    },
    getOnlingUser() {
      getOnlingUser().then(data => {
        if (data.retCode == "0") {
          this.data.onlingNumber = data.onlingNumber;
        }
      });
      // .error(msg => {
      //   console.log('取得上線人數連線失敗');
      // })
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  background-image: url("../../assets/og/topbar_BG.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  .online {
    font-size: 12px;
    margin-left: 10px;
    .online-a {
      text-shadow: 0px 0px 2px #000, 1px 1px 0px #000, -1px -1px 0px #000,
        1px -1px 0px #000, -1px 1px 0px #000;
    }
    span {
      color: #eee;
      font-size: 12px;
    }
    .number {
      background-color: #4b94c6;
      border-radius: 5px;
      padding: 0px 10px;
    }
  }
  .title {
    margin-left: 8px;
    img {
      width: 86%;
      margin: 7px 21px;
    }
  }
  .player {
    font-size: 10px;
    margin-left: 8px;
    span {
      color: #eee;
    }
    .play {
      display: flex;
      // text-align: right;
      .playerTitle {
        width: 37.33333%;
      }
      span {
        text-shadow: 0px 0px 2px #000, 1px 1px 0px #000, -1px -1px 0px #000,
          1px -1px 0px #000, -1px 1px 0px #000;
      }
      .play-a {
        background-image: url("../../assets/og/topbar_BG03.png");
        background-size: 100%;
        background-repeat: no-repeat;
        color: #eee;
        text-align: center;
        span {
          font-size: 11px;
          display: inline-block;
          width: 83%;
          overflow: scroll;
        }
      }
    }
    .money {
      display: flex;
      // text-align: right;
      .playerTitle {
        width: 38.33333%;
      }
      span {
        text-shadow: 0px 0px 2px #000, 1px 1px 0px #000, -1px -1px 0px #000,
          1px -1px 0px #000, -1px 1px 0px #000;
      }
      .money-a {
        background-image: url("../../assets/og/topbar_BG03.png");
        background-size: 100%;
        background-repeat: no-repeat;
        color: #eee;
        text-align: center;
        span {
          font-size: 11px;
          display: inline-block;
          width: 83%;
          overflow: scroll;
        }
      }
    }
  }
}
</style>
