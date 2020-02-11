// 用于测试入口文件
console.log('OK')

// 导入vue资源
import Vue from 'vue'

// 按需导入mint-ui资源
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header);

// 导入mui样式
import './lib/mui/css/mui.min.css'

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(app)
})