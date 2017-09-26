<template>
  <div class="content security">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    <div class="main">
      <div class="item flex">
        <div class="icon ok"></div>
        <div class="head">
          <span>手机绑定</span>
        </div>
        <div class="content">
          +86 186*****123
        </div>
        <div class="btn-wrap">
          <span class="btn" @click="$to({name: 'securityMobile'})">
            修改
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
        <div class="icon ok">

        </div>
        <div class="head">
          <span>资金安全密码</span>
        </div>
        <div class="content">
          <span>密码强度</span><span class="level middle"></span>
        </div>
        <div class="btn-wrap">
          <span class="btn" @click="$to({name: 'securityFundPwd'})">
            重置密码
          </span>
        </div>
      </div>

      <div class="item flex">
        <div class="icon">

        </div>
        <div class="head">
          <span>Google认证</span>
        </div>
        <div class="content">
          <span class="no-auth">未认证</span>
        </div>
        <div class="btn-wrap">
          <span class="btn" @click="$to({name: 'securityGoogle'})">
            去认证
          </span>
        </div>
      </div>

      <div class="item flex">
        <div class="icon">

        </div>
        <div class="head">
          <span>邮箱认证</span>
        </div>
        <div class="content">
          <span class="no-auth">未认证</span>
        </div>
        <div class="btn-wrap">
          <span class="btn" @click="$to({name: 'securityGoogle'})">
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
      
    },
    methods: {
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


