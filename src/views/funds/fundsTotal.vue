<template>
  <div class="content">
    <div class="main">
      <div class="total">
        账户资产：<span class="num">1823</span><span>CNY</span>
      </div>
      <div class="records">
        <table>
          <thead> 
              <tr>
                  <td>币种</td>
                  <td>可用</td>
                  <td>冻结</td>
                  <td style="width: 272px; text-align: center;">操作</td>
              </tr>

          </thead>
          <tbody>
              <tr v-for="i in 10" :key="i">
                  <td>BTC</td>
                  <td>网页端登录</td>
                  <td><span class="ip">192.168.0.1</span><span class="area">上海</span></td>
                  <td>
                    <span class="recharge btn">充值</span>
                    <span class="deposit btn">提现</span>
                  </td>
              </tr>
          </tbody>
        </table>
      </div>
      <ui-pagination class="pageIndex" @goPage="goPage"></ui-pagination>
    </div>
    
  </div>
</template>
<script>
import UiPagination from '../../components/UiPagination';
export default {
    components:{
      UiPagination,
    },
    data(){
        return {

        }
    },
    methods: {
      goPage(index){
        console.log(index);
      }
    }
}
</script>
<style lang="less" scoped>
.total{
  height: 58px;
  font-size: 16px;
  line-height: 58px;
  .num{
    color: #0f88ed;
    font-size: 22px;
  }
}
.btn{
  display: inline-block;
  width: 68px;
  height: 30px;
  color: #fff;
  line-height: 30px;
  border-radius: 4px;
  &.recharge{
    background: #de211d;
    margin-right: 16px;
  }
  &.deposit{
    background: #3dc18e;
  }
}
.pageIndex{
  margin: 42px 0;
}
</style>


