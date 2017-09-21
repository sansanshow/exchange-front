<template>
  <div class="content">
    <ui-head :options="headOptions" @backEvent="backE"></ui-head>
    <div class="main">
      <div class="form mr-t98">
        <div class="form-row">
          <div class="row-label">
            原始密码
          </div>
          <div class="row-field">
            <input type="password" placeholder="原始密码">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            新登录密码
          </div>
          <div class="row-field">
            <input type="password" placeholder="新登录密码">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            确认新登录密码
          </div>
          <div class="row-field">
            <input type="password" placeholder="确认新登录密码">
          </div>
          <div class="row-tips">
            确认新登录密码
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
            
          </div>
          <div class="row-field">
            <div class="btn btn-submit">
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
export default {
    components:{
      UiHead
    },
    data(){
        return {
          headOptions:{
            title: '重置登录密码',
            back: '返回安全中心'
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
@warn:#de211d;
@success:#3dc18e;
.content{
  padding-bottom: 134px;
  .main{
    padding: 0 34px;
    
  }
}
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


