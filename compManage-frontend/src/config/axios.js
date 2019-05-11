'use strict'
import {baseUrl} from './env'
import axios from 'axios'
import qs from 'qs'

let loadingInstance; //创建Loading 的实例
axios.defaults.baseURL = baseUrl; // 配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization



