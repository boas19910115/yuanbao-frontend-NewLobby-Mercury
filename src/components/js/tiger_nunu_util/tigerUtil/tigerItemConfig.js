import getDateTime from './getDateTime.js';
import {
  config,
  playArr,
  PSTiger,
  // webURL,
  gamelink1_try,
  gamelink2_try,
  return_url,
  iconPath_front,
  iconPath_end
} from './constVariable.js'
// import URL_js from '@/util/URL.js'



export default function (account) {


  var gamelink1 = PSTiger.API + '/launch/?host_id=' + PSTiger.HostID + '&game_id=';
  var gamelink2 = '&lang=en-US&access_token=' + (typeof account == 'string' ? account : '') + getDateTime() + '&return_url=' + return_url;
  var itemArr = [];

  for (var i = 0; i < config.length; i++) {
    var str = config[i].game_id.substr(10, 2);
    if (playArr.indexOf(str) != -1) {
      var item = {
        icon: iconPath_front + config[i].game_id + iconPath_end,
        title: config[i].game_name['zh-CN'],
        link: gamelink1 + config[i].game_id + gamelink2,
        linkTry: gamelink1_try + config[i].game_id + gamelink2_try,
      };
      itemArr.push(item);
    }
  }

  var itemArrTotal = [];

  for (var i = 0; i < (itemArr.length % 4 != 0 ? itemArr.length / 4 + 1 : itemArr.length / 4); i++) {
    var itemArr4 = [];
    for (var j = i * 4; j < (i + 1) * 4; j++) {
      try {

        itemArr4.push(itemArr[j]);
      } catch (error) {}
    }
    itemArrTotal.push(itemArr4);
  }

  return itemArrTotal;
}
