import axios from 'axios';
import {
  webURL,
  PSTiger,
  dateStr
} from '../URL.js'

// const __webURL = "100cares.com";
// const nunuUrl = "http://" + __webURL + "/yuanbao-backend/lobby/GetRoomSet.do";
console.log('webURL', webURL);
const nunuUrl = "/yuanbao-backend/lobby/GetRoomSet.do";

const axQuik = function (url, params, resDo, errDo) {
  axios.post(url, params).then(res => {
    console.log('nunuItemConfig.js_res', res);
    resDo(res);
  }).catch(err => {
    console.log('nunuItemConfig.ks_err', err);
    errDo(err.response);
  })
}

export default function (gameType) {
  console.log('nunuUrl', nunuUrl);
  console.log('webURL', webURL);
  var params = {
    'gameType': gameType,
  };
  axQuik(nunuUrl, params, res => {

    console.log("data.retCode" , res.data.retCode);
    if (res.retCode == "0") {
      console.log('nunuItemConfig_res');
      var arr = [];
      //   for (var i = 0; i < res.data.length; i++) {

      // src = i + 1;
      // $('.content').append(
      //   '<a href="../cowcow/index_' + dateStr + '.html"><div class="col-sm-4">' +
      //   '<div class="inner-img"><img src="/image/lobby/nu' + src + '.png" ></div>' +
      //   '<div class="inner-bottom"><span>' + res.data[i].roomName + '</span>' +
      //   '<div class="lim">上限' + res.data[i].totalLimit + '</div></div></div></a>'
      // )
      //   }
    } else {
      console.log(res.retMsg);
    }

    return res;
  }, err => {
    console.log('GetRoomSet.do 連線失敗', err);
  });
};
