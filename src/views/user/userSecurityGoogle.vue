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
            <input type="text" placeholder="密钥">
          </div>
          <div class="row-tips">

          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            谷歌验证码
          </div>
          <div class="row-field">
            <input type="password" placeholder="谷歌验证码">
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
                title: 'Google认证',
                back: '返回安全中心',
                sub: '',
            },
            qrcodeSrc: ''
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


