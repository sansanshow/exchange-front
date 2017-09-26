<template>
  <div class="content">
    <ui-head :options="headOptions"></ui-head>
    <div class="main">
      <div class="coin-list">
          <div class="coin-item" v-for="i in 10" :key="i">
              人民币
          </div>
      </div>
      <div class="sec-tips">
        <p>当前每日最高可返现2,000,000元</p>
      </div>
      <div class="form mr-t42">
        <div class="form-row">
            <div class="row-label">
                选择银行
            </div>
            <div class="row-field flex">
                <input type="text" class="flex-1" placeholder="请输入真实姓名">
            </div>
            <div class="row-tips">
            
            </div>
        </div>
        <div class="form-row">
            <div class="row-label">
                可提现最大金额
            </div>
            <div class="row-field">
                <div class="max-edu">0元</div>
            </div>
            <div class="row-tips">
                
            </div>
        </div>
        <div class="form-row">
            <div class="row-label">
                提现金额
            </div>
            <div class="row-field flex">
                <input type="text" class="flex-1" placeholder="请输入真实姓名">
            </div>
            <div class="row-tips">
            
            </div>
        </div>
        <div class="form-row">
            <div class="row-label">
                资金密码
            </div>
            <div class="row-field flex">
                <input type="text" class="flex-1" placeholder="请输入真实姓名">
            </div>
            <div class="row-tips">
            
            </div>
        </div>
        <div class="form-row">
            <div class="row-label">
                短信验证码
            </div>
            <div class="row-field flex">
                <input type="text" class="flex-1" placeholder="短信验证码">
                <div class="btn btn-sms">
                  发送验证码
                </div>
            </div>
            <div class="row-tips">
            
            </div>
        </div>
        <div class="form-row">
            <div class="row-label">
                谷歌验证码
            </div>
            <div class="row-field flex">
                <input type="text" class="flex-1" placeholder="请输入真实姓名">
            </div>
            <div class="row-tips">
            
            </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            
          </div>
          <div class="row-field">
            <div class="btn btn-submit">
              确认提现
            </div>
          </div>
          <div class="row-tips">
            
          </div>
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
                title: '提现'
            },
        }
    },
    methods: {
      
    }
}
</script>
<style lang="less" scoped>
.mr-t42{
  margin-top: 42px;
}
.row-field{
  .max-edu{
    line-height: 42px;
    color: #ff5900;
  }
}
</style>


