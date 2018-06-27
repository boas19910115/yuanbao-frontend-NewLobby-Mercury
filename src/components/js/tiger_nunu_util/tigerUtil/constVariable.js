import tigerPathConfig from './tigerPathConfig.js';
import {webURL,PSTiger,dateStr} from '../URL.js'

const config = tigerPathConfig;
const playArr = ['19', '25', '09', '44', '65', '05', '17', '15', '81', '35', '73', '33', '16', '34', '29',
  '38', '66', '01', '26', '28'
];
// const PSTiger = {
//   API: 'STiger.API',
//   HostID: 'STiger.HostID'
// }
// const webURL = 'webURL';
const return_url = 'http://' + webURL + '/lobby/tiger.html';

const gamelink1_try = 'https://download-bk.iplaystar.net/';
const gamelink2_try = '/?access_token=(*--)f2c9420c364a6998538de18a9859ede0&lang=eng&ccy=NON&sm=00&subid=0&fullscr=1&lc=en-US&pm=1&ns=0&origin=https%3a%2f%2fpsapi.iplaystar.net&radar=1&lb=0&return_url=' + return_url;
// const iconPath_front = '/static/tigerIcons/';
const iconPath_front = '/lobby/static/tigerIcons/';
const iconPath_end = '.png';

export {
  config,
  playArr,
  PSTiger,
  //   webURL,
  gamelink1_try,
  gamelink2_try,
  return_url,
  iconPath_front,
  iconPath_end
}
