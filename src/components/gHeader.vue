<template>
  <div class="g-header">
        <div class="g-header-top">
            <div class="top-news fix">
                <span class="icon l">

                </span>
                <!-- 行情列表 -->
                <ul class="list">
                    <li>BTC:<span class="up">￥28522.20</span></li>
                    <li>BTC:<span class="down">￥28522.20</span></li>
                    <li>BTC:<span class="up">￥28522.20</span></li>
                </ul>
            </div>
            <div class="wrap1200 fix">
                <div class="language r">
                    <p><img class="lang-icon" src="../assets/images/i-zh.png" alt=""><span class="lang-text">中文</span><img class="lang" src="../assets/images/i-down-arrows.png" alt=""></p>
                </div>
            </div>
        </div>
        <div class="g-header-main">
            <div class="wrap1200 fix wrap">
                <ul class="nav-list fix">
                    <li @click="onTabClick(0)" :class="{'on': tab==0 }"><span>首页</span></li>
                    <li @click="onTabClick(1)" :class="{'on': tab==1 }"><span>交易中心</span></li>
                    <li @click="onTabClick(2)" :class="{'on': tab==2 }"><span>资金管理</span></li>
                    <li v-if="!isLogin">
                        <a href="" @click.prevent="$to({path: '/login'})"><span>登录</span></a>
                        <a href="" @click.prevent="$to({path: '/register'})"><span class="reg">注册</span></a>
                    </li>
                    <li v-else class="loginname" @click="togglePopups">
                        <!-- <span v-text="baseInfo.username"></span><span class="arrows"></span>userInfo -->
                        <span v-text="$store.state.userInfo.username"></span><span class="arrows"></span>
                 
                        <div class="popup" v-if="popup">
                            <!-- 箭头 -->
                            <div class="top-arrows"></div>
                            <div class="auth-info flex">
                                <div class="info flex">
                                    <div class="item"><span class="icon ok"></span><span>手机验证</span></div>
                                    <div class="item"><span class="icon"></span><span>实名认证</span></div>
                                    <div class="item"><span class="icon"></span><span>谷歌验证</span></div>
                                    <div class="item"><span class="icon"></span><span>邮箱认证</span></div>
                                </div>
                                <div class="logout flex-1 t_r">
                                    <span class="btn" @click="logOut">退出登录</span>
                                </div>
                            </div>
                            <div class="assets">
                                <div class="flex all">
                                    <div class="flex-1">
                                        <div class="line">
                                            <span>账户总资产：</span><span>--</span><span>CNY</span>
                                        </div>
                                        <div class="line">
                                            <span>账户总资产：</span><span>--</span><span>CNY</span>
                                        </div>
                                    </div>
                                    <div class="more">
                                        <span class="link">账单明细</span>
                                    </div>
                                </div>
                                <div class="detail flex">
                                    <div class="flex-1">币种</div>
                                    <div class="can">可用</div>
                                    <div class="flex-1">冻结</div>
                                </div>
                                <div class="detail flex">
                                    <div class="flex-1">CNY</div>
                                    <div class="can">0</div>
                                    <div class="flex-1">0</div>
                                </div>
                                <div class="detail flex">
                                    <div class="flex-1">CNY</div>
                                    <div class="can">0</div>
                                    <div class="flex-1">0</div>
                                </div>
                                <div class="btn-groups">
                                    <span class="btn" @click="recharge">充值</span><span class="btn">提现</span>
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
import { mapActions } from 'vuex'
export default {
  name: 'my-header',
  data () {
    return {
      tab: 0,
      popup: true,
      loginStatus: this.isLogin,
      baseInfo: {
          username: null,
          id: null
      }
    }
  },
  created(){
        this.init();
        // if(this.store.getStore('userInfo') && this.store.getStore('_token')){
        //     window.isLogin = true;
        //     this.isLogin = true;
        //     this.init();

        // }else{
        //     window.isLogin = false;
        //     this.isLogin = false;
        // }
      
    },
    methods: {
        ...mapActions([
            'updateUser'
        ]),
        // 初始化
        init(){
            if(this.store.getStore('userInfo') && this.store.getStore('_token')){
                window.isLogin = true;
                this.isLogin = true;
                let user = JSON.parse(this.store.getStore('userInfo'));
                this.baseInfo.id = user.id;
                if(user.mobile){
                    this.baseInfo.username = user.mobile.substr(0,3)+"****"+user.mobile.substr(7);
                }else if(user.email){
                    this.baseInfo.username = user.email;
                }
                this.updateUser(this.baseInfo);
            }else{
                window.isLogin = false;
                this.isLogin = false;
                this.baseInfo = null;
            }
            
        },
        logOut(){
            this.popup = false;
            this.isLogin = false;
            window.isLogin = false;
            this.store.removeAll();
            this.$to({name:'index'});
        },
        togglePopups(){
            // this.popup = !this.popup; 
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
        // 充值
        recharge(){
            console.log('--recharge--updateUser');
            this.updateUser({username: '' + new Date().getTime()});
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
                // display: block;
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
        height: auto;
        background: #fff;
        border: 1px solid #ccc;
        top: 37px;
        right: -46px;
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
                    width: 150px;
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

.g-header-main .nav-list {
    float: right;
}

.g-header-main .nav-list li {
    margin-top: 22px;
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
    width: 50px;
    text-align: center;
    border: 1px solid #0f88ed;
    margin-left: 18px;
    border-radius: 4px;
}

.g-header-main .nav-list li.on {
    color: #0f88ed;
}
</style>

