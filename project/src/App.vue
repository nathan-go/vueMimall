<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import storage from './storage/index';
export default {
    name: 'App',
    data() {
        return {
            res: '',
        };
    },
    mounted() {
        storage.setItem('key1', 1111);
        // this.axios.get('/mock/user.json').then((res) => {
        //     this.res = res;
        //     console.log(this.res);
        // }); 方式1： 本地加载请求静态资源

        // 方式2： 调用easy-mock

        // 方式3： 集成mockjs api
        this.axios.get('/user/login').then((res) => {
            this.res = res;
            console.log(JSON.stringify(this.res));
        });
    },
};
</script>

<style></style>
