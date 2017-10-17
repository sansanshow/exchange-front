<template>
  <div class="content">
    <ui-head :options="headOptions"></ui-head>
    <div class="main">
      <div class="verify">
        <div class="verify_title bghui">
          <ul>
            <li>
              <div class="verify_left">
                <div class="icon " :class="{on : denglu}"></div>
                <p>密码登录</p>
                <span>登录51bi的验证方式</span>
              </div>
              <div class="verify_right">
                <p>{{subTitleText.pwdText}}</p>
                <span @click="onModify(0)">更改</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="verify_content" v-if="verifyContentShow[0]">
          <ul>
            <li v-for="(item,index) in pwdOptions" :key="index">
              <p :class="{'colorRed': item.checked}">{{item.content}}</p>
              <span v-html="item.desc"></span>
              <span class="xuanzhe" @click="verify(item.param.mode,item.param.type,0,index)" v-if="!item.checked">选择此项</span>
            </li>
          </ul>
        </div>
        <div class="verify_title" :class="{bghui : verifyContentShow[0]|| verifyContentShow[1] || verifyContentShow[2] }">
          <ul>
            <li>
              <div class="verify_left">
                <div class="icon" :class="{on : jiaoyi}"></div>
                <p>交易验证</p>
                <span>进行人民币现货交易</span>
              </div>
              <div class="verify_right">
                <p>{{subTitleText.tradeText}}</p>
                <span @click="onModify(1)">更改</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="verify_content" v-if="verifyContentShow[1]">
          <ul>
            <li v-for="(item,index) in tradeOptions" :key="index">
              <p :class="{'colorRed': item.checked}">{{item.content}}</p>
              <span v-html="item.desc"></span>
              <span class="xuanzhe" @click="verify(item.param.mode,item.param.type,1,index)" v-if="!item.checked">选择此项</span>
            </li>
          </ul>
        </div>
        <div class="verify_title bghui">
          <ul>
            <li>
              <div class="verify_left">
                <div class="icon" :class="{on : tixian}"></div>
                <p>提现验证</p>
                <span>进行各种提现操作时</span>
              </div>
              <div class="verify_right">
                <p>{{subTitleText.drawText}}</p>
                <span @click="onModify(2)">更改</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="verify_content" v-if="verifyContentShow[2]">
          <ul>
            <li v-for="(item,index) in drawOptions" :key="index">
              <p :class="{'colorRed': item.checked}">{{item.content}}</p>
              <span v-html="item.desc"></span>
              <span class="xuanzhe" @click="verify(item.param.mode,item.param.type,2,index)" v-if="!item.checked">选择此项</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UiHead from '../../components/UiHead';//引入组件
export default {//导出
  components: {//注册
    UiHead
  },
  data() {
    return {
      headOptions: {
        title: '安全策略'//title为安全策略
      },
      denglu: false,//登录策略为false
      jiaoyi: false,//交易策略为false
      tixian: false,//提现策略为false
      pwdOptions: [//把登录块定义为一个数组
        {//里面的每一项都定义出来
          content: "密码登录",//这个是每一块的那个第一项是一个固定的
          checked: false,//这个就是按钮，定义按钮是否为显示状态
          param: { mode: 'login', type: '1' }//参数就是一个是他的属于什么类型，一个是他的id
        },
        {
          content: "密码+Google验证码",
          desc: '（您还未开启Goole认证）',
          checked: false,
          param: { mode: 'login', type: '1-3' }
        }
      ],
      tradeOptions: [//把交易块定义为一个数组
        {
          content: "不需要资金密码",
          checkeds: false,
          param: { mode: 'trade', type: '6' }
        },
        {
          content: "6小时内免输入资金密码",
          checkeds: false,
          param: { mode: 'trade', type: '5' }
        },
        {
          content: "资金密码验证",
          checkeds: false,
          param: { mode: 'trade', type: '4' }
        }
      ],
      drawOptions: [//提现块定义为一个数组
        {
          content: "短信验证+资金密码验证",
          checkeds: false,
          param: { mode: 'draw', type: '2-4' }
        },
        {
          content: "密码+谷歌验证码",
          desc: "您还未开启Goole认证",
          checkeds: false,
          param: { mode: 'draw', type: '3-4' }
        },
        {
          content: "密码+Google验证码+短信验证码（短信/邮件）",
          desc: "您还未开启Goole认证",
          checkeds: false,
          param: { mode: 'draw', type: '2-3-4' }

        }
      ],
      subTitleText: {
        pwdText: '',
        tradeText: '',
        drawText: ''
      },
      verifyContentShow: [false, false, false]//定义一个数组把三个块定义的一个数组里面
    }
  },
  computed:{
    
  },
  created() {
    this.init();//页面加载时执行初始化操作
    
  },
  methods: {
    init() {//初始化方法
      let policyList = JSON.parse(this.store.getStore("policyList"));//声明一个策略函数，将一个字符串转换成一个对象存储到策略函数里面
      for (let i = 0; i < policyList.length; i++) {//使用一个for循环遍历策略列表
        let policy = policyList[i];//获得策略列表的每一个选项
        if (policy.validationMode == "login") {//如果 策略列表里面的这个值为'login'那么执行里面的的方法
          this.denglu = true;//已经登录验证，图标变为选中模式
          this.subTitleText.pwdText = policy.showText;//上面标题也就成为了后台传过来的数据
          if(policy.securityId=="1"){
              this.pwdOptions[0].checked=true;
          }else if(policy.securityId=="1-3"){
              this.pwdOptions[1].checked=true;
          }
        } else if (policy.validationMode == "trade") {//如果 策略列表里面的这个值为'trade'那么执行里面的的方法
          this.jiaoyi = true;//交易
          this.subTitleText.tradeText = policy.showText;
          if(policy.securityId=="6"){
              this.tradeOptions[0].checked=true;
          }else if(policy.securityId=="5"){
              this.tradeOptions[1].checked=true;
          }else if(policy.securityId=="4"){
              this.tradeOptions[2].checked=true;
          }
        } else if (policy.validationMode == "draw") {//如果 策略列表里面的这个值为'draw'那么执行里面的的方法
          this.tixian = true;//提现
          this.subTitleText.drawText = policy.showText;
          if(policy.securityId=="2-4"){
              this.drawOptions[0].checked=true;
          }else if(policy.securityId=="3-4"){
              this.drawOptions[1].checked=true;
          }else if(policy.securityId=="2-3-4"){
              this.drawOptions[2].checked=true;
          }
        }
      }
    },

    //修改验证策略
    verify(mode, type, arrIndex, index) {//查证方法前面两个参数是后台调取过来的，后面两个一个是控制3个大块，一个是控制子块
      let _this = this;
      let param = {
        validmode: mode,
        policyid: type,
      }
      this.$http('setStrategy', param).then(res => {
        if (res.status == 0) {
          if (arrIndex == 0) {//如果选择的是第一个数组
            this.subTitleText.pwdText = this.pwdOptions[index].content;//这个头部文字是这个数组索引的content里面的内容
            this.pwdOptions[index].checked = true; // success这个数组索引的点击就为ture
            this.pwdOptions.forEach((element, i) => {//这个数组遍历每一项
              if (index != i) {
                this.pwdOptions[i].checked = false;
              }
            });
          } else if (arrIndex == 1) {
            this.subTitleText.tradeText = this.tradeOptions[index].content;
            this.tradeOptions[index].checked = true;
            this.tradeOptions.forEach((element, i) => {
              if (index != i) {
                this.tradeOptions[i].checked = false;
              }
            });
          } else if (arrIndex == 2) {
            this.subTitleText.drawText = this.drawOptions[index].content;
            this.drawOptions[index].checked = true;
            this.drawOptions.forEach((element, i) => {
              if (index != i) {
                this.drawOptions[i].checked = false;
              }
            });
          }
          this.store.setStore('policyList', res.dataWrapper.policyList);//更新策略信息
        }
      });
    },
    onModify(index) {
      this.verifyContentShow.forEach((element, i) => {//遍历这个数组
        if (index == i) {//如果点击的是当前的数组
          // this.verifyContentShow[i] = true;
          this.$set(this.verifyContentShow, i, true)//那么这个数组也就是这个块的v-if为true,也就是显示
        } else {
          // this.verifyContentShow[i] = false;
          this.$set(this.verifyContentShow, i, false)//那么其他数组也就是这个块的v-if为false,也就是隐藏
        }
      });
    },
  },
}
</script>
<style scoped>
.icon {
  background: url('../../assets/images/icon-no.png') no-repeat;
  width: 54px;
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 22px;
}

.on {
  background-image: url('../../assets/images/icon-ok.png');
}

.verify ul li {
  height: 60px;
  padding: 0 32px;
  line-height: 60px;
  font-size: 14px;
  color: #000;
}

.verify_title ul li {
  position: relative;
}

.verify_left {
  float: left;
  width: 394px;
  height: 20px;
  line-height: 20px;
  border-right: 1px solid #cccccc;
  margin-top: 20px;
}

.verify_left p {
  display: inline-block;
  padding-left: 32px;
}

.verify_left span {
  color: #999999;
  padding-left: 30px;
}

.verify_right {
  width: 50%;
  float: left;
  height: 20px;
}

.verify_right p {
  display: inline-block;
  color: #ff0401;
  padding-left: 16px;
}

.verify_right span {
  position: absolute;
  right: 30px;
  top: 10px;
  width: 95px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #0e88ed;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  color: #0e88ed;
}

.verify_content ul li {
  border-bottom: 1px solid #f2f2f5;
  position: relative;
}

.verify_content ul li p {
  display: inline-block;
  color: #666666;
}

.verify_content ul li span {
  color: #b6b6b6;
}

.verify_content ul li .xuanzhe {
  position: absolute;
  right: 30px;
  top: 10px;
  width: 95px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #0e88ed;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  background: #0e88ed;
}

.verify_content ul li p.colorRed {
  color: #ff0401;
}

.bgwhite {
  background: #ffffff;
}

.bghui {
  background: #f2f2f5;
}
</style>


