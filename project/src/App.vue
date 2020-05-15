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
    },
};
</script>

<style></style>
