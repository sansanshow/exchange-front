<template>
  <div class="content">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    <div class="main">
      <div class="form mr-t98">
        <div v-show="ispay" class="form-row">
          <div class="row-label">
            原资金密码
          </div>
          <div class="row-field">
            <input v-model="updatefund.oldpaypwd" type="password" placeholder="原资金密码">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div v-if="ispay" class="form-row">
          <div class="row-label">
            新资金密码
          </div>
          <div class="row-field">
            <input v-model="updatefund.newpaypwd" type="password" placeholder="新资金密码">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div v-else class="form-row">
          <div class="row-label">
            资金密码
          </div>
          <div class="row-field">
            <input v-model="setfund.paypwd" type="password" placeholder="资金密码">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div v-if="ispay" class="form-row">
          <div class="row-label">
            确认新资金密码
          </div>
          <div class="row-field">
            <input v-model="updatefund.cfmpaypwd" type="password" placeholder="确认新资金密码">
          </div>
          <div class="row-tips warn">
            请重新输入资金密码
          </div>
        </div>
        <div v-else class="form-row">
          <div class="row-label">
            确认资金密码
          </div>
          <div class="row-field">
            <input v-model="setfund.cfmpwd" type="password" placeholder="确认资金密码">
          </div>
          <div class="row-tips warn">
            请重新输入资金密码
          </div>
        </div>
        <div v-if="ispay" class="form-row">
          <div class="row-label">
            短信验证码
          </div>
          <div class="row-field flex">
            <input type="text" v-model="updatefund.mcode" class="flex-1" placeholder="短信验证码">
            <div v-if="!smsText.pupdate.btnDisabled" class="btn btn-sms" @click="sendSms('pupdate')">
              发送验证码
            </div>
            <div v-if="smsText.pupdate.btnDisabled" class="btn btn-sms">{{ smsText.pupdate.time+'秒后获取' }}</div>
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div v-else class="form-row">
          <div class="row-label">
            短信验证码
          </div>
          <div class="row-field flex">
            <input type="text" v-model="setfund.mcode" class="flex-1" placeholder="短信验证码">
            <div v-if="!smsText.pset.btnDisabled" class="btn btn-sms" @click="sendSms('pset')">
              发送验证码
            </div>
            <div v-if="smsText.pset.btnDisabled" class="btn btn-sms">{{ smsText.pset.time+'秒后获取' }}</div>
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
          </div>
          <div class="row-field">
            <div v-if="ispay" class="btn btn-submit" @click="updatefundpwd('pupdate')">
              确认提交
            </div>
            <div v-else class="btn btn-submit" @click="setfundpwd('pset')">
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
import md5 from 'md5';
const wait = 5;
export default {
    components:{
      UiHead
    },
    data(){
        return {
          ispay:true,   //标识 true:修改 false:设置
          headOptions:{
            title: '重置资金密码',
            back: '返回安全中心'
          },
          updatefund:{
            oldpaypwd:null,
            newpaypwd:null,
            cfmpaypwd:null,
            mcode:null,
          },
          setfund:{
            paypwd:null,
            cfmpwd:null,
            mcode:null,
          },
          smsText: {
              pupdate: {//修改
                time: wait,
                btnDisabled: false
              },
              pset:{//设置
                time: wait,
                btnDisabled: false
              }
            }
        }
    },
    created(){
      this.init();
    },
    methods: {
      init(){
        let _this = this;
        let userInfo =  JSON.parse(_this.store.getStore("userInfo"));
        if(userInfo.payPassword==null){
          this.ispay = false;
          this.headOptions.title='设置资金密码';
        }
      },
      backE(){
        console.log("userIndex");
        this.$to({name: "userIndex"});
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
        }
        this.$http('sendVCode',param).then(res => {
          console.log(res);
        });
      },
      updatefundpwd(type){
        let _this = this;
        let param = {
          oldpassword:md5(this.updatefund.oldpaypwd),
          password:md5(this.updatefund.newpaypwd),
          cfmpwd:md5(this.updatefund.cfmpaypwd),
          mcode:this.updatefund.mcode,
          type:type
        }
        this.$http('setfundpwd',param).then(res =>{
            console.log(res);
        })
      },
      setfundpwd(type){
        let _this = this;
        let param = {
          password:md5(this.setfund.paypwd),
          cfmpwd:md5(this.setfund.cfmpwd),
          mcode:this.setfund.mcode,
          type:type
        }
        this.$http('setfundpwd',param).then(res =>{
            console.log(res);
            if(res.status==0){//绑定成功 更新数据
                this.store.setStore('_token', res.dataWrapper._token);
                this.store.setStore('userInfo', res.dataWrapper.customerInfo);
                this.store.setStore('policyList', res.dataWrapper.policyList);
            }
        })
      }
    }
}
</script>
<style lang="less" scoped>
@bg: #f2f2f5;

.mr-t98{
  margin-top: 98px;
}

.login-his{  
    margin-top: 80px;
    .title1{
      height: 56px;
      height: 24px;
      color: #333;
      font-size: 16px;
    }
}
</style>


