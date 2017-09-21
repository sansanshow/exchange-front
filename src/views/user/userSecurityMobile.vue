<template>
  <div class="">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    资产安全
  </div>
</template>
<script>
import UiHead from '../../components/UiHead';
export default {
    components:{
      UiHead
    },
    data(){
        return {
            headOptions:{
                title: '绑定新的手机',
                backText: '返回安全中心'
            }
        }
    },
    created(){
      
    },
    methods: {
      backE(){
        console.log(back);
      }
    }
}
</script>
<style lang="less" scoped>

</style>


