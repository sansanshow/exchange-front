<template>
  <div class="content">
    <ui-head :options="headOptions"></ui-head>
    <div class="main">
      <div class="item flex">
        <div class="head">
          <span>人民币充值/提现短信提醒</span>
        </div>
        <div class="status">
          <span class="has-on">已开启</span>
        </div>
        <div class="btn-wrap">
          <div class="btn off on"></div>
        </div>
      </div>
      <div class="item flex">
        <div class="head">
          <span>异地登录提醒</span>
        </div>
        <div class="status">
          <span class="has-off">已关闭</span>
        </div>
        <div class="btn-wrap">
          <div class="btn off"></div>
        </div>
      </div>
    </div>
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
            title: '通知设置 ',
            sub: '如不需要提醒，可关闭对应按钮'
          }
        }
    }
}
</script>
<style lang="less" scoped>
@bg: #f2f2f5;
.item{
  display: flex;
  flex-wrap: nowrap;
  height: 58px;
  font-size: 14px;
  line-height: 58px;
  &:nth-of-type(odd){
    background: @bg;
  }
  border-bottom: 1px solid @bg; 
  .head{
    width: 248px;
    text-align: center;
    height: 20px;
    line-height: 20px;
    margin-top: 18px;
    padding-left: 15px;
    border-right: 1px solid #ccc;
  }
  .status{
    flex:1;
    padding-left: 48px;
    .has-on{
      color: #34c28d;
    }
    .has-off{
      color: #ff0500;
    }
  }
  .btn-wrap{
    width: 132px;
    
    line-height: 58px;
    .btn{
      height: 58px;
      background: url('../../assets/images/icon-off.png') no-repeat center;
      &.on{
        background: url('../../assets/images/icon-on.png') no-repeat center;
      }
    }
  }
}
</style>





