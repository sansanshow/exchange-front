<template>
  <div class="">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    Google认证
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
                title: 'Google认证',
                sub: '',
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


