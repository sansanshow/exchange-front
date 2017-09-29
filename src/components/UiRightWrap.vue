<template>
    <div class="content security">
        <ui-head :options="headOptions" @backEvent="backE"></ui-head>
        <div class="main">
             <slot>
                嗖嗖嗖
             </slot>
        </div>
    </div>
</template>
<script>
import UiHead from './UiHead';
export default {
    props:{
        headOptions:{
            type: Object,
            default: () => {
                return {
                    title: '标题'
                };
            }
        }
    },
    components:{
        UiHead
    },
    data(){
        return {

        }
    },
    methods: {
        backE(){
            this.$emit('headBack');
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    padding-bottom: 134px;
    .main{
        padding: 0 34px;
        
    }
}
</style>
