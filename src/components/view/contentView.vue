<template>
  <el-row>
    <el-col class="show">
      <el-col class="slideshow">
        <marquee behavior="" direction="">全亞洲最牛逼微投包網商!!!</marquee>
      </el-col>
      <el-col>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in imx" :key="item.img" class="banner">
            <img :src="item.img">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col class="button">
        <a :href="'../personal/index_'+todayURL+'.html'"><img src="@/assets/og/button01.png"></a>
        <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUzNDU0MjEzMQ==&scene=124#wechat_redirect"><img src="@/assets/og/button02.png"></a>
        <a href="#"><img src="@/assets/og/button04.png"></a>
      </el-col>
    </el-col>
    <el-col class="content">
      <el-col class="content-a">
        <el-col :span="8" class="img-a">
          <a v-on:click='goToLottery'>
          <img src="@/assets/og/BB01.png" alt=""> 
          </a>
          <img class="img1" src="@/assets/og/hot.png" >
        </el-col>
        <el-col :span="8" class="img-a">
          <a :href="'../racing/index_'+todayURL+'.html'"><img src="@/assets/og/BB02.png" alt=""></a>
          <a v-on:click='goToNunu'><img src="@/assets/og/BB03.png"></a>
        </el-col>
        <el-col :span="8" class="img-a">
          <a :href="'../rowing/index_'+todayURL+'.html'"><img src="@/assets/og/BB04.png"></a>
          <a v-on:click='goToCard'><img src="@/assets/og/BB05.png"></a>
        </el-col>
      </el-col>
      <el-col class="content-b">
        <el-col :span="8" class="img-b">
          <a :href='URLfront+"/yuanbao-backend/guan-jie/enter.do"'><img src="@/assets/og/BB06.png"></a>
          <img class="img2" src="@/assets/og/hot.png"> 
        </el-col>
        <el-col :span="16" class="img-c">
          <a href="#"><img src="@/assets/og/BB07.png"></a>
          <img class="img3" src="@/assets/og/hot.png">
        </el-col>
      </el-col>
      <el-col class="content-c">
          <a :href="URLfront+'/yuanbao-backend/salon-baccarat/enter.do'"><img src="@/assets/og/BB08.png" alt=""></a>
          <a v-on:click='goToTiger'><img src="@/assets/og/BB09.png" alt=""></a>
          <a href=""><img src="@/assets/og/BB10.png" alt=""></a>
          <!-- <a :href="URLfront+'/yuanbao-backend/cq9-game/enter.do'"><img src="@/assets/og/BB10.png" alt=""></a> -->
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  // name:'mainView',
  data() {
    return {
      title: "",
      todayURL: "",
      URLfront: "http://ws.myyg168.com",
      imx: [
        { img: require("@/assets/og/banner01.jpg") },
        { img: require("@/assets/og/banner02.jpg") },
        { img: require("@/assets/og/banner03.jpg") },
        { img: require("@/assets/og/banner04.jpg") },
        { img: require("@/assets/og/banner05.jpg") },
        { img: require("@/assets/og/banner06.jpg") }
      ]
    };
  },
  mounted() {
    this.todayURL = new Date().yyyymmdd();
  },
  methods: {
    goToLottery() {
      this.$router.push({ path: "/indexTicket" });
    },
    goToCard() {
      this.$router.push({ path: "/indexCard" });
    },
    goToTiger() {
      this.$router.push({ path: "/indexTiger" });
    },
    goToNunu() {
      this.$router.push({ path: "/indexNunu" });
    },
    
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  // background-image: url('../../assets/og/BG.png');
  // background-size: 100% 100%;
  // height: auto;
  .show {
    .slideshow {
      background-image: url("../../assets/og/runbg.png");
      background-size: 100% 100%;
      marquee {
        color: #eee;
        font-size: 12px;
      }
      img {
        width: 100%;
      }
    }
    .banner {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .button {
      display: flex;
      a img {
        width: 100%;
      }
    }
  }
  .content {
    .content-a {
      display: flex;
      .img-a {
        margin: 0 3px;
        position: relative;
        .img1 {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 35%;
        }
        a {
          img {
            width: 100%;
          }
        }
      }
    }
    .content-b {
      display: flex;
      .img-b {
        margin: 0 3px;
        position: relative;
        .img2 {
          position: absolute;
          top: -2px;
          right: 1px;
          width: 33%;
        }
        a {
          img {
            width: 97%;
          }
        }
      }
      .img-c {
        margin: 0 5px 0 0;
        position: relative;
        .img3 {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 17%;
        }
        a {
          img {
            width: 100%;
          }
        }
      }
    }
    .content-c {
      display: flex;
      a {
        margin: 0 3px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>