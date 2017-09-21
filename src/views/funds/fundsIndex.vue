<template>
<div class="container user-funds funds">
    <div class="top w1200">
        <div class="news l">
            <span class="news-icon"></span><span>最新动态：关于开放ETH兑BTC的公告</span>
        </div>
    </div>
    <div class="main w1200 flex">
        <div class="step">
            <div class="item" :class="{'on': tab==1}" @click="tab=1;$to({name:'funds'})">
                <span class="icon icon-1"></span>
                <span class="title">账户资产</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==2}" @click="tab=2;$to({name:'fundsRecharge'})">
                <span class="icon icon-2"></span>
                <span class="title">充值</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==3}" @click="tab=3;$to({name:'fundsDeposit'})">
                <span class="icon icon-3"></span>
                <span class="title">提现</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==4}" @click="tab=4;$to({name:'fundsDetail'})">
                <span class="icon icon-4"></span>
                <span class="title">账单明细</span>
                <span class="arrows"></span>
            </div>
            <div class="item" :class="{'on': tab==5}" @click="tab=5;$to({name:'fundsAudit'})">
                <span class="icon icon-5"></span>
                <span class="title">资产审计</span>
                <span class="arrows"></span>
            </div>
        </div>
        <router-view class="content flex-1">

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
<style lang="less" scoped>
@import '../../style/user-funds';
.funds{
    .main{
        .step{
            height: 295px;
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
                .icon-5{
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
                .icon-5{
                    background-image: url('../../assets/images/icon-safe-fill.png');
                }
            }
        }
    }
    
}
</style>


