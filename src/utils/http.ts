/**
 * Created by baird on 17/11/15.
 */
'use strict'

import axios from 'axios';
import qs from 'qs';
import store from "../store/index";

axios.interceptors.request.use(config => {
  // loading
  let key = sessionStorage.getItem('key');
  if (key) {
    config.headers.common['key'] = key;
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  let vm = this;
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.data.status === 0) {
      return response.data.data;
    } else if (response.data.status === 1) {
      return response.data.msg;
    }
    return response.data;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  alert('网络有问题，请检查网络');
  location.href = "login";
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg);
    location.href = "login";
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg);
    location.href = "login";
  }
  return res
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      // baseURL: 'http://127.0.0.1:5262',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        let vm = this;
        let model = checkStatus(response);
        if (response.data.status === -1) {
          location.href = "login";
        }
        return model;
      }
      );
  },
  get(url, params) {
    return axios({
      method: 'get',
      // baseURL: 'https://cnodejs.org/api/v1',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
      );
  }
}
