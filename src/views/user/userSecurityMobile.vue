<template>
  <div class="content">
    <ui-head :options="headOptions"></ui-head>
    <div class="main">
      <div class="form mr-t46">
        <div v-show="isMobile" class="form-row">
          <div class="row-label">
            
          </div>
          <div class="row-field">
            <p class="head">-为了你账户安全，请先验证旧手机-</p>
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div v-show="isMobile" class="form-row">
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

        <div v-if="isMobile" class="form-row">
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
        <div v-else class="form-row">
          <div class="row-label">
            手机号
          </div>
          <div class="row-field">
            <div class="zone">
              + 86
            </div>
            <input type="text" v-model="page.newMobile" placeholder="手机号">
          </div>
          <div class="row-tips">

          </div>
        </div>

         <div v-if="isMobile" class="form-row">
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
      
        <div v-else class="form-row">
          <div class="row-label">
            手机验证码
          </div>
          <div class="row-field flex">
            <input type="text" v-model="page.newSms" class="flex-1" placeholder="短信验证码">
            <div v-if="!smsText.mbind.btnDisabled" class="btn btn-sms" @click="sendSms('mbind')">
              发送验证码
            </div>
            <div v-if="smsText.mbind.btnDisabled" class="btn btn-sms">{{ smsText.mbind.time+'秒后获取' }}</div>
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            
          </div>
          <div class="row-field">
            <div v-if="isMobile" class="btn btn-submit" @click="confirmSubmit"><!---如果为false执行这个方法，否则执行下面的方法---->
              确认提交
            </div>
            <div v-else class="btn btn-submit" @click="bindMobile">
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
            isMobile:false,
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
                time: wait,//等待时间
                btnDisabled: false//这个按钮是否有事件
              },
              newmobile2: {
                time: wait,
                btnDisabled: false
              },
              mbind:{
                time: wait,
                btnDisabled: false,
              }
            },
        }
    },
    created(){
      this.init();//进入界面后执行此函数，初始化函数
    },
    methods: {
      backE(){//一个返回方法
      },
      init(){//每次渲染页面都要检测一下是否原来绑定过手机，然后是否显示
        let _this = this;
        let userInfo = JSON.parse(this.store.getStore("userInfo"));//声明一个用户信息，然后把json转换为一个对象赋给用户信息
        if(userInfo.validationMobile == '1'){//如果获得的值等于一也就是获取成功
          this.isMobile = true;//那么也就是原来绑定过手机
        }
      },
      sendSms(type){
        let _this = this;//声明一个局域作用的this做区分
         _this.smsText[type].btnDisabled = true;
        let interval = window.setInterval(function() {//声明一个间隔时间，设置一个定时器
            if ((_this.smsText[type].time--) <= 0) {//如果这个里面的一个类型的时间自减小于等于0的话
                _this.smsText[type].time = wait;//这个里面的时间发生变化
                _this.smsText[type].btnDisabled = false;//然后这个按钮就不可点击
                window.clearInterval(interval);//最后自己清除这个方法
            }
        }, 1000);//每秒自减1秒
        // 
        let param = {//定义一个参数
          type:type,//这个类型
          mobile: this.page.newMobile,//这个页面的新的手机？
        }
        this.$http('sendVCode',param).then(res => {//异步调用接口，接口名称为sendVcode,
          console.log(res);//打印一下这个成功的数据
        });
      },
      confirmSubmit(){//确认提交方法
        let param = {//声明参数
          ocode: this.page.oldSms,
          mobile: this.page.newMobile,
          mcode: this.page.newSms,
          type: 'change'
        }
        this.$http('changeMobile',param).then(res => {
          
        })
      },
      bindMobile(){
        let param = {
          mobile:this.page.newMobile,
          mcode:this.page.newSms,
          type:'mbind'
        }
        this.$http('bindAccount',param).then(res =>{
          console.log(res);
          this.store.setStore('userInfo', res.dataWrapper.customerInfo);
          this.store.setStore('policyList', res.dataWrapper.policyList);
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


