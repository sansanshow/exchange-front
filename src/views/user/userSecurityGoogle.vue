<template>
  <div class="content">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    <div class="main">
      <div class="qrcode flex">
        <img class="img" src="../../assets/images/temp/img-qrcode.png" alt="">
        <div class="tips flex-1">
          <p>1,在手机上安装</p>
          <p>1,在手机上安装</p>
          <p>1,在手机上安装</p>
        </div>
      </div>
      <div class="form">
        <div class="form-row">
          <div class="row-label">
            密钥
          </div>
          <div class="row-field">
            <div class="country-select"><p>{{secret}}</p></div>
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            谷歌验证码
          </div>
          <div class="row-field">
            <input v-model="google.token" type="password" placeholder="谷歌验证码">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div v-if="isGoogle" class="form-row"> <!--修改Google时显示-->
          <div class="row-label">
            短信验证码
          </div>
          <div class="row-field flex">
            <input type="text" v-model="google.mcode" class="flex-1" placeholder="短信验证码">
           <div v-if="!smsText.gchange.btnDisabled" class="btn btn-sms" @click="sendSms('gchange')">
              发送验证码
            </div>
            <div v-if="smsText.gchange.btnDisabled" class="btn btn-sms">{{ smsText.gchange.time+'秒后获取' }}</div>
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div v-else class="form-row"> <!--认证Google时显示-->
          <div class="row-label">
            短信验证码
          </div>
          <div class="row-field flex">
            <input type="text" v-model="google.mcode" class="flex-1" placeholder="短信验证码">
           <div v-if="!smsText.gbind.btnDisabled" class="btn btn-sms" @click="sendSms('gbind')">
              发送验证码
            </div>
            <div v-if="smsText.gbind.btnDisabled" class="btn btn-sms">{{ smsText.gbind.time+'秒后获取' }}</div>
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            
          </div>
          <div class="row-field">
            <div v-if="isGoogle" class="btn btn-submit" @click="gupdate"> <!--修改Google时显示-->
              确认提交
            </div>
            <div v-else class="btn btn-submit" @click="gbind"> <!--认证Google时显示-->
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
                title: 'Google认证',
                back: '返回安全中心',
                sub: '',
            },
            isGoogle:false, //标识 false:绑定  true：修改
            qrcodeSrc: '',
            secret:'',//密匙
            google:{
              token:'',
              mcode:''
            },
            smsText: {
              gbind: {//绑定
                time: wait,
                btnDisabled: false
              },
              gchange:{//修改
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
        if(userInfo.googleIdentifier!=null){
          this.isGoogle = true;
          this.headOptions.title = "修改Google认证";
        }
        //谷歌验证密匙二维码生成
        this.$http('gauthGene').then(res =>{
        console.log(res);
        if(res.status == 0){
          this.secret = res.dataWrapper.secret;
          this.qrcodeSrc=res.dataWrapper.qrcode;
          }
        })
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

        let param = {
          type:type,
        }
        this.$http('sendVCode',param).then(res => {
          console.log(res);
        });
      },
      //Google绑定
      gbind(){
        let _this = this;
        let param = {
          secretKey:this.secret,
          mcode:this.google.mcode,
          token:this.google.token
        }
        this.$http('googleBind',param).then(res =>{
          console.log(res);
          if(res.status==0){//绑定成功 更新数据
                this.store.setStore('_token', res.dataWrapper._token);
                this.store.setStore('userInfo', res.dataWrapper.customerInfo);
                this.store.setStore('policyList', res.dataWrapper.policyList);
            }
        })
      },
      //Google修改
      gupdate(){
        let _this = this;
        let param = {
          secretKey:this.secret,
          mcode:this.google.mcode,
          token:this.google.token
        }
        this.$http('googleChange',param).then(res =>{
          console.log(res);
        })
      }
    }
}
</script>
<style lang="less" scoped>
.content{
  padding-bottom: 134px;
  .main{
    padding: 0 34px;
    
  }
}
.qrcode{
  height: 189px;
  box-sizing: border-box;
  border: 1px solid #7dc5ff;
  padding: 12px 42px;
  margin-bottom: 40px;
  margin-top: 20px;
  .img{
    width: 156px;
    height: 156px;
  }
  .tips{
    padding-left: 28px;
    color: #666666;
    line-height: 24px;
  }
}
</style>


