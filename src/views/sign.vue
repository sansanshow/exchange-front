<template>
    <div class="container sign">
        <div v-if="signType=='login'" class="wrap1200 login-wrap">
            <div class="i-login-form mr-auto">
                <h2 class="i-form-title">{{ $t('message.login_title_text') }}</h2>
                <div class="i-form-field">
                    <input type="text" v-model="loginParam.username" :placeholder="$t('message.mobile_text')">
                </div>
                <div class="i-form-field">
                    <input type="password" v-model="loginParam.password"  :placeholder="$t('message.pwd_text')">
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
                    <span class="a-line"  @click="$to({path:'/sign/reg'})">{{$t('message.register_title')}}</span>
                </div>
            </div>
        </div>
        <div v-else class="wrap1200 reg-wrap">
            <div class="i-login-form mr-auto">
                <h2 class="i-form-title">{{$t('message.header_register')}}</h2>
                <div class="i-form-field">
                    <input type="text" v-model="reg.mobile" :placeholder="$t('message.mobile_text')">
                </div>
                <div class="i-form-field">
                    <input type="password" v-model="reg.password" :placeholder="$t('message.pwd_text')">
                </div>
                <div class="i-form-field">
                    <input type="password" v-model="reg.cfmpwd" :placeholder="$t('message.repwd_text')">
                </div>
                <div class="i-form-field fix">
                    <input class="small-input l" type="text" v-model="reg.imgcode" :placeholder="$t('message.verificationCode_text1')">
                    <div class="right-wrap r" @click="refresh">
                        <img class="verify-img" :src="reg.imgsrc" alt="">
                    </div>
                </div>
                <div class="i-form-field fix">
                    <input type="text" class="small-input l" v-model="reg.mcode" :placeholder="$t('message.verificationCode_text2')">
                    <div class="right-wrap r">
                        <span v-if="sendMsgDisabled" class="send-btn disable center">{{ time }}&nbsp{{$t('message.smscodetime_text')}}</span>
                        <span v-if="!sendMsgDisabled" class="send-btn center" @click="sendSmsCode">{{$t('message.sendsmscode_text')}}</span>
                    </div>
                </div>
                <div class="i-form-field txt-fff center" style="padding-top: 4px;">
                    <span>-注册即表示同意</span>
                    <a class="a-line" href="">使用条款</a>
                    <span>-</span>
                </div>
                <div class="i-form-field">
                    <button class="login-btn" @click="regist">{{$t('message.header_register')}}</button>
                    </div>
                    <div class="i-form-field txt-fff center" style="padding-top: 4px;">
                        <span>{{$t('message.have_account_text')}}&nbsp;&nbsp;</span>
                        <span class="a-line" @click="$to({path:'/sign/login'})">{{$t('message.sign_in_text')}}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
const wait = 5;
import axios from 'axios';
import qs from 'qs';
import md5 from 'md5';
import { mapActions } from 'vuex'
export default {
    components:{

    },
    data(){
        return {
            signType: this.$route.params.type,
            loginParam: {
                username: '',
                password: ''
            },
            time: wait,
            sendMsgDisabled: false,
            reg: {
                mobile: '',
                password: '',
                cfmpwd: '',
                mcode:'',
                imgcode:'',
                imgsrc: null,
            },
            toPath: this.$route.query.path || '/'
        }
    },
    created(){
        this.reg.imgsrc = this.VerifyImg
        //
        // this.$http('login',{username:'15908401995', password: 'a123456'}).then(res => {
        //     console.log(res);
        // });

        // let reqOptions = {
        //     method:'post',
        //     baseURL: 'http://192.168.0.232:8089',
        //     url: 'login',
        //     timeout: 10000,
        //     data:{username:'15908401995', password: 'a123456'}
        // }
        // this.$ajax(reqOptions).then(res => {
        //     console.log(res);
        // }).catch(function(err){
        //     console.log(err);
        // });


        // this.$ajax.post('http://192.168.0.232:8089/login',{
        //    username:'15908401995ss', password: 'a123456'
        // }).then(function(res){
        //     console.log(res);
        // }).catch(function(err){
        //     console.log(err);
        // });
    },
    methods: {
        ...mapActions([
            'updateUser'
        ]),
        // 登录方法
        login(){
            let _this = this;
            let obj = {
                username:_this.loginParam.username,
                password: md5(_this.loginParam.password)
            }
            this.$http('login',obj).then(res => {
                 if(res.status==0){
                    this.store.setStore('_token', res.dataWrapper._token);
                    this.store.setStore('userInfo', res.dataWrapper.customerInfo);
                    this.store.setStore('policyList', res.dataWrapper.policyList);
                    this.$to({path: this.toPath});
                    this.updateUser(res.dataWrapper.customerInfo);
                }
            });
        },
        // 注册
        regist(){
            let _this = this;
            if(_this.reg.password !== _this.reg.cfmpwd){
                alert('密码不一致');
                return;
            }
            let param = {
                mobile: _this.reg.mobile,
                password: md5(_this.reg.password),
                cfmpwd: md5(_this.reg.cfmpwd),
                mcode:_this.reg.mcode,
            }
            this.$http('register',param).then(res => {
                console.log(res);
                if(res.staus==0){
                    this.store.setStore('_token','123456');
                }
            });
        },
        // 刷新验证码
        refresh(){
            this.reg.imgsrc = this.VerifyImg + '?r=' + new Date().getTime();
        },
        sendSmsCode(){
            let _this = this;
            _this.sendMsgDisabled = true;
            let interval = window.setInterval(function() {
                if ((_this.time--) <= 0) {
                    _this.time = wait;
                    _this.sendMsgDisabled = false;
                    window.clearInterval(interval);
                }
            }, 1000);

            // 发送验证码
            let param = {
                code: _this.reg.imgcode,
                mobile: _this.reg.mobile,
                type: 'nreg'
            };

            this.$http('sendsms', param).then(res => {
                console.log('sendSmsCode');
                console.log(res);
            });
        }
    },
    watch: {
        '$route' (to, from) {
            // 对路由变化作出响应...
            this.signType = to.params.type;
        }
    }
}
</script>
<style lang='less'>
    .sign {
        background: url('../assets/images/bg-login.png') no-repeat;
        background-position: center 105px;
        min-width: 1200px;
    }

    .sign .i-login-form {
        width: 400px;
    }

    .sign .login-wrap {
        padding: 108px 0 20px;
    }

    .sign .reg-wrap {
        padding: 64px 0 20px;
    }

    .sign .i-login-form {
        margin-top: 0;
        height: auto;
        padding-bottom: 24px;
    }

    .sign .i-form-field {
        padding: 0 43px;
    }

    .sign .i-form-field .small-input {
        width: 180px;
    }

    .sign .i-form-field .right-wrap {
        width: 128px;
        height: 34px;
        overflow: hidden;
    }

    .sign .right-wrap .verify-img {
        width: 100%;
        height: 34px;
    }

    .sign{
        .send-btn {
            display: block;
            line-height: 34px;
            color: #fff;
            background: #0f88ed;
        }
        .disable{
            background: #ccc;
        }
    }
</style>


