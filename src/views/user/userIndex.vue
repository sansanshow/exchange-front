<template>
<div class="container mgr">
    <div class="top w1200">
        <div class="news l">
            <span class="news-icon"></span><span>最新动态：关于开放ETH兑BTC的公告</span>
        </div>
    </div>
    <div class="main w1200 flex">
        <div class="step">
            <div class="item on" @click="$to({name:'userSecurity'})">
                <span class="icon"></span>
                <span class="title">安全认证</span>
                <span class="arrows"></span>
            </div>
            <div class="item" @click="$to({name:'userIdentity'})">
                <span class="icon"></span>
                <span class="title">身份认证</span>
                <span class="arrows"></span>
            </div>
            <div class="item" @click="$to({name:'userNotify'})">
                <span class="icon"></span>
                <span class="title">通知设置</span>
                <span class="arrows"></span>
            </div>
            <div class="item" @click="$to({name:'userAccount'})">
                <span class="icon"></span>
                <span class="title">账户管理</span>
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

        }
    }
}
</script>
<style lang="less" scoped>
.mgr{
    .top{
        height: 71px;
        line-height: 71px;
        .news {
            .news-icon {
                display: inline-block;
                height: 18px;
                width: 18px;
                margin-right: 6px;
                background: url('../../assets/images/i-laba.png') no-repeat center;
            }
            span {
                line-height: 18px;
                vertical-align: middle;
            }
        }

        
    }
    .main{
        .step{
            background: #fff;
            width: 188px;
            height: auto;
            .item{
                cursor: pointer;
                line-height: 58px;
                width: 100%;
                display: inline-flex;
                border-bottom: 1px solid #f2f2f5;
                
                span{
                    display: inline-block;
                }
                .icon{
                    border-left: 4px solid transparent;
                    width: 64px;
                }
                .title{
                    flex: 1;
                }
                .arrows{
                    width: 38px;
                }
            }
            .on{
                .icon{
                    border-left-color:#0f88ed;
                }
                
            }
        }
        .content{
            margin-left: 12px;
            background: #fff;
        }
    }
    
}
</style>


