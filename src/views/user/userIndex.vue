<template>
<div class="container user-funds user">
    <div class="top w1200">
        <div class="news l">
            <span class="news-icon"></span><span>最新动态：关于开放ETH兑BTC的公告</span>
        </div>
    </div>
    <div class="main w1200 flex">
        <div class="step">
            <div class="item" :class="{'on': tab==1}" @click="onClickTab(1)">
                <span class="icon icon-1"></span>
                <span class="title">安全认证</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==2}" @click="onClickTab(2)">
                <span class="icon icon-2"></span>
                <span class="title">安全策略</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==3}" @click="onClickTab(3)">
                <span class="icon icon-3"></span>
                <span class="title">身份认证</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==4}" @click="onClickTab(4)">
                <span class="icon icon-4"></span>
                <span class="title">通知设置</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==5}" @click="onClickTab(5)">
                <span class="icon icon-5"></span>
                <span class="title">账户管理</span>
                <span class="arrows"></span>
            </div>
        </div>
        <router-view class="main-wrap flex-1">

        </router-view>
    </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    components:{
    
    },
    data(){
        return {
            tab:1
        }
    },
    created(){
        this.initTabIndex();
    },
    methods: {
        ...mapActions([
            'onClickUserTab'
        ]),
        onClickTab(tabIndex){
            // this.onClickUserTab(index);
            this.tab = tabIndex;
            switch(tabIndex){
                case 1:
                    this.$to({name:'userSecurity'});
                    break;
                case 2:
                    this.$to({name:'userSafePolicy'});
                    break;
                case 3: 
                    this.$to({name:'userIdentity'});
                    break;
                case 4: 
                    this.$to({name:'userNotify'});
                    break;
                case 5: 
                    this.$to({name:'userAccount'});
                    break;
            }
        },
        initTabIndex(){
            let route = this.$route.name;
            switch(route){
                case 'userSecurity':
                    this.tab = 1;
                    break;
                case 'userSafePolicy':
                    this.tab = 2;
                    break;
                case 'userIdentity':
                    this.tab = 3;
                    break;
                case 'userNotify':
                    this.tab = 4;
                    break;
                case 'userAccount':
                    this.tab = 5;
                    break;
                default: //
                    this.tab = 1;
                    break;
            }
        }
    }
}
</script>
<style lang="less">
@import '../../style/user-funds';
.user{
    .main{
        .step{
            height: 303px;
            .item{
                .icon-1{
                    background-image: url('../../assets/images/icon/icon-safe.png');
                }
                .icon-2{
                    background-image: url('../../assets/images/icon/icon-policy.png');
                }
                .icon-3{
                    background-image: url('../../assets/images/icon/icon-id.png');
                }
                .icon-4{
                    background-image: url('../../assets/images/icon/icon-notify.png');
                }
                .icon-5{
                    background-image: url('../../assets/images/icon/icon-account.png');
                }
            }
            .on{
                .icon-1{
                    background-image: url('../../assets/images/icon/icon-safe-fill.png');
                }
                .icon-2{
                    background-image: url('../../assets/images/icon/icon-policy-fill.png');
                }
                .icon-3{
                    background-image: url('../../assets/images/icon/icon-id-fill.png');
                }
                .icon-4{
                    background-image: url('../../assets/images/icon/icon-notify-fill.png');
                }
                .icon-5{
                    background-image: url('../../assets/images/icon/icon-account-fill.png');
                }
                
            }
        }
    }
    
}
</style>


