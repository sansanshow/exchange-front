<template>
  <div class="content security">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    <div class="main">
      <div class="item flex">
        <div class="icon" v-bind:class="{ok : mobileActive}"></div>
        <div class="head">
          <span>手机绑定</span>
        </div>
        <div class="content">
          <span v-if="ismobile" class="btn">{{mobile}}</span>
          <span v-else class="no-auth">未绑定</span>
        </div>
        <div class="btn-wrap">
          <span v-if="ismobile" class="btn" @click="$to({name: 'securityMobile'})">
            修改
          </span>
          <span v-else class="btn">
            绑定
          </span>
        </div>
      </div>

      <div class="item flex">
        <div class="icon ok">

        </div>
        <div class="head">
          <span>登录密码</span>
        </div>
        <div class="content">
          <span>密码强度</span><span class="level weak"></span>
        </div>
        <div class="btn-wrap">
          <span class="btn" @click="$to({name: 'securityResetPwd'})">
            重置密码
          </span>
        </div>
      </div>

      <div class="item flex">
        <div class="icon" v-bind:class="{ok : payActive}">

        </div>
        <div class="head">
          <span>资金安全密码</span>
        </div>
        <div class="content">
          <span>密码强度</span><span class="level middle"></span>
        </div>
        <div class="btn-wrap">
          <span v-if="ispay" class="btn" @click="$to({name: 'securityFundPwd'})">
            重置密码
          </span>
           <span v-else class="btn"  @click="$to({name: 'securityFundPwd'})">
            设置密码
          </span>
        </div>
      </div>

      <div class="item flex">
        <div class="icon"  v-bind:class="{ ok: googleActive}">

        </div>
        <div class="head">
          <span>Google认证</span>
        </div>
        <div class="content">
          <span v-if="isgoogle" class="no-auth">已认证</span>
          <span v-else class="no-auth">未认证</span>
        </div>
        <div class="btn-wrap">
          <span v-if="isgoogle" class="btn"  @click="$to({name: 'securityGoogle'})">
            修改
          </span>
          <span v-else class="btn" @click="$to({name: 'securityGoogle'})">
            去认证
          </span>
        </div>
      </div>

      <div class="item flex">
        <div class="icon" v-bind:class="{ok : emailActive}">

        </div>
        <div class="head">
          <span>邮箱认证</span>
        </div>
        <div class="content">
          <span v-if="isemail" class="no-auth">已认证</span>
          <span v-else class="no-auth">未认证</span>
        </div>
        <div class="btn-wrap">
          <span v-if="isemail"></span>
          <span v-else class="btn">
            去认证
          </span>
        </div>
      </div>

      <!-- 最近登陆 -->
      <div class="login-his">
        <div class="title1">
          最近登录
        </div>
        <table>
          <thead> 
              <tr>
                  <td style="width: 226px;">时间</td>
                  <td>类别</td>
                  <td>IP地址</td>
                  <td>备注</td>
              </tr>

          </thead>
          <tbody>
              <tr v-for="i in 5" :key="i">
                  <td>2017-09-25 11:22:18</td>
                  <td>网页端登录</td>
                  <td><span class="ip">192.168.0.1</span><span class="area">上海</span></td>
                  <td>成功</td>
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
          ispay:false,
          ismobile:false,
          isemail:false,
          isgoogle:false,     //为true标识认证，false表示未认证
          mobileActive:false,
          payActive:false,
          googleActive:false,
          emailActive:false,  //css样式活动标志
          mobile:'',
          headOptions:{
            title: '资产安全',
            sub: '请不要透露短信和谷歌验证码给任何人，包括我们的客服。'
          },
          sendSms:{
            time: 1
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
        _this.mobile = userInfo.mobile.substr(0,3)+"****"+userInfo.mobile.substr(7);
        if(userInfo.validationGoogle=="1"){
          _this.isgoogle=true;
          _this.googleActive=true;
        }
        if(userInfo.validationEmail=="1"){
          _this.isemail=true;
          _this.emailActive=true;
        }
        if(userInfo.validationMobile=="1"){
          _this.ismobile=true;
          _this.mobileActive=true;
        }
        if(userInfo.payPassword!=null){
          _this.ispay=true,
          _this.payActive=true;
        }
      },
      backE(){
        console.log("userIndex");
        this.$to({name: "userIndex"});
      }
    }
}
</script>
<style lang="less" scoped>
@bg: #f2f2f5;
.security{
  padding-bottom: 134px;
  .main{
    padding: 0 34px;
    .item{
      display: flex;
      flex-wrap: nowrap;
      height: 58px;
      font-size: 14px;
      line-height: 58px;
      &:nth-of-type(odd){
        background: @bg;
      }
      .icon{
        width: 54px;
        background-image: url('../../assets/images/icon-no.png');
        background-repeat: no-repeat;
        background-position: right center;
        &.ok{
          background-image: url('../../assets/images/icon-ok.png');
        }
      }
      .head{
        width: 248px;
        height: 20px;
        line-height: 20px;
        margin-top: 18px;
        padding-left: 15px;
        border-right: 1px solid #ccc;
      }
      .content{
        flex:1;
        padding-left: 48px;
        .level{
            margin-left: 10px;
            display: inline-block;
            width: 24px;
            height: 24px;
            font-size: 14px;
            color: #fff;
            line-height: 24px;
            background: #ff0500;
            text-align: center;
            &.weak{
              background: #ff0500;
              &::after{
                content: '弱'
              }
           }
           &.middle{
              background: #3dc18e;
              &::after{
                content: '强'
              }
           }
        }
        .no-auth{
          color:#ff0500;
        }
      }
      .btn-wrap{
        width: 132px;
        line-height: 58px;
        .btn{
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          display: inline-block;
          width: 95px;
          height: 38px;
          color: #0f88ed;
          line-height: 36px;
          border: 1px solid #0f88ed;
          border-radius: 4px;
        }
      }
    }
  }
}
.login-his{  
    margin-top: 50px;
    .title1{
      padding: 20px 0;
      height: 56px;
      height: 24px;
      color: #333;
      font-size: 16px;
    }
    .ip{
      color: #ff0500;
    }
    .area{

    }
}
</style>


