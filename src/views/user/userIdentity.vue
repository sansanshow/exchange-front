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
        <div class="form-row" style="overflow: visible;">
          <div class="row-label">
            国籍
          </div>
          <div class="row-field" style="overflow: visible;">
            <div class="country-select">
              <p class="showSelect" v-html="countrySelect.name" @click.stop="onClickSelect"></p>
              <ul v-if="$store.state.rootClick.countryShow" class="country-list">
                <li @click.stop="changeIdCountryList(true)"><input class="search-input" type="text" placeholder="搜索"></li>
                <li class="item" v-for="(item, index) in countryList" :key="index" data-val="item.code" v-html="item.name" @click.stop="doSelect(index, item.code)"></li>
              </ul>
            </div>
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
              <input type="file" accept="image/png,image/gif,image/jpeg" name="pic" id="sfz1" class="file-upload" @change="upLoad($event,'H')">
              <img class="preview" :src="imgSrc.hand" alt="">
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
              <input type="file" id="sfz2" name="pic" class="file-upload" @change="upLoad($event,'F')">
              <img class="preview" :src="imgSrc.front" alt="">
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
              <input type="file" id="sfz3" name="pic" class="file-upload" @change="upLoad($event,'B')">
              <img class="preview" :src="imgSrc.back" alt="">
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
import country from '../../utils/country-list';
import { mapActions } from 'vuex';
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
          },
          param:{
            frontPhoto:'',
            backPhoto:'',
            handPhoto:''
          },
          countryList: country,
          countrySelect: {
            name: '--请选择国籍--',
            code: 0,
            show: false
          },
          imgSrc:{
            front:'',
            hand:'',
            back:''
          }
        }
    },
    created(){

    },
    methods: {
      ...mapActions([
        'changeIdCountryList'
      ]),
      toggleCheck(){
        this.allow = !this.allow;
      },
      upLoad(e,type){
        // let file = document.getElementById('sfz1').files[0];    
        let file = e.target.files[0];     
        let param = new FormData(); //创建form对象
        param.append('file',file);//通过append向form对象添加数据
        param.append('type',type);
        // param.append('chunk','0');//添加form表单中其他数据
        // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          // headers:{'Content-Type':'multipart/form-data'}
        };  //添加请求头
        this.$http('fileUpload', param).then(res => {
            if(res.status==0){
              if(type=='F'){
                this.param.frontPhoto = res.dataWrapper.filePathName;
                //this.imgSrc.front=res.dataWrapper.filePathName; //上传后图片显示
              }else if(type=='H'){
                this.param.handPhoto = res.dataWrapper.filePathName;
                //this.imgSrc.hand=res.dataWrapper.filePathName; //上传后图片显示
              }else if(type=='B'){
                this.param.backPhoto = res.dataWrapper.filePathName;
                //this.imgSrc.back=res.dataWrapper.filePathName; //上传后图片显示
              }
            }
        });
      },
      onSubmit(){
        let param = {
          realname: this.page.realname || '',
          type: 'idcard',
          code: this.page.code || '',
          photoBack:this.param.backPhoto,
          photoFront:this.param.frontPhoto,
          photoHand:this.param.handPhoto,
        }
        this.$http('identify',param).then(res => {
            console.log(res);
        });
      },
      onClickSelect(){
        this.changeIdCountryList(true);
        // this.countrySelect.show = !this.countrySelect.show;        
      },
      doSelect(index,code){
        // this.countrySelect = Object.assign({},this.countryList[index]);
        this.countrySelect.name = this.countryList[index].name;
        this.countrySelect.code = this.countryList[index].code;
        this.changeIdCountryList(false);
      }
    }
}
</script>
<style lang="less" scoped>
.country-select{
  position: relative;
  .showSelect{
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #d6d6d6;
  }
  .country-list{
    position: absolute;
    z-index: 1;
    max-height: 294px;
    width: 100%;
    overflow-y: scroll;
    background: #fff;
    border: 1px solid #d6d6d6;
    li{
      padding: 0 14px;
      // border-bottom: 1px solid #d6d6d6;
      line-height: 42px;
      .search-input{
        height: 42px;
        border: 1px solid #d6d6d6;
      }
      &.item:hover{
        background: #f2f2f5;
      }
    }
  }
}
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


