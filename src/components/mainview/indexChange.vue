<template>
  <el-row class="game-change">
    <el-col class="header">
      <el-col class="container">
        <el-col class="back">
          <img src="@/assets/tk/back.png" alt="" v-on:click='backToLobby'>
        </el-col>
        <el-col class="back-a">
          <img src="@/assets/tk/LOGO_add.png" alt="">
        </el-col>
        <el-col class="back-b">
          <img v-if='checkGameMode' src="@/assets/tk/freeMode.png" alt="">
          <!-- <img v-else @click="record_dialog = !record_dialog" src="@/assets/tk/back2.png" alt=""> -->
        </el-col>
      </el-col>
    </el-col>

    <el-col class="content">
      <el-col class="content-change">
        <div class="search">
          <span>现有</span>
          <span class="input-yuanbao">
            <input v-model="inputYuanbao.yuanbao" type="text" disabled>
          </span>
          <span>元宝可兑换</span>
          <span class="input-money">
            <input v-model="inputYuanbao.money" type="text" disabled>
          </span>
          <span>元</span>
          <span>查询</span>
        </div>
        <div class="select">
          <div class="title"><span>请选择欲兑换元</span><span class="note">最低100元</span></div>
          <div class="select-box">
            <span @click="amountOnClick" v-for="(item,index) in amountSelect" :key="index">{{item.amount}}</span>
          </div>
          <div class="input-box">
            <span class="input">
              <input v-model="inputBox_input" placeholder="手动输入其他金额" type="number">
            </span>
            <span class="reset">
              <img @click="resetAmount" src="@/assets/tk/add/reset.png" alt="">
            </span>
          </div>
        </div>

        <div class="bind">
          <div class="check"></div>
          <div class="binding"></div>
        </div>
      </el-col>
    </el-col>



    <!-- <el-footer>
      <footer-view></footer-view>
    </el-footer> -->
  </el-row>




</template>


<script>
import footerView from "@/components/view/footerView";
import payWayConfig from "./indexAdd_payWays.js";
import { login, getAddRecord } from "../../api/common";

export default {
  // name:'indexTicket',
  data() {
    var Today = new Date();
    return {
      title: "",
      user: {
        account: "",
        memberBalance: ""
      },
      checkGameMode: false,
      todayURL: "",
      inputBox_input: "",
      lastAmountClick: {},
      confirmClick: false,
      datePicker: [new Date(), new Date()],
      record_dialog: false,
      inputYuanbao: {
        yuanbao: "",
        money: ""
      },
      amountSelect: [
        {
          amount: 50
        },
        {
          amount: 100
        },
        {
          amount: 200
        },
        {
          amount: 300
        },
        {
          amount: 500
        },
        {
          amount: 1000
        }
      ],
      paySelect: payWayConfig
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
  components: {
    "footer-view": footerView
  },
  mounted() {
    this.todayURL = new Date().yyyymmdd();
    login()
      .then(data => {
        if (data.retCode == "0") {
          this.user.account = data.account;
          this.user.memberBalance = data.memberBalance;
          console.log("login()_data.retCode", data);
          window.localStorage["yuanBaoLogin"] = data.sessionId;
          this.getRoomSet();
        }
      })
      .catch(err => {
        console.log("login()_err", err);
      });
  },
  methods: {
    backToLobby() {
      this.$router.push({
        path: "/"
      });
    },
    record() {
      var params = {
        dateS: this.datePicker[0].yyyymmdd(),
        dateE: this.datePicker[1].yyyymmdd()
        // account: this.account
      };
      getAddRecord(params).then(res => {
        console.log("getAddRecord", res);
        if (res.retCode == "0") {
        }
      });
    },
    amountOnClick(e) {
      //   console.log("amountOnClick", e);
      this.lastAmountClick.className = "";
      e.target.className = "click";
      this.lastAmountClick = e.target;
      this.inputBox_input = e.target.innerText;
    },
    resetAmount() {
      this.inputBox_input = "";
    },
    payOnclick() {},
    confirm_mousedown(e) {
      //   console.log("amountOnClick", e);
      if (!this.confirmClick) {
        alert("submit");
      }
      this.confirmClick = true;
    },
    confirm_mouseup(e) {
      //   console.log("amountOnClick", e);
      setTimeout(() => {
        this.confirmClick = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.game-change {
  height: 100%;

  .header {
    background-image: url("../../assets/og/topbar_BG.png");
    background-size: 100% 100%;
    padding: 0;
    width: 100%;
    z-index: 11;
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
    height: 640px;
    @media screen and (min-width: 350px) {
      height: 94%;
    }
    @media screen and (min-width: 400px) {
      height: 94%;
    }
    text-align: center;
    font-family: Microsoft JhengHei;
    box-sizing: border-box;
    div {
      box-sizing: border-box;
    }
    .content-change {
      padding: 2%;
      width: 100%;
      height: 100%;
      background: linear-gradient(#e3e4e5 70%, #b4b2b5);
      color: #666;
      font-weight: bold;
      .search {
        width: 100%;
        border-bottom: 1px solid #aaa;
        padding: 12px 0px;
        text-align: left;
        span {
          vertical-align: middle;
          display: inline-block;
          margin: auto 2px;
        }
        input:disabled {
          background: #ffffff;
          width: 100%;
          border-radius: 6px;
        }
        .input-yuanbao {
          width: 20%;
        }
        .input-money {
          width: 20%;
        }
      }
      .select {
        margin: 12px 0px;
        .title {
          text-align: left;
        }
        .note{
            margin: 0px 10px;
            font-size: 12px;
        }
        .select-box{
            width: 100%;
            
        }
      }
    }
  }
}
</style>
