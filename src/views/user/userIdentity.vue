<template>
  <div class="content">
    <ui-head :options="headOptions"></ui-head>
    <div class="main">
      <div class="prompt">
        <p>为了您的资金安全，需要验证你的身份</p>
        <p>平台仅支持18至60周岁的人</p>
        <p>因提供虚假信息造成</p>
      </div>
      <div class="form mr-t46">
        <div class="form-row">
          <div class="row-label">
            姓名
          </div>
          <div class="row-field flex">
            <input type="text" v-model="page.realname" class="flex-1" placeholder="请输入真实姓名">
          </div>
          <div class="row-tips">
           
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            国籍
          </div>
          <div class="row-field">
            <div class="country-select"><p>中国(China)</p></div>
          </div>
          <div class="row-tips">
            
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            身份证号
          </div>
          <div class="row-field">
            <input type="text" v-model="page.code" placeholder="请输入本人身份证号">
          </div>
          <div class="row-tips">
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
           手持身份证正面
          </div>
          <div class="row-field">
            <div class="upload">
              <input type="file" accept="image/png,image/gif,image/jpeg" name="pic" id="sfz1" class="file-upload" @change="upLoad($event,1)">
              <img class="preview" src="" alt="">
              <span class="add"></span>
              <div class="desc">手持身份证正面</div>
            </div>
            <div class="example">
              
            </div>
          </div>
          <div class="row-tips">
            <div class="spec-tips">
              <p class="t">示例</p>
              <p class="text">保证文字清晰可识别</p>
              <p class="text">图片大小不要超过1MB</p>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
           身份证正面
          </div>
          <div class="row-field">
            <div class="upload">
              <input type="file" id="sfz2" name="pic" class="file-upload">
              <span class="add"></span>
              <div class="desc">身份证正面</div>
            </div>
            <div class="example">
              
            </div>
          </div>
          <div class="row-tips">
            <div class="spec-tips">
              <p class="t">示例</p>
              <p class="text">保证文字清晰可识别</p>
              <p class="text">图片大小不要超过1MB</p>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
           身份证反面
          </div>
          <div class="row-field">
            <div class="upload">
              <input type="file" id="sfz3" name="pic" class="file-upload">
              <span class="add"></span>
              <div class="desc">身份证反面</div>
            </div>
            <div class="example">
              
            </div>
          </div>
          <div class="row-tips">
            <div class="spec-tips">
              <p class="t">示例</p>
              <p class="text">保证文字清晰可识别</p>
              <p class="text">图片大小不要超过1MB</p>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="allow" @click="toggleCheck">
            <span class="unchk" :class="{'chked': allow}"></span> 我承诺所提供的资料为我本人所有，不存在盗用别人资料的情况
          </div>
        </div>
        <div class="form-row">
          <div class="row-label">
            
          </div>
          <div class="row-field">
            <div class="btn btn-submit" @click="onSubmit">
              提交
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
            title: '个人用户认证'
          },
          allow: false,
          page: {
            realname: '',
            type: 'idcard',
            code:''
          }
        }
    },
    created(){
      let a = {
        b: {
          b1: 'b1',
          b2: 'b2',
          b3: 'b3'
        }
      }
      let c = Object.assign(a,{
        b: {
          b4: 'b4'
        }
      })
      console.log(c);
    },
    methods: {
      toggleCheck(){
        this.allow = !this.allow;
      },
      upLoad(e,type){
        // let file = document.getElementById('sfz1').files[0];    
        let file = e.target.files[0];
        console.log(e.target.files[0]);       
        let param = new FormData(); //创建form对象
        param.append('file',file);//通过append向form对象添加数据
        // param.append('chunk','0');//添加form表单中其他数据
        // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          // headers:{'Content-Type':'multipart/form-data'}
        };  //添加请求头
        this.$http('fileUpload', param).then(res => {

        });
      },
      onSubmit(){
        let param = {
          realname: this.page.realname || '',
          type: 'idcard',
          code: this.page.code || ''
        }
        this.$http('identify',param).then(res => {

        });
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
.prompt{
  font-size: 14px;
  line-height: 24px;
  padding-top: 24px;
  padding-bottom: 44px;
  color: #666;
}
.upload{
  box-sizing: border-box;
  position: relative;
  width: 174px;
  height: 174px;
  border: 1px dotted #d6d6d6;
  .file-upload{
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    height: 134px;
    border: none;
    z-index: 2;
    opacity: 0;
  }
  .add{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 134px;
    background-image: url('../../assets/images/icon-add-file.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  .desc{
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    // top: 134px;
    bottom: 0;
    text-align: center;
    line-height: 40px;
    background: #f2f2f5;
  }
}
.example{
    width: 174px;
    height: 174px;
    background: #d6d6d6;
  }

.spec-tips{
  margin-top: 60px;
  font-size: 14px;
  .t{
    color: #333;
    margin-bottom: 16px;
    line-height: 1;
  }
  .text{
    font-size: 14px;
    line-height: 20px;
    color: #666;
  }
}
.allow{
  margin-left: 286px;
  .unchk{
    vertical-align: middle;
    display: inline-block;
    width: 18px;
    height: 17px;
    background: url('../../assets/images/icon-no.png') no-repeat center;
  }
  .chked{
     background-image: url('../../assets/images/icon-ok.png');
  }
}
</style>


