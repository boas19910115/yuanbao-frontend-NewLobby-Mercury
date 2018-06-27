//------------------------- axios 串接 -------------------------
import {
  webURL
} from '../components/js/tiger_nunu_util/URL.js';
import axios from "axios";

let base = '';

//------------------------- login Info -------------------------
export const login = params => {
  return axios.post(`${base}/yuanbao-backend/lobby/Login.do`, params).then(res => res.data);
};

//------------------------- 取得上線人數 -------------------------
export const getOnlingUser = params => {
  return axios.post(`${base}/yuanbao-backend/lobby/GetOnlingUser.do`, params).then(res => res.data);
};
//------------------------- 取得牛牛房間 -------------------------
export const getRoomSet = params => {
  return axios.post(`${base}/yuanbao-backend/lobby/GetRoomSet.do`, params).then(res => res.data);
};
// http://"+webURL+"/yuanbao-backend/money/GetStoreRecords.do
export const getAddRecord = params => {
  return axios.post(`${base}/yuanbao-backend/money/GetStoreRecords.do`, params).then(res => res);
};