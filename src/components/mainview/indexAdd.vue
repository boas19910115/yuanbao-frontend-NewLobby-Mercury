<template>
  <el-row class="game-add">
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
          <img v-else @click="record_dialog = !record_dialog" src="@/assets/tk/back2.png" alt="">
        </el-col>
      </el-col>
    </el-col>

    <el-col class="content">
      <el-col class="content-yuanbao">
        <p>现有
          <span class="content-yuanbao-amount">{{user.memberBalance}}</span>元宝</p>
      </el-col>
      <img class="content-bar" src="@/assets/tk/add/amount2.png" alt="">
      <div class="content-inner">
        <div class="content-inner-img-ch">
          <img src="@/assets/tk/add/ch.png" alt="">
        </div>
        <div class="content-inner-amountSelect">
          <span @click="amountOnClick" v-for="(item,index) in amountSelect" :key="index">{{item.amount}}</span>

          <div class="input-box">
            <span class="input">
              <input v-model="inputBox_input" placeholder="手动输入其他金额" type="number">
            </span>
            <span class="reset">
              <img @click="resetAmount" src="@/assets/tk/add/reset.png" alt="">
            </span>
          </div>
        </div>
        <img src="@/assets/tk/add/pay-way.png" alt="">
        <div class="pay-way">
          <div class="item" @click="payOnclick" v-for="(item,index) in paySelect" :key="index">
            <img :src="item.image" alt="">
            <span class="label">{{item.label}}</span>
            <span class="info">{{item.info}}</span>
          </div>
        </div>
      </div>
      <img @mousedown="confirm_mousedown" @mouseup="confirm_mouseup" class="confirm" :src="confirmClick?'/image/add/confirm_H.png':'/image/add/confirm.png'"
        alt="">
      <a href="https://kf1.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=933818&configID=71687&jid=5043740959&operatorId=30319&s=1">
        <img class="contact" src="@/assets/tk/add/contact.png" alt="">
      </a>
    </el-col>

    <div :hidden='!record_dialog' class="record-dialog-wrap">
      <div class="record-dialog">
        <div class="record-content">
          <div class="dialog-bar" src="" alt=""></div>
          <div id="closeBtn" @click="record_dialog=false"></div>
          <div class="dateRageSelect">
            <span id="dateS">
              <el-date-picker size="mini" v-model="datePicker[0]" align="center" type="date" placeholder="选择日期">
              </el-date-picker>
            </span>~
            <span id="dateE">
              <el-date-picker size="mini" v-model="datePicker[1]" align="center" type="date" placeholder="选择日期">
              </el-date-picker>
            </span>
            <span class="glass-box">
              <img @click="record" src="/image/record/glass.png" class="glass">
            </span>
          </div>

        </div>
      </div>
    </div>




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
        dateE: this.datePicker[1].yyyymmdd(),
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
.game-add {
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
    .content-yuanbao {
      text-align: center;
      color: white;
      font-size: 20px;
      margin: 0px 0px;
      p {
        margin: 10px 0px;
      }
      .content-yuanbao-amount {
        color: yellow;
        margin: 0px 5px;
        font-weight: bold;
      }
    }
    .content-bar {
      position: relative;
      top: 0px;
      width: 98%;
      z-index: 10;
    }
    .content-inner {
      background-color: #f2f1f3;
      position: relative;
      top: -25px;
      width: 79%;
      height: 60%;
      margin: 0px auto;
      text-align: center;
      .content-inner-img-ch {
        img {
          width: 70%;
          margin: 14px 0px 0px;
        }
      }
      .content-inner-amountSelect {
        color: #f2f1f3;
        width: 100%;
        > span {
          border-radius: 3px;
          font-weight: bold;
          vertical-align: middle;
          display: inline-block;
          width: 25%;
          height: 25px;
          line-height: 25px;
          font-size: 12px;
          margin: 5px 5px;
          text-align: center;
          background: linear-gradient(#00e4f4, #05507a);
        }
        .click {
          background: linear-gradient(#f56565, #ff0101);
        }
        > span::after {
          content: "元宝";
          width: 100%;
          position: relative;
          right: -5px;
        }
        .input-box {
          .input {
            > input {
              border-radius: 5px;
              text-align: center;
            }
            input::-webkit-input-placeholder {
              font-family: Microsoft JhengHei;
              color: #68aad1;
              font-weight: bold;
            }
          }
          .reset {
            img {
              vertical-align: middle;
              width: 9%;
            }
          }
        }
      }
      > img {
        width: 95%;
        height: 8%;
        position: relative;
        top: 3px;
        border-radius: 6px 6px 0px 0px;
      }
      .pay-way {
        margin: 0px auto;
        width: 95%;
        height: 48%;
        overflow: auto;
        background: #ffffff;
        border-radius: 0px 0px 6px 6px;

        .item {
          overflow: auto;
          line-height: 25%;
          height: 25%;

          background: linear-gradient(#b8b8b8 10%, #ffffff 20% #b8b8b8 100%);
          img {
            position: relative;
            top: 14px;
            display: inline-block;
            vertical-align: bottom;
            width: 9%;
          }
          .label {
            display: inline-block;
            font-size: 14px;
            width: 45%;
            vertical-align: middle;
          }
          .info {
            display: inline-block;
            font-size: 10px;
            width: 40%;
            vertical-align: middle;
          }
        }
      }
    }
    .contact {
      width: 79%;
      margin: 0px auto;
      padding: 0px;
      position: relative;
      top: 0px;
    }
    .confirm {
      width: 79%;
      margin: 0px auto;
      padding: 0px;
      position: relative;
      top: -10px;
    }
    .confirm.confirmed {
    }
  }

  .record-dialog-wrap {
    position: absolute;
    box-sizing: border-box;
    z-index: 13;
    width: 100%;
    height: 100%;

    padding: 6%;
    background: #00000086;
    div {
      box-sizing: border-box;
    }
    .record-dialog {
      z-index: 14;

      background: #0a527c;
      background-image: url("../../assets/og/topbar_BG.png");
      background-size: 100% 33.3333333333%;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      padding: 3%;
      .record-content {
        z-index: 15;
        background: #ffffff;
        width: 100%;
        height: 100%;
        .dialog-bar {
          background-image: url("../../assets/og/topbar_BG.png");
          height: 6%;
        }
        #closeBtn {
          position: fixed;
          right: 12px;
          top: 12px;
          background-image: url("/image/add/XX.png");
          height: 40px;
          width: 40px;
        }
        .dateRageSelect {
          text-align: center;
          .el-input {
            margin: 5px 0px 0px;
            width: 40%;
          }
          .glass {
            vertical-align: middle;
            width: 13%;
          }
          #dateS {
          }
          #dateE {
          }
        }
      }
    }
  }
}
</style>
