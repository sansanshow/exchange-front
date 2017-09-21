<template>
<div class="container user-funds user">
    <div class="top w1200">
        <div class="news l">
            <span class="news-icon"></span><span>最新动态：关于开放ETH兑BTC的公告</span>
        </div>
    </div>
    <div class="main w1200 flex">
        <div class="step">
            <div class="item" :class="{'on': tab==1}" @click="tab=1;$to({name:'userSecurity'})">
                <span class="icon icon-1"></span>
                <span class="title">安全认证</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==2}" @click="tab=2;$to({name:'userIdentity'})">
                <span class="icon icon-2"></span>
                <span class="title">身份认证</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==3}" @click="tab=3;$to({name:'userNotify'})">
                <span class="icon icon-3"></span>
                <span class="title">通知设置</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==4}" @click="tab=4;$to({name:'userAccount'})">
                <span class="icon icon-4"></span>
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
export default {
    components:{
    
    },
    data(){
        return {
            tab:1
        }
    }
}
</script>
<style lang="less">
@import '../../style/user-funds';
.user{
    .main{
        .step{
            height: 236px;
            .item{
                .icon-1{
                    background-image: url('../../assets/images/icon-notify.png');
                }
                .icon-2{
                    background-image: url('../../assets/images/icon-notify.png');
                }
                .icon-3{
                    background-image: url('../../assets/images/icon-file.png');
                }
                .icon-4{
                    background-image: url('../../assets/images/icon-file.png');
                }
            }
            .on{
                .icon-1{
                    background-image: url('../../assets/images/icon-safe-fill.png');
                }
                .icon-2{
                    background-image: url('../../assets/images/icon-safe-fill.png');
                }
                .icon-3{
                    background-image: url('../../assets/images/icon-safe-fill.png');
                }
                .icon-4{
                    background-image: url('../../assets/images/icon-safe-fill.png');
                }
                
            }
        }
    }
    
}
</style>


