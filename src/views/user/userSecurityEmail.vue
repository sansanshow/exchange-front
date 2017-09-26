<template>
  <div class="">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    邮箱认证
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
                title: '邮箱认证',
                sub: '',
            }
        }
    },
    created(){
      
    },
    methods: {
      backE(){
        console.log('邮箱认证');
        
        console.log("userIndex");
        this.$to({name: "userIndex"});
      }
    }
}
</script>
<style lang="less" scoped>

</style>


