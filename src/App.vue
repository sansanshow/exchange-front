<template>
<div class="mwrap">
    <g-header v-if="header"></g-header>
    <router-view>

    </router-view>
    <g-footer></g-footer>
</div>
</template>
<script>
export default {
    components:{
       
    },
    name: 'app',
    data(){
        return {
            msg: ''
        }
    },
    created(){

    },
    methods: {
    }
}
</script>

<style lang="less">
@import './style/common';
.mwrap{
    height: 100%;
}
</style>
