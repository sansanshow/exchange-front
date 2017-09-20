<template>
   <div class="container trade">
        <div class="w1200 part p1">
            <ul class="tab-top fix">
                <li class="tab on">主板交易区</li>
                <li class="tab">创新板交易区</li>
            </ul>
            <div class="content">
                <div class="head">
                    <ul class="coin-nav fix">
                        <li class="nav on"><img class="icon" src="../../assets/images/coin-icon.png" alt=""><span class="name">BTC/CNY</span></li>
                        <li class="nav"><img class="icon" src="../../assets/images/coin-icon.png" alt=""><span class="name">BTC/CNY</span></li>
                        <li class="nav"><img class="icon" src="../../assets/images/coin-icon.png" alt=""><span class="name">BTC/CNY</span></li>
                        <li class="nav"><img class="icon" src="../../assets/images/coin-icon.png" alt=""><span class="name">BTC/CNY</span></li>
                    </ul>
                    <span class="open"><span>展开</span><img class="arrows" src="../../assets/images/i-arrows.png" alt=""></span>
                </div>
                <div class="main">
                    <div class="info">
                        <span class="item">全球行情</span>
                        <span class="item">币种资料</span>
                        <span class="item">K线交易</span>
                    </div>
                    <div class="data flex">
                        <div class="flex-1">
                            <div class="big">$147,000</div>
                            <div class="num">
                                <span>高：</span><span class="inb">￥152000</span>
                                <span>低：</span><span>￥152000</span>
                                <span>量：</span><span>152000</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="can">
                                <span>可用:</span><span>--</span><span>CNY</span>
                            </div>
                            <div class="can">
                                <span>可买:</span><span>--</span><span>CNY</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="can">
                                <span>可用:</span><span>--</span><span>CNY</span>
                            </div>
                            <div class="can">
                                <span>可买:</span><span>--</span><span>CNY</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="w1200 part p2 flex">
            <div class="left flex ">
                <div class="card">
                    <p class="title red">卖出比特币</p>
                    <div class="tabs flex">
                        <div class="tab on flex-1">限价买入</div>
                        <div class="tab flex-1">计划买入</div>
                    </div>
                    <div class="line">
                        <span class="line-head">卖出价(CNY)</span>
                        <span class="line-body red">277706.3</span>
                    </div>
                    <div class="line">
                        <span class="line-head">卖出量(BTC)</span>
                        <span class="line-body red">277706.3</span>
                    </div>
                    <div class="fix progress-wrap">
                        <div class="progress">
                            <div class="circle"></div>
                        </div>
                        <span class="r percent">50%</span>
                    </div>
                    <div class="willtrade">
                        <span>预计交易额:</span><span class="num red">0.00</span> <span>CNY</span>
                    </div>
                    <div class="btn bg-red">
                        立即卖出
                    </div>
                </div>
                <div class="card">
                    <p class="title green">买入比特币</p>
                    <div class="tabs flex">
                        <div class="tab on flex-1">限价买入</div>
                        <div class="tab flex-1">计划买入</div>
                    </div>
                    <div class="line">
                        <span class="line-head">买入价(CNY)</span>
                        <span class="line-body green">277706.3</span>
                    </div>
                    <div class="line">
                        <span class="line-head">买入量(BTC)</span>
                        <span class="line-body green">277706.3</span>
                    </div>
                    <div class="fix progress-wrap">
                        <div class="progress">
                            <div class="circle"></div>
                        </div>
                        <span class="r percent">50%</span>
                    </div>
                    <div class="willtrade">
                        <span>预计交易额:</span><span class="num green">0.00</span> <span>CNY</span>
                    </div>
                    <div class="btn bg-green">
                        立即买入
                    </div>
                </div>
            </div>
            <div class="right flex-1">
                <div class="tabs flex">
                    <div class="tab on flex-1">限价买入</div>
                    <div class="tab flex-1">计划买入</div>
                </div>
                <div class="data">
                    <div class="block">
                        <div class="row gn" v-for="(item,index) in 5" :key="index">
                            <div class="text text1">卖{{index}}</div>
                            <div class="text text2">28320</div>
                            <div class="text text3">3.1245</div>
                            <div class="text text4">
                                <div class="bar">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="row red" v-for="(item,index) in 5" :key="index">
                            <div class="text text1">卖{{index}}</div>
                            <div class="text text2">28320</div>
                            <div class="text text3">3.1245</div>
                            <div class="text text4">
                                <div class="bar">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 委托列表 -->
        <div class="w1200 part p3">
            <div class="head flex">
                <div class="tabs hand flex">
                    <div class="tab flex-1 on">限价委托</div>
                    <div class="tab flex-1">计划委托</div>
                </div>
                <div class="flex-1 t_r">
                    <span class="more hand">更多记录</span>
                </div>
               
            </div>
            <div class="main">
                <table>
                    <thead> 
                        <tr>
                            <td class="t_l">委托时间</td>
                            <td>委托量/已成交(LTC)</td>
                            <td>委托价格/成交均价(CNY)</td>
                            <td>成交总额(CNY)</td>
                            <td>状态</td>
                            <td>订单来源</td>
                            <td class="t_r">操作<span class="bitch">[批量撤单]</span></td>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td class="t_l">委托时间</td>
                            <td>委托量/已成交(LTC)</td>
                            <td>委托价格/成交均价(CNY)</td>
                            <td>成交总额(CNY)</td>
                            <td>状态</td>
                            <td>订单来源</td>
                            <td class="t_r">操作<span>[批量撤单]</span></td>
                        </tr>
                        <tr class="no-login">
                            <td colspan="7">
                                您还没有登录，请<span class="hand green"> 登录 </span>或<span class="hand red"> 注册 </span>后重试
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
@red:#de211d;
@green:#3dc18e;
@bg: #f2f2f5;
.trade{
    .part {
        margin-top: 20px;
        box-sizing: border-box;
    }
    .bg-red {
        background-color: @red;
    }
    .bg-green {
        background-color: @green;;
    }
    .red {
        color: @red;
    }
    .green {
        color: @green;
    }
} 
.p3{
    background: #fff;
    padding: 0 20px 10px 18px;
    margin-bottom: 100px;
    .main{
       table{
           
           .t_r{
                text-align: right;
            }
            .t_l{
                text-align: left;
            }
            td{
                height: 56px;
                font-size: 14px;
                color: #666;
                text-align: center;
                border-bottom: 1px solid @bg;
                .bitch{
                    color: @green;
                }
            }
            width: 100%;
           .no-login{
               height: 112px;
               text-align: center;
           }
           
       }
    }
    
}
.p3{
    .head{
        height: 56px;
        line-height: 56px;
        border-bottom: 1px solid @bg;
        .more{
            color: @red;
        }
    }
    .tabs{
        width: 224px;
        .tab{
            box-sizing: border-box;
            border-bottom: 3px solid transparent;
            text-align: center;
    
            &.on{
            border-bottom-color: #0f88ed; 
        }
        }
        
    }
}
.p1{
    .tab-top {
        background: #f2f2f5;
        height: 50px;
        li {
            text-align: center;
            width: 174px;
            float: left;
            font-size: 16px;
            color: #666;
            line-height: 50px;
        }
        .on {
            background: #fff;
            color: #000;
        }
    }
    .content {
        padding: 0 29px;
        background: #fff;
        padding-bottom: 10px;
    }

}

.p1 .content .head {
    position: relative;
    border-bottom: 1px solid #ccc;
    height: 54px;
}

.p1 .content .head .open {
    position: absolute;
    top: 20px;
    right: 10px;
}

.p1 .content .head .open .arrows {
    width: 12px;
    display: inline-block;
    margin-left: 6px;
}

.p1 .coin-nav li {
    text-align: center;
    box-sizing: border-box;
    float: left;
    height: 54px;
    line-height: 54px;
    width: 112px;
}

.p1 .coin-nav .name {
    display: inline-block;
    vertical-align: middle;
}

.p1 .coin-nav .icon {
    display: inline-block;
    vertical-align: middle;
    width: 26px;
}

.p1 .coin-nav li.on {
    border-bottom: 3px solid #0f88ed;
}

.p1 .main .info {
    margin-top: 18px;
    line-height: 44px;
    color: #0f88ed;
    margin-bottom: 16px;
}

.p1 .main .info .item {
    display: inline-block;
    margin-right: 34px;
}

.p1 .data .big {
    color: #3dc08e;
    font-size: 32px;
    margin-bottom: 12px;
}

.p1 .data .num {
    color: #666;
    font-size: 12px;
}

.p1 .data .num span:nth-child(2n) {
    display: inline-block;
    margin-right: 6px;
}

.p1 .data .can {
    text-align: center;
    height: 42px;
    font-size: 14px;
    color: #666;
}

.p1 .data .can span:first-of-type {
    display: inline-block;
    margin-right: 8px;
}

.p2 .left {
    box-sizing: border-box;
    background: #fff;
    width: 784px;
    justify-content: space-between;
    padding: 16px 16px 32px;
}

.p2 .left .card {
    width: 360px;
}

.p2 .left .title {
    margin: 10px 0 20px;
    font-size: 16px;
}

.p2 .tabs {
    border: 1px solid #ddd;
    height: 28px;
    line-height: 28px;
    margin-bottom: 22px;
}

.p2 .tabs .on {
    background: #f2f2f5;
}

.p2 .tab {
    text-align: center;
}

.p2 .tab:first-of-type {
    border-right: 1px solid #ddd;
}

.p2 .left .line {
    box-sizing: border-box;
    width: 100%;
    padding: 0 10px;
    height: 46px;
    border: 1px solid #ddd;
    display: inline-flex;
    margin-bottom: 17px;
    line-height: 46px;
}

.p2 .left .line .line-head {
    width: 118px;
    font-size: 12px;
}

.p2 .left .line .line-body {
    flex: 1;
    text-align: right;
    font-size: 18px;
}

.p2 .left .progress-wrap {
    margin-bottom: 20px;
}

.p2 .left .progress {
    box-sizing: border-box;
    height: 6px;
    background: #ddd;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    width: 305px;
    top: 10px;
    position: relative;
}

.p2 .left .percent {
    font-size: 14px;
    color: #666;
}

.p2 .left .progress .circle {
    box-sizing: border-box;
    height: 14px;
    background: #f8f8fb;
    border: 1px solid #cdcdcd;
    border-radius: 7px;
    width: 14px;
    position: absolute;
    left: 0;
    top: -4px;
}

.p2 .left .willtrade {
    margin-bottom: 24px;
}
.p2{
    background: #f2f2f5;
    .right{
        background: #fff;
        margin-left: 16px;
        padding: 16px 0 0 0;
        .tabs{
            margin: 0 22px 0 18px;
        }
        .data{
            margin-top: 3px;
            .block{
                padding: 14px 22px 12px 18px;
                &:first-of-type{
                    border-bottom: 1px #f2f2f5 solid;
                }
            }
           .row{
                display: flex;
                height: 30px;
                .text{
                    line-height: 30px;
                    font-size: 12px;
                }
                .text1{
                    text-align: center;
                    width: 74px;
                }
                .text2{
                    flex: 2;
                }
                .text3{
                    flex: 1;
                    text-align: left
                }
                .text4{
                    width: 74px;
        
                    .bar{
                        margin-top: 8px;
                        height: 14px;
                       
                    }
                }
                
           }
           .red{
               .text1{
                   color: @red;
               }
                .bar{
                    background: @red;
                }
           }
           .gn{
               .text1{
                   color: @green;
               }
                .bar{
                    background: @green;
                }
           }
        }
    }
    
}
.num {
    display: inline-block;
    margin: 0 0.8em;
}
.p2 .left .btn {
    height: 46px;
    width: 100%;
    color: #fff;
    text-align: center;
    line-height: 46px;
}

</style>
