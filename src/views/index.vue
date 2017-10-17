<template>
    <div class="container">
       <div class="i-banner">
            <div class="wrap1200 fix">
                <div class="i-login-info r" v-if="$store.state.isLogin">
                    <div class="uname">{{$t('message.welcome_text')}}，{{$store.state.username}}</div>
                    <div class="info">
                        <div class="flex">
                            <div class="left">
                                {{$t('message.net_assets_text')}}:
                            </div>
                            <div class="flex-1">
                                CNY:￥{{$store.state.socketData.total}}
                            </div>
                        </div>
                        <div class="flex">
                            <div class="left">
                                {{$t('message.total_assets_text')}}: 
                            </div>
                            <div class="flex-1">
                                 CNY:￥{{$store.state.socketData.total}}
                            </div>
                        </div>
                        <div class="flex curr">
                            <div class="left">
                                {{$t('message.usable_assets_text')}}:
                            </div>
                            <div class="flex-1">
                                <p>
                                    <span>CNY:</span>
                                    <span>{{ $store.state.socketData.cny.usable }}</span>
                                </p>
                                <p v-for="(item,index) in $store.state.assets" :key="index">
                                    <span>{{item.name}}:</span>
                                    <span>{{$store.state.socketData[item.code].usable}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <div class="btn" @click="$to({name: 'trade'})">
                            {{$t('message.home_link_text')}}
                        </div>
                    </div>
                </div>
                <div class="i-login-form r" v-else>
                    <h2 class="i-form-title">{{ $t('message.login_title_text') }}</h2>
                    <div class="i-form-field">
                        <input type="text" v-model="loginParam.username" :placeholder="$t('message.mobile_text')">
                    </div>
                    <div class="i-form-field">
                        <input type="password" v-model="loginParam.password" :placeholder="$t('message.pwd_text')">
                    </div>
                    <div class="i-form-field fix" style="padding-top: 6px;">
                        <!--<a class="l" href="">验证码登录</a>-->
                        <a class="r" href="">{{$t('message.forgot_pwd_text')}}</a>
                    </div>
                    <div class="i-form-field">
                        <button class="login-btn" @click="login">{{$t('message.login_text')}}</button>
                    </div>
                    <div class="i-form-field txt-fff" style="padding-top: 4px;">
                        <span>{{$t('message.noaccount_title')}}&nbsp;&nbsp;</span>
                        <a class="a-line" @click="$to({path:'/sign/reg'})">{{$t('message.register_title')}}</a>
                    </div>
                </div>

            </div>
        </div>
        <!-- 动态 -->
        <div class="i-current">
            <div class="i-current-head">
                <div class="wrap1200 fix">
                    <div class="news l">
                        <span class="news-icon"></span><span>最新动态：关于开放ETH兑BTC的公告</span>
                    </div>
                    <div class="more r">
                        <a href="">{{$t('message.more_text')}}&nbsp;&gt;</a>
                    </div>
                </div>
            </div>
            <div class="wrap1200 details">
                <div class="i-title">
                    <div class="head-outer center">
                        <h2>{{$t('message.home_page_title1')}}</h2>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <div class="details-table">
                    <div class="head flex">
                        <div class="flex-1">{{$t('message.market')}}</div>
                        <div class="flex-1">{{$t('message.latest_price')}}</div>
                        <div class="flex-1">{{$t('message.change_24hr')}}</div>
                        <div class="flex-1">{{$t('message.high_24hr')}}</div>
                        <div class="flex-1">{{$t('message.low_24hr')}}</div>
                        <div class="flex-1">{{$t('message.volume_24hr')}}</div>
                    </div>
                    <div class="body">
                        <div class="item flex" v-for="(item,index) in $store.state.assets" :key="index" :class="{'up': $store.state.socketData[item.code].sort==1,'down': $store.state.socketData[item.code].sort==0}">
                            <div class="flex-1">{{item.name}}</div>
                            <div class="flex-1 lasted">{{$store.state.socketData[item.code].price}}</div>
                            <div class="flex-1 range">{{$store.state.socketData[item.code].range}}</div>
                            <div class="flex-1">{{$store.state.socketData[item.code].maxPrice}}</div>
                            <div class="flex-1">{{$store.state.socketData[item.code].minPrice}}</div>
                            <div class="flex-1">{{$store.state.socketData[item.code].volume}}</div>
                        </div>
                    </div>
                </div>



                <!-- <ul class="coin-nav fix">
                    <li v-for="(item,index) in $store.state.assets" :key="index" class="nav" :class="{ 'on' : tab==index }" @click="onTab(index,item.code)">{{item.name}}</li>
                </ul>
                <div class="c-details flex">
                    <div class="item">
                        <div class="item-title">最新</div>
                        <div class="item-data">
                            {{$store.state.socketData[asset+'Price']}}
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">今日涨幅</div>
                        <div class="item-data">
                            {{$store.state.socketData[asset+'Range']}}
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">今日最高</div>
                        <div class="item-data">
                            {{$store.state.socketData[asset+'MaxPrice']}}
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">今日最低</div>
                        <div class="item-data">
                            {{$store.state.socketData[asset+'MinPrice']}}
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">24小时成交量</div>
                        <div class="item-data">
                            {{$store.state.socketData[asset+'Volume']}}
                        </div>
                    </div>
                </div>-->
                <!-- charts 
                <div id="index-chart" class="d-chart"></div>
                -->
                <div class="btn-wrap center">
                    <a class="btn">{{$t('message.home_link_text1')}}&nbsp;&gt;</a>
                </div>
            </div>
        </div>
        <!--最新资讯-->
        <div class="i-news">
            <div class="wrap1200 zixun">
                <div class="i-title">
                    <div class="head-outer center">
                        <h2>{{$t('message.home_page_title2')}}</h2>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <!-- news detail -->
                <div class="content fix">
                    <div class="text l">
                        <div class="line flex">
                            <div class="left">
                                8:14
                            </div>
                            <div class="flex-1 right">
                                <h3>这是一个标题</h3>
                                <p>
                                    生产线上，一排女工抓取电子元器件，插到电路板里面去，在背后做个焊接固定。你可以看到，那些元器件都很粗，电路板也很大。但是，在摩尔定律的驱动下，不仅芯片的生产工艺密度越来越高，电路板同样在升级换代。精密度要求越来越高，元器件做的越来越小。这样的电子元器件，如果胡乱的放到一个袋子里，很容易就会被损坏。
                                </p>
                            </div>
                        </div>
                        <div class="line flex">
                            <div class="left">
                                8:14
                            </div>
                            <div class="right flex-1">
                                <h3>这是一个标题</h3>
                            </div>
                        </div>
                        <div class="line flex">
                            <div class="left">
                                8:14
                            </div>
                            <div class="right flex-1">
                                <h3>这是一个标题</h3>

                            </div>
                        </div>
                    </div>
                    <div class="img-wrap l">
                        <img src="../assets/images/temp/img.png" alt="">
                    </div>
                </div>
                <div class='a-more'>
                    <a href="">{{$t('message.more_text')}}&nbsp;&gt;</a>
                </div>
            </div>
        </div>
        <!--新手指导-->
        <div class="i-guide">
            <div class="wrap1200 guides">
                <div class="i-title">
                    <div class="head-outer center">
                        <h2>{{$t('message.home_page_title3')}}</h2>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <div class="content flex">
                    <div class="item">
                        <img src="../assets/images/temp/img.png" alt="">
                        <div class="title">
                            比特币基础
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/temp/img.png" alt="">
                        <div class="title">
                            比特币基础
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/temp/img.png" alt="">
                        <div class="title">
                            比特币基础
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/temp/img.png" alt="">
                        <div class="title">
                            比特币基础
                        </div>
                    </div>
                </div>
                <div class='a-more'>
                    <a href="">{{$t('message.more_text')}}&nbsp;&gt;</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
import echarts from 'echarts'
import md5 from 'md5';
import { mapActions } from 'vuex'
export default {
    components:{
    },
    data(){
        return {
            tab:0,
            asset:'btc',
            loginParam:{
                username:'',
                password:''
            },
            chartsOptions:{},
            toPath: this.$route.query.path || '/'
        }
    },
    mounted(){
    },
    created(){
        
    },
    methods: {
        ...mapActions([
            'updateUser'
        ]),
        onTab(index,assetcode){
            this.tab = index;
            this.asset = assetcode;
        },
        // 登录方法
        login(){
            let _this = this;
            let obj = {
                username:_this.loginParam.username,
                password: md5(_this.loginParam.password)
            }
            this.$http('login',obj).then(res => {
                console.log(res);
                 if(res.status==0){
                    this.store.setStore('_token', res.dataWrapper._token);
                    this.store.setStore('userInfo', res.dataWrapper.customerInfo);
                    this.store.setStore('policyList', res.dataWrapper.policyList);
                    this.updateUser(res.dataWrapper.customerInfo);
                    this.$to({path: this.toPath});
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>

// 登陆后
.i-login-info{
    box-sizing: border-box;
    width: 300px;
    height: 322px;
    padding-top: 40px;
    margin-top: 29px;
    background: #fff;
    .uname{
        text-align: center;
        font-size: 16px;
        margin-bottom: 18px;
    }
    .info{
        line-height: 30px;
        color: #666666;
        margin-bottom: 20px;
        
        .left{
            padding-right: 6px;
            width: 96px;
            text-align: right;
        }
        .curr{
            height: 104px;
            overflow: hidden;
            line-height: 26px;
        }
    }
    .btn-wrap{
        padding: 0 20px;
        .btn{
            color: #fff;
            background-color: #0f88ed;
            line-height: 34px;
            height: 34px;
        }
    }
}
.i-banner {
    height: 380px;
    min-width: 1200px;
    background: url('../assets/images/i-banner.png') no-repeat center;
}
/* 实时动态 */


.i-current-head {
    height: 56px;
    border-bottom: 1px solid #f2f2f5;
}

.i-current-head .news span {
    line-height: 18px;
    vertical-align: middle;
}

.i-current-head .news-icon {
    display: inline-block;
    height: 18px;
    width: 18px;
    margin-right: 6px;
    background: url('../assets/images/i-laba.png') no-repeat center;
}

.i-current-head .news,
.i-current-head .more {
    line-height: 56px;
}

.i-current-head .more a {
    font-size: 14px;
    color: #0f88ed;
}

.i-title {
    padding: 42px 0 40px;
}

.i-title .head-outer {
    position: relative;
    height: 40px;
    border-bottom: 1px solid #cccccc;
    width: 96px;
    margin: 0 auto;
}

.i-current .d-chart {
    height: 320px;
}

.i-title .head-outer .bottom-line {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 2px;
    width: 28px;
    margin-left: -14px;
    background: #cccccc;
}

.i-current .coin-nav {
    height: 54px;
    background: #f2f2f5;
}

.i-current .coin-nav li.nav {
    text-align: center;
    width: 120px;
    line-height: 54px;
    float: left;
    color: #000;
}

.i-current .coin-nav li.on {
    background-image: url('../assets/images/i-bg-nav.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    color: #0f88ed;
}

.i-current .c-details {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 40px;
}

.i-current .c-details .item {
    text-align: center;
    flex: 1;
}

.i-current .c-details .item-title {
    line-height: 58px;
    margin-bottom: 14px;
}

.i-current .c-details .item-data {
    margin-bottom: 20px;
    font-size: 24px;
}

.i-current .btn-wrap {
    margin-top: 40px;
}

.i-current .btn-wrap .btn {
    display: inline-block;
    width: 208px;
    height: 54px;
    background: #0f88ed;
    font-size: 14px;
    line-height: 54px;
    border-radius: 4px;
    color: #fff;
}

.i-current {
    background: #fff;
    height: auto;
    padding-bottom: 54px;
    .details {
        .details-table{
            border: 1px solid #eeeeee;
            line-height: 54px;
            text-align: center;
            .head{
                height: 54px;
                border-bottom: 1px solid #eeeeee;
            }
            .body{
                font-size: 18px;
                .item{
                    height: 54px;
                    &.down{
                        .lasted{
                            color: #3dc18e;
                        }
                        .range{
                            color: #3dc18e;
                        }
                    }
                    &.up{
                        .lasted{
                            color: #de211d;
                        }
                        .range{
                            color: #de211d;
                        }
                    }
                }
                .on{
                    background: #f9f9f9;
                }
                
            }
            
            
        }
    }
}
.zixun {
    padding: 0 40px;
}

.zixun .content {
    border-left: 1px solid #ccc;
}


/* z最新资讯 */

.i-news {
    background: #f2f2f5;
    padding-bottom: 26px;
}

.i-news .content .text {
    width: 560px;
    padding-bottom: 20px;
}

.i-news .content .text .line {
    position: relative;
}

.i-news .content .left {
    text-align: center;
    width: 96px;
}

.i-news .content .img-wrap {
    width: 454px;
    margin-left: 100px;
}

.i-news .content .img-wrap img {
    width: 100%;
}

.i-news .content .left::before {
    content: " ";
    display: block;
    position: absolute;
    background: #0f88ed;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: -4px;
    top: 4px;
}

.i-news .content .right h3,
.i-news .content .right p {
    padding-left: 20px;
}

.i-news .content .right h3 {
    border-left: 1px solid #ccc;
    font-size: 16px;
    color: #333;
    margin-bottom: 16px;
}

.i-news .content .right p {
    font-size: 14px;
    line-height: 24px;
    color: #999;
    margin-bottom: 20px;
}

.i-guide {
    background: #fff;
    padding-bottom: 26px;
}

.i-news .a-more,
.i-guide .a-more {
    height: 52px;
    line-height: 52px;
    text-align: center;
}

.i-news .a-more a,
.i-guide .a-more a {
    font-size: 14px;
    color: #0f88ed;
    line-height: 1.2;
}

.i-guide .content {
    justify-content: space-between;
    margin-bottom: 20px;
}

.i-guide .content .item {
    width: 280px;
    height: 208px;
    justify-content: space-between;
}

.i-guide .content .item img {
    width: 100%;
    height: 158px;
}

.i-guide .content .item .title {
    text-align: center;
    line-height: 50px;
    color: #666;
    border: 1px solid #e4e4e4;
    border-top-color: rgba(0, 0, 0, 0);
}

</style>


