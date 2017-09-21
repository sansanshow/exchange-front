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
          <span class="btn">
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
          <span class="btn" @click="$to({path: 'security/pwd'})">
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
          <span class="btn" @click="$to({path: 'security/fundpwd'})">
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
          <span class="btn">
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
          <span class="btn">
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
                  <td>时间</td>
                  <td>类别</td>
                  <td>IP地址</td>
                  <td>备注</td>
              </tr>

          </thead>
          <tbody>
              <tr v-for="i in 5" :key="i">
                  <td>委托时间</td>
                  <td>委托量/已成交(LTC)</td>
                  <td>委托价格/成交均价(CNY)</td>
                  <td>成交总额(CNY)</td>
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
          }
        }
    },
    created(){
      
    },
    methods: {
      backE(){
        console.log(back);
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
}
table{
    width: 100%;
    border-collapse: collapse;
    td{
      height: 56px;
      font-size: 14px;
      color: #666;
      text-align: center;
    }
    thead{
      tr{
        background: #f2f2f5;
        td{
          color: #000;
        }
      }
    }
    tbody{
        tr{
          border-bottom: 1px solid @bg;
          &:nth-of-type(even){
            background: #f2f2f5;
            
          }
          
      }
    }
}
</style>


