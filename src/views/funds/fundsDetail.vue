<template>
 <div class="content">
    <ui-head :options="headOptions"></ui-head>
    <div class="main">
      <div class="conditions">
        <span>币种:</span><span class="cond-item">BTC</span>
        <span>筛选:</span><span class="cond-item">全部</span>
        <span class="recent chked">最近两天</span><span class="recent">两天以前</span>
      </div>
      <div class="records">
        <table>
            <thead> 
                <tr>
                    <td>成交时间</td>
                    <td>类型</td>
                    <td>数量</td>
                    <td>余额</td>
                    <td>手续费</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in 6" :key="i">
                    <td>2017-09-25 11:22:18</td>
                    <td>网页端登录</td>
                    <td><span class="ip">192.168.0.1</span><span class="area">上海</span></td>
                    <td>成功</td>
                    <td>成功</td>
                </tr>
                <tr>
                    <td colspan="5">
                        暂无操作记录
                    </td>
                </tr>
            </tbody>
        </table>
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
                title: '账单明细'
            },

        }
    }
}
</script>
<style lang="less" scoped>
@bg: #f2f2f5;
@main: #0f88ed;
.conditions{
  margin-top: 10px;
  padding-top: 10px;
  font-size: 12px;
  height: 48px;
  span{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    margin-right: 8px;
  }
  .cond-item{
    width: 140px;
    padding: 0 18px; 
    border: 1px solid #ccc;
    background: #f2f2f5;
    background-image: url('../../assets/images/icon-select.png');
    background-repeat: no-repeat;
    background-position: 110px center;
  }
  .recent{
    width: 79px;
    height: 30px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    &.chked{
      border-color: @main;
      color: @main;
    }
  }
}
</style>


