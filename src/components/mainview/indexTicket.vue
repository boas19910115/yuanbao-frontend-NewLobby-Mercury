<template>
<el-row class="game-ticket">
  <el-col class="header">
    <el-col class="container">
      <el-col class="back">
        <img src="@/assets/tk/back.png" alt="" v-on:click='backToLobby'>
      </el-col>
      <el-col class="back-a">
        <img src="@/assets/tk/LOGO02.png" alt="">
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
        <img src="@/assets/tk/hot.png" alt="">
      </el-col>
      <el-col class="hotgame">
        <el-col>
          <a :href="'../racing/index_'+todayURL+'.html'"><img src="@/assets/tk/icons/icons001.png" alt=""><p class='gameTitle'>北京赛车</p></a>
          <img class="img1" src="@/assets/og/hot.png" >
        </el-col >
        <el-col>
          <a :href="'../rowing/index_'+todayURL+'.html'"><img src="@/assets/tk/icons/icons002.png" alt=""><p class='gameTitle'>幸运快艇</p></a>
          <img class="img1" src="@/assets/og/hot.png" >
        </el-col>
        <el-col>
          <a :href="'../timetime/index_'+todayURL+'.html'"><img src="@/assets/tk/icons/icons003.png" alt=""><p class='gameTitle'>重庆时时彩</p></a>
          <img class="img1" src="@/assets/og/hot.png" >
        </el-col>
      </el-col>
    </el-col>
    <el-col class="content-b">
      <el-col class="eleven">
        <img src="@/assets/tk/eleven.png" alt="">
      </el-col>
      <el-col class="elevengame">
        <el-col>
          <a href="http://d87b.com/gd11x5/enter/mobile/PRUOd%252Br5uE4lx27tdRu34LfeObTjInVwQahGV9p7FgCWLpsUoY%252FQQ3KAtSLb5VDqAxrs9xYwr2iO%250AngocMGAifJaCwH0A2NxZm2BdsAf6UXqKYag1C190molRFrRzWfowi9zqvYlZpgeUuXLzgNdayw%253D%253D"><img src="@/assets/tk/icons/icons004.png" alt=""><p class='gameTitle'>广东11选5</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons005.png" alt=""><p class='gameTitle'>山东11选5</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons006.png" alt=""><p class='gameTitle'>江西11选5</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons007.png" alt=""><p class='gameTitle'>江苏11选5</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons008.png" alt=""><p class='gameTitle'>11选5分分彩</p></a>
        </el-col>
      </el-col>
    </el-col>
    <el-col class="content-c">
      <el-col class="rush">
        <img src="@/assets/tk/rush.png" alt="">
      </el-col>
      <el-col class="rushgame">
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons009.png" alt=""><p class='gameTitle'>北京快三</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons010.png" alt=""><p class='gameTitle'>广西快三</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons011.png" alt=""><p class='gameTitle'>江苏快三</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons012.png" alt=""><p class='gameTitle'>湖北快三</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons013.png" alt=""><p class='gameTitle'>河北快三</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons014.png" alt=""><p class='gameTitle'>甘肃快三</p></a>
        </el-col>
        <el-col>
          <a href="#"><img src="@/assets/tk/icons/icons015.png" alt=""><p class='gameTitle'>快三分分彩</p></a>
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
  // name:'indexTicket',
  data(){
    var Today = new Date();
    return{
      title:'',
      checkGameMode:false,
      todayURL: '',
    }
  },
  computed:{
    getGameMode(){
      return this.$store.state.getData.checkMode;
    }
  },
  watch:{
     getGameMode(val) {
        this.checkGameMode = val;
    }
  },
  components: {
    "footer-view": footerView,
  },
   mounted(){
    this.todayURL = new Date().yyyymmdd();;
  },
  methods:{
    backToLobby(){
    this.$router.push({path:'/'})
    }
  },
}
</script>

<style lang="scss" scoped>

.game-ticket{
  height: 100%;
  .header{
    background-image: url('../../assets/og/topbar_BG.png');
    background-size: 100% 100%;
    padding: 0;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: auto;
    .container{
      display: flex;
      align-items: center;
      img{
        width: 100%;
      }
      .back{
        margin-right: 30px;
      }
      .bavk-a{

      }
      .back-b{
        margin-left: 30px;
      }
    }
  }

  .content{
    background-image: url('../../assets/og/BG.png');
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
    .content-a{
      margin: 10px 0;
      .hotgame{
        display: flex;
        // width: 70%;
        .el-col{
          background-image: url('../../assets/tk/icons_BG.png');
          background-size: 100% 100%;
          max-width: 21%;
          flex-basis: 21%;
          margin: 5px;
          position: relative;
          a{
            text-decoration:none;
            color: #fff;
          }
          .gameTitle{
            margin: -8px 0px 7px;
            color: #fff;
            font-size: 12px;
            text-align: center;
          }
          .img1{
            position: absolute;
            top: -2px;
            right: -2px;
            width: 45%;
          }
          a img{
            width: 79%;
    margin: -1px 8px;
          }
        }
      }
    }
    .content-b{
      margin: 10px 0;
      .elevengame{
        display: flex;
        flex-wrap: wrap;
        .el-col{
          background-image: url('../../assets/tk/icons_BG.png');
          background-size: 100% 100%;
          max-width: 21%;
          flex-basis: 21%;
          margin: 6px;
          a{
            text-decoration:none;
            color: #fff;
          }
          .gameTitle{
            margin: -8px 0px 7px;
            color: #fff;
            font-size: 12px;
            text-align: center;
          }
          a img{
           width: 73%;
          margin: 2px 11px;
          }
        }      
      }
    }
    .content-c{
      margin: 10px 0;
      .rushgame{
        display: flex;
        flex-wrap: wrap;
        .el-col{
          background-image: url('../../assets/tk/icons_BG.png');
          background-size: 100% 100%;
          max-width: 21%;
          flex-basis: 21%; 
          margin: 6px;     
          a{
            text-decoration:none;
            color: #fff;
          }  
          .gameTitle{
            margin: -8px 0px 7px;
            color: #fffc;
            font-size: 12px;
            text-align: center;
          }
          a img{
             width: 76%;
              margin: 1px 10px;
          }
        }      
      }
    }
   
  }
}

</style>
