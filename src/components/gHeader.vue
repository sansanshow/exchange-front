<template>
  <div class="g-header">
        <div class="g-header-top">
            <div class="top-news fix">
                <span class="icon l">

                </span>
                <!-- 行情列表 -->
                <ul class="list">
                    <li v-for="(item,index) in $store.state.assets" :key="index">
                        {{item.name}}:<span :class="{'up':$store.state.socketData[item.code].sort==1,'down':$store.state.socketData[item.code].sort==0}">￥{{$store.state.socketData[item.code].price}}</span>
                    </li>

                </ul>
            </div>
            <div class="wrap1200 fix">
                <div class="language r">
                    <p @click="showLang"><img class="lang-icon" :src="langList[$store.state.langType].icon" alt=""><span class="lang-text">{{ langList[$store.state.langType].name }}</span><img class="lang" src="../assets/images/i-down-arrows.png" alt=""></p>
                    <ul v-if="langShow" class="lang-list">
                        <li v-for="(item,index) in langList" :key="index">
                            <img v-if="index == $store.state.langType" class="icon-slected" :src="iconOk" alt=""><img class="lang-icon" :src="item.icon" alt=""><span class="lang-text" @click="selectLang(item.code,index)">{{item.name}}</span>
                        </li>                        
                        <!-- <li><img class="lang-icon" src="../assets/images/i-zh.png" alt=""><span class="lang-text">中文</span></li>
                        <li><img class="lang-icon" src="../assets/images/i-en.png" alt=""><span class="lang-text">English</span></li> -->
                    </ul>
                </div>
            </div>
        </div>
        <div class="g-header-main">
            <div class="wrap1200 fix wrap">
                <ul class="nav-list fix">
                    <li @click="onTabClick(0)" :class="{'on': tab==0 }"><span>{{$t('message.header_title1')}}</span></li>
                    <li @click="onTabClick(1)" :class="{'on': tab==1 }"><span>{{$t('message.header_title2')}}</span></li>
                    <li @click="onTabClick(2)" :class="{'on': tab==2 }"><span>{{$t('message.header_title3')}}</span></li>
                    <li v-if="$store.state.username == null || $store.state.username == ''">
                        <a href="" @click.prevent="$to({path: '/login'})"><span>{{$t('message.header_login')}}</span></a>
                        <a href="" @click.prevent="$to({path: '/register'})"><span class="reg">{{$t('message.header_register')}}</span></a>
                    </li>
                    <li v-else class="loginname">
                        <!-- <span v-text="baseInfo.username"></span><span class="arrows"></span>userInfo -->
                        <span  @click="togglePopups" v-text="$store.state.username"></span><span class="arrows"></span>

                        <div class="popup">
                            <!-- 箭头 -->
                            <div class="top-arrows"></div>
                            <div class="auth-info flex">
                                <div class="info flex">
                                    <div class="item"><span :class="{'icon ok' : isMobile,'icon' : !isMobile}"></span><span>{{$t('message.header_account_text1')}}</span></div>
                                    <div class="item"><span :class="{'icon ok' : isIdentity,'icon' : !isIdentity}"></span><span>{{$t('message.header_account_text2')}}</span></div>
                                    <div class="item"><span :class="{'icon ok' : isGoogle,'icon' : !isGoogle}"></span><span>{{$t('message.header_account_text3')}}</span></div>
                                    <div class="item"><span :class="{'icon ok' : isEmail,'icon' : !isEmail}"></span><span>{{$t('message.header_account_text4')}}</span></div>
                                </div>
                                <div class="logout flex-1 t_r">
                                    <span class="btn" @click="logOut">{{$t('message.header_loginout_text')}}</span>
                                </div>
                            </div>
                            <div class="assets">
                                <div class="flex all">
                                    <div class="flex-1">
                                        <div class="line">
                                            <span>{{$t('message.header_total_assets')}}：</span><span>{{$store.state.socketData.total}}</span> <span>CNY</span>
                                        </div>
                                        <!--<div class="line">
                                            <span>账户总资产：</span><span>--</span><span>CNY</span>
                                        </div>-->
                                    </div>
                                    <div class="more">
                                        <span class="link">{{$t('message.header_assets_detail')}}</span>
                                    </div>
                                </div>
                                <div class="detail flex">
                                    <div class="flex-1">{{$t('message.header_assets_type')}}</div>
                                    <div class="can h">{{$t('message.header_assets_usable')}}</div>
                                    <div class="flex-1">{{$t('message.header_assets_freeze')}}</div>
                                </div>
                                <div class="detail flex">
                                    <div class="flex-1">CNY</div>
                                    <div class="can">{{$store.state.socketData.cny.usable}}</div>
                                    <div class="flex-1">{{$store.state.socketData.cny.freeze}}</div>
                                </div>
                                <div class="detail flex" v-for="(item,index) in $store.state.assets" :key="index">
                                    <div class="flex-1">{{item.name}}</div>
                                    <div class="can">{{$store.state.socketData[item.code].usable}}</div>
                                    <div class="flex-1">{{$store.state.socketData[item.code].freeze}}</div>
                                </div>
                                <div class="btn-groups">
                                    <span class="btn" @click="recharge">{{$t('message.header_recharge_text')}}</span><span class="btn">{{$t('message.header_draw_text')}}</span>
                                </div>
                            </div>
                        </div>
                   </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import iconZh from '../assets/images/i-zh.png';
import iconEn from '../assets/images/i-en.png';
import iconOk from '../assets/images/icon-ok.png';
export default {
  name: 'my-header',
  data () {
    return {
      tab: 0,
      popup: true,
      langShow: false,
      loginStatus: this.isLogin,
      isMobile:false,
      isIdentity:false ,
      isGoogle:false,
      isEmail:false,
      baseInfo: {
          username: null,
          id: null
      },
      iconOk: iconOk,
      langSelectIndex: 0,
      langList: [
          {name: '中文', icon: iconZh,code: 'zh',chked: true},
          {name: 'English', icon: iconEn,code: 'en'}
      ]
    }
  },
  created(){
        this.init();
        this.initTabIndex();
    },
    methods: {
        ...mapActions([
            'updateUser',
            'updateLangType'
        ]),
        // 初始�?
        init(){
            let locale = this.store.getStore('locale');
            // alert(locale)
            if(locale){
                this.$i18n.locale = locale;
            }else{
                var language = navigator.browserLanguage?navigator.browserLanguage:navigator.language; 
                if(language.indexOf('zh') > -1){
                    locale = 'zh'
                }else{
                    locale = 'en'
                }
                
                this.$i18n.locale = locale;
            }
            this.store.setCookie('locale',locale);
            //更新vuex->langType
            this.langList.forEach( (value, index, array) =>{
                // ...
                if(value.code == locale){
                    this.updateLangType(index);
                }
            });
            // ----end----
                        
            if(!this.store.getCookie('_uname')){
                this.store.removeAll();
            }
            if(this.store.getStore('userInfo') && this.store.getStore('_token')){
                window.isLogin = true;
                this.isLogin = true;
                let user = JSON.parse(this.store.getStore('userInfo'));
                if(user.isAuth==1){
                    this.isIdentity=true;
                }
                if(user.validationMobile==1){
                    this.isMobile=true;
                }
                if(user.validationGoogle==1){
                    this.isGoogle=true;
                }
                if(user.validationEmail==1){
                    this.isEmail=true;
                }
                this.updateUser(user);
            }else{
                window.isLogin = false;
                this.isLogin = false;
                console.log('clearCookie');
                this.store.clearCookie();
                this.updateUser(null);
            }

        },

        logOut(){
            this.$http('loginOut').then(res => {
                window.isLogin = false;
                this.store.removeAll();
                // this.$route
                this.store.clearCookie();
                this.updateUser(null);
                this.$to({name:'index'});
            });
        },
        togglePopups(){
            // this.popup = !this.popup;
            this.tab = 3;
            this.$to({name:'userIndex'});
        },
        onTabClick(index){
            this.tab = index;
            this.popup = false;
            switch(index){
                case 0:
                    this.$to({name:'index'});
                    break;
                case 1:
                    this.$to({name:'trade'});
                    break;
                case 2:
                    this.$to({name:'funds'});
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        },
        // 充�??
        recharge(){
            // console.log('--recharge--updateUser');
            // this.updateUser({username: '' + new Date().getTime()});
        },
        // 
        showLang(){
            this.langShow = !this.langShow;
        },
        // 选择语言
        selectLang(code,index){
            this.$i18n.locale=code;
            this.store.setStore('locale',code);
            this.store.setCookie('locale',code);
            // this.langSelectIndex = index;
            this.updateLangType(index);
            this.langShow = false;
            location.reload();
        },
        initTabIndex(){
            let path = this.$route.path;
            if(path.indexOf('funds') > -1){ // 资金
                this.tab = 2;
            } else if(path.indexOf('user') > -1){ // 用户中心
                this.tab = 3;
            }else if(path.indexOf('trade') > -1){
                this.tab = 1;
            }else{
                this.tab = 0;
            }
        }
    },
    watch:{
        loginStatus(val){
            console.log('-isLogin-' + val);
            this.init();
        }
    }
}
</script>
<style lang="less">
@main: #f2f2f5;
.g-header-main .wrap{
    .loginname{
        position: relative;
        color: #0f88ed;
        .arrows{
            margin: 4px 0 0 6px;
            vertical-align: middle;
            display: inline-block;
            border: 6px solid transparent;
            border-top-color: #0f88ed;
        }
        &:hover{
            .popup{
                // opacity: 1;
                // height: auto;
                display: block;

            }
        }
    }

    // position: relative;
    .popup{
        display: none;
        position: absolute;
        box-sizing: border-box;
        padding: 10px 0;
        position: absolute;
        width: 390px;
        background: #fff;
        border: 1px solid #ccc;
        top: 58px;
        right: -46px;
        height: auto;
        color: #333;
        // opacity: 0;
        transition: opacity 0.8 ease-out;
        .top-arrows{
            position: absolute;
            top: -8px;
            transform: rotate(45deg);
            right: 80px;
            width: 12px;
            height: 12px;
            background: #fff;
            z-index: 6;
            border-top: 1px solid #ccc;
            border-left: 1px solid #ccc;
        }
        .auth-info{
            padding: 4px 10px;
            border-bottom: 1px solid @main;
            .info{
                display: flex;
                flex-wrap: wrap;
                width: 220px;
                .item{
                    height: 26px;
                    line-height: 26px;
                    width: 105px;
                    .icon{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        vertical-align: middle;
                        margin-right: 8px;
                        background-image: url('../assets/images/icon-no.png');
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-size: 100%;
                        &.ok{
                            background-image: url('../assets/images/icon-ok.png');
                        }
                    }
                }
            }
            .logout{
                overflow: hidden;
                min-width: 150px;
                padding-top: 12px;
                .btn{
                    display: inline-block;
                    text-align: center;
                    width: 80px;
                    height: 26px;
                    font-size: 12px;
                    color: #666666;
                    line-height: 26px;
                    border-radius: 13px;
                    border: 1px solid #ccc;
                }
            }
        }
        .assets{
            color: #333;
            .all{
                padding: 4px 10px;
                line-height: 26px;
                .line{
                    height: 26px;

                }

            }
            .detail{
                height: 28px;
                line-height: 28px;
                &:nth-child(even){
                    background: @main;
                }
                .flex-1{
                    text-align: center;
                }
                .can{
                    text-align: center;
                    color: #de211d;
                    width: 150px;
                    &.h{
                        color: #333;
                    }
                }
            }
        }
        .btn-groups{
            text-align: center;
            padding: 27px 0;
            .btn{
                cursor: pointer;
                display: inline-block;
                height: 32px;
                line-height: 32px;
                width: 106px;
                text-align: center;
                background: #de211d;
                color: #fff;
                border-radius: 4px;
                &:last-child{
                    margin-left: 32px;
                    background: #3dc18e;
                }
            }
        }
    }
}
.g-header {
    height: 105px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    background: #fff;
    box-shadow: 0 2px 3px #ccc;
}

.g-header-top {
    height: 35px;
    line-height: 35px;
    min-width: 1200px;
    background: #2e3033;
    position: relative;
}

.g-header-top .top-news {
    font-size: 12px;
    max-width: 1000px;
    overflow: hidden;
    height: 35px;
    position: absolute;
    left: 0;
    top: 0;
}

.g-header-top .top-news .icon {
    width: 14px;
    height: 35px;
    margin-left: 20px;
    margin-right: 12px;
    background: url('../assets/images/icon-g-top.png') no-repeat center;
}

.g-header-top .top-news .list {
    float: left;
}

.g-header-top .top-news .list li {
    float: left;
    margin-right: 22px;
    color: #999999;
}

.g-header-top .top-news .down {
    color: #3dc18e;
}

.g-header-top .top-news .down::after {
    display: inline-block;
    margin-left: 4px;
    content: '';
    width: 12px;
    height: 12px;
    background: url('../assets/images/i-down.png') no-repeat center;
}

.g-header-top .top-news .up {
    color: #de211d;
}

.g-header-top .top-news .up::after {
    display: inline-block;
    margin-left: 4px;
    content: '';
    width: 12px;
    height: 12px;
    background: url('../assets/images/i-up.png') no-repeat center;
}

.g-header-top .language {
    width: 160px;
    height: 35px;
}

.g-header-top .lang-icon {
    vertical-align: middle;
    width: 20px;
}

.g-header-top .lang-text {
    display: inline-block;
    margin: 0 8px;
    vertical-align: middle;
    color: #fff;
}

.g-header-top .lang {
    vertical-align: middle;
    width: 12px;
}

.g-header-top .language p {
    text-align: right;
}
.g-header-top{
    .language{
        position: relative;
        .lang-list{
            box-sizing: border-box;
            width: 100%;
            color: #333;
            padding-right: 10px;
            position: absolute;
            background: #f2f2f5;
            text-align: right;
            border: 1px solid #ccc;
            z-index: 8;
            right: 0px;
            li{
                cursor: pointer;
                .lang-text{
                    width: 48px;
                    color: #333;
                }
                .icon-slected{
                    vertical-align: middle;
                    width: 16px;
                    margin-right: 16px;
                }
            }
        }
    }
} 
.g-header-main .nav-list {
    float: right;
}

.g-header-main .nav-list li {
    padding: 22px 0;
    line-height: 26px;
    float: left;
    margin-right: 45px;
    font-size: 14px;
    /*color: #0f88ed;*/
    color: #666;
}

.g-header-main .nav-list li span {
    cursor: pointer;
}

.g-header .reg {
    display: inline-block;
    width: 56px;
    text-align: center;
    border: 1px solid #0f88ed;
    margin-left: 18px;
    border-radius: 4px;
}

.g-header-main .nav-list li.on {
    color: #0f88ed;
}
</style>
