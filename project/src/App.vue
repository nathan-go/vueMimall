<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import storage from './storage/index';
export default {
    name: 'App',
    mounted() {
        storage.setItem('key1', 1111);
        storage.setItem('level2', 222, 'user');
        console.log(storage.getItem('key1'));
        console.log(storage.getItem('level2', 'user'));
        storage.clear('level2', 'user');
    },
};
</script>

<style></style>
