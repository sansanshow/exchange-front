<template>
    <div class="content security">
        <header>
            <slot name="header"></slot>
        </header>
        <div class="main">
             <slot>
                
             </slot>
        </div>
    </div>
</template>
<script>
import UiHead from './UiHead';
export default {
    components:{
        UiHead
    },
    data(){
        return {

        }
    },
    methods: {
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
