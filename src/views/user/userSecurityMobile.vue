<template>
  <div class="content">
    <ui-head :options="headOptions"></ui-head>
    <div class="main">
      <div class="form mr-t46">
        <div class="form-row">
          <div class="row-label">
            
          </div>
          <div class="row-field">
            <p class="head">-为了你账户安全，请先验证旧手机-</p>
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            原始手机验证码
          </div>
          <div class="row-field flex">
            <input type="text" v-model="page.oldSms" class="flex-1" placeholder="短信验证码">
            <div v-if="!smsText.change.btnDisabled" class="btn btn-sms" @click="sendSms('change')">
              发送验证码
            </div>
            <div v-if="smsText.change.btnDisabled" class="btn btn-sms">{{ smsText.change.time+'秒后获取' }}</div>
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            所在国家
          </div>
          <div class="row-field">
            <div class="country-select"><p>中国</p></div>
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            新手机号
          </div>
          <div class="row-field">
            <div class="zone">
              + 86
            </div>
            <input type="text" v-model="page.newMobile" placeholder="新手机号">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            新手机验证码
          </div>
          <div class="row-field flex">
            <input type="text" v-model="page.newSms" class="flex-1" placeholder="短信验证码">
            <div v-if="!smsText.newmobile2.btnDisabled" class="btn btn-sms" @click="sendSms('newmobile2')">
              发送验证码
            </div>
            <div v-if="smsText.newmobile2.btnDisabled" class="btn btn-sms">{{ smsText.newmobile2.time+'秒后获取' }}</div>
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            
          </div>
          <div class="row-field">
            <div class="btn btn-submit" @click="confirmSubmit">
              确认提交
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
const wait = 5;
export default {
    components:{
      UiHead
    },
    data(){
        return {
            headOptions:{
                title: '绑定新的手机',
                back: '返回安全中心'
            },
            page:{
              oldSms: null,
              newMobile: null,
              newSms: null
            },
            smsText: {
              change: {
                time: wait,
                btnDisabled: false
              },
              newmobile2: {
                time: wait,
                btnDisabled: false
              }
            }
        }
    },
    created(){
      
    },
    methods: {
      backE(){
      },
      sendSms(type){
        let _this = this;
         _this.smsText[type].btnDisabled = true;
        let interval = window.setInterval(function() {
            if ((_this.smsText[type].time--) <= 0) {
                _this.smsText[type].time = wait;
                _this.smsText[type].btnDisabled = false;
                window.clearInterval(interval);
            }
        }, 1000);
        // 
        let param = {
          type:type,
          mobile: this.page.newMobile,
        }
        this.$http('sendVCode',param).then(res => {
          console.log(res);
        });
      },
      confirmSubmit(){
        let param = {
          ocode: this.page.oldSms,
          mobile: this.page.newMobile,
          mcode: this.page.newSms,
          type: 'change'
        }
        this.$http('changeMobile',param).then(res => {
          
        })
      }
    }
}
</script>
<style lang="less" scoped>
.mr-t46{
  margin-top: 46px;
}
.country-select{
  width: 100%;
  background: #f2f2f5;
  p{
    line-height: 42px;
    padding: 0 14px;
  }
}
</style>


