<template>
  <div class="content">
    <ui-head :options="headOptions"></ui-head>
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
            title: '通知设置 '
          }
        }
    }
}
</script>
<style lang="less" scoped>

</style>





