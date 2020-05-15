import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.config.productionTip = false;

// 根据前端的跨域方式我们来做调整
/**
 * 如果我们使用了的是接口代理的话：
 * （接口代理就是：当前的域名和我们前端的接口是一样的）
 * 那么我们的baseURL其实就是/api,我们统一处理了接口
 *
 * /a/b => /api/a/b => /a/b
 * 目前/api的方式就是接口代理
 * timeout必须这是，不然用户体验非常的差
 */
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function(response) {
    // 出口拦截
    let res = response.data;
    if (res.status === 0) {
        // 表示状态成功
        return res.data;
    } else if (res.status == 10) {
        // 业务码，这里10表示没有登录
        // 没有登录的设置是：我们到登录页面
        // 使用了不了router,因为router是在vm里面，这里还没有vm的
        window.location.href = '/#/login';
    } else {
        // 错误代码，我们其实需要统一处理，但是在这里我们先
        // 接口错误拦截
        alert(res.msg);
    }
});

Vue.use(VueAxios, axios);
new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app');
