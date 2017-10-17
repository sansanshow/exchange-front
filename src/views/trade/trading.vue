<template>
   <div class="container trade">
        <div class="w1200 part p1">
            <ul class="tab-top fix hand">
                <li class="tab" :class="{'on': tabArgs.topTab==0}" @click="onTab(0, 0, 0)">{{$t('message.trading_top_title1')}}</li>
                <li class="tab" :class="{'on': tabArgs.topTab==1}" @click="onTab(1, 0, 0)">{{$t('message.trading_top_title2')}}</li>
            </ul>
            <div class="content">
                <div class="head">
                    <!-- 放开支持币币交易
                    <ul class="coin-nav fix">
                        <li class="nav"><span class="name hand" :class="{'on': tabArgs.coinTab==0}" @click="onTab(tabArgs.topTab, 0, 0)">{{$t('message.trading_tab_title1')}}</span></li>
                        <li class="nav"><span class="name hand" :class="{'on': tabArgs.coinTab==1}" @click="onTab(tabArgs.topTab, 1, 0)">{{$t('message.trading_tab_title2')}}</span></li>
                        <li class="nav"><span class="name hand" :class="{'on': tabArgs.coinTab==2}" @click="onTab(tabArgs.topTab, 2, 0)">{{$t('message.trading_tab_title3')}}</span></li>
                    </ul>-->
                    <div class="sub-nav flex">
                        <div class="sub-nav-item hand" @click="onTab(tabArgs.topTab, tabArgs.coinTab, index)" :class="{'t-left': (index % 8 == 1),'on': index==tabArgs.subTab}"  v-for="(item,index) in $store.state.assets" :key="index">{{ item.name }}</div>
                        <span class="open"><span>收起</span><img class="arrows" src="../../assets/images/i-arrows.png" alt=""></span>
                    </div>

                </div>
                <div class="main">
                    <div class="info">
                        <span class="item">{{$t('message.trading_link_text1')}}</span>
                        <span class="item">{{$t('message.trading_link_text2')}}</span>
                        <span class="item">{{$t('message.trading_link_text3')}}</span>
                    </div>
                    <div class="data flex">
                        <div class="flex-1">
                            <div class="big">{{$t('message.money_symbol')}}{{ tabArgs.code ? $store.state.socketData[tabArgs.code].price : '--'}}</div>
                            <div class="num">
                                <span>{{$t('message.high')}}：</span><span class="inb">{{$t('message.money_symbol')}}{{ tabArgs.code ? $store.state.socketData[tabArgs.code].maxPrice : '--'}}</span>
                                <span>{{$t('message.low')}}：</span><span>{{$t('message.money_symbol')}}{{ tabArgs.code ? $store.state.socketData[tabArgs.code].minPrice : '--'}}</span>
                                <span>{{$t('message.volume')}}：</span><span>{{ tabArgs.code ? $store.state.socketData[tabArgs.code].volume : '--'}}</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="can">
                                <span>{{$t('message.usable')}}:</span><span>{{ $store.state.socketData.cny.usable || '--' }}</span><span> {{$t('message.money_code')}}</span>
                            </div>
                            <div class="can">
                                <span>{{$t('message.usable_buy')}}:</span><span>{{ $store.state.socketData.cny.usable || 0 | calDivision($store.state.socketData[tabArgs.code].price) }}</span><span> {{ $store.state.assets[tabArgs.subTab]['name']}}</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="can">
                                <span>{{$t('message.usable')}}:</span><span>{{$store.state.socketData[tabArgs.code].usable || '--'}}</span><span>{{ $store.state.assets[tabArgs.subTab]['name']}}</span>
                            </div>
                            <div class="can">
                                <span>{{$t('message.usable_sell')}}:</span><span>{{ $store.state.socketData[tabArgs.code].usable || 0 | calMulti($store.state.socketData[tabArgs.code].price)}}</span><span>CNY</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="w1200 part p2 flex">
            <div class="left flex ">
                <div class="card">
                    <p class="title red">{{$t('message.buy_text')}}{{$store.state.assets[tabArgs.subTab].name || ''}}</p>
                    <div class="tabs flex">
                        <div class="tab flex-1" :class="{'on': tabArgs.tabTwo.left == 0}" @click="onTabTwo('left',0)">{{$t('message.limit_buy_text')}}</div>
                        <div class="tab flex-1" :class="{'on': tabArgs.tabTwo.left == 1}" @click="onTabTwo('left',1)">{{$t('message.market_buy_text')}}</div>
                    </div>
                    <div class="line" v-if="tabArgs.tabTwo.left==0">
                        <span class="line-head">{{$t('message.buy_price')}}({{$t('message.money_code')}})</span>
                        <!-- <span class="line-body red">277706.3</span> -->
                        <input type="text" class="line-body red" v-model="orderInfo.buy.price"/>
                    </div>
                    <div class="line" v-if="tabArgs.tabTwo.left==1">
                        <span class="line-head">{{$t('message.market_buy_price')}}({{$t('message.money_code')}})</span>
                        <!-- <span class="line-body red">277706.3</span> -->
                        <input type="text" class="line-body red" v-model="orderInfo.buy_market.amount"/>
                    </div>
                    <div class="line" v-if="tabArgs.tabTwo.left==0">
                        <span class="line-head">{{$t('message.buy_volume')}}({{$store.state.assets[tabArgs.subTab].name || ''}})</span>
                        <!-- <span class="line-body red">277706.3</span> -->
                        <input type="text" class="line-body red" v-model="orderInfo.buy.quantity"/>
                    </div>
                    <div class="fix progress-wrap">
                        <div class="progress">
                            <div class="circle"></div>
                        </div>
                        <span class="r percent">50%</span>
                    </div>
                    <div class="willtrade">
                        <span>{{$t('message.expect_turnover')}}</span><span class="num red">{{ buyTotal | formatNum }}</span> <span>{{$t('message.money_code')}}</span>
                    </div>
                    <div class="line" v-if="validMap['trade'].securityId != 6">
                        <span class="line-head">{{$t('message.admin_password')}}</span>
                        <!-- <span class="line-body red">277706.3</span> -->
                        <input type="password" class="line-body" v-model="buyPayPwd"/>
                    </div>
                    <div v-if="tabArgs.tabTwo.left==1" class="btn bg-red" @click="createOrder('buy_market')">
                        {{$t('message.confirm_buy_text')}}
                    </div>
                    <div v-else class="btn bg-red" @click="createOrder('buy')">
                        {{$t('message.confirm_buy_text')}}
                    </div>
                </div>
                <div class="card">
                    <p class="title green">{{$t('message.sell_text')}}{{$store.state.assets[tabArgs.subTab].name || ''}}</p>
                    <div class="tabs flex">
                        <div class="tab flex-1" :class="{'on': tabArgs.tabTwo.right == 0}" @click="onTabTwo('right',0)">{{$t('message.limit_sell_text')}}</div>
                        <div class="tab flex-1" :class="{'on': tabArgs.tabTwo.right == 1}" @click="onTabTwo('right',1)">{{$t('message.market_sell_text')}}</div>
                    </div>
                    <div class="line" v-if="tabArgs.tabTwo.right==0">
                        <span class="line-head">{{$t('message.sell_price')}}({{$t('message.money_code')}})</span>
                        <!-- <span class="line-body green">277706.3</span> -->
                        <input type="text" class="line-body green" v-model="orderInfo.sell.price"/>
                    </div>
                    <div class="line" v-if="tabArgs.tabTwo.right==0">
                        <span class="line-head">{{$t('message.sell_volume')}}({{$store.state.assets[tabArgs.subTab].name || ''}})</span>
                        <!-- <span class="line-body green">277706.3</span> -->
                        <input type="text" class="line-body green" v-model="orderInfo.sell.quantity"/>
                    </div>
                    <div class="line" v-if="tabArgs.tabTwo.right==1">
                        <span class="line-head">{{$t('message.market_sell_volume')}}({{$store.state.assets[tabArgs.subTab].name || ''}})</span>
                        <!-- <span class="line-body green">277706.3</span> -->
                        <input type="text" class="line-body green" v-model="orderInfo.sell_market.quantity"/>
                    </div>
                    <div class="fix progress-wrap">
                        <div class="progress">
                            <div class="circle"></div>
                        </div>
                        <span class="r percent">50%</span>
                    </div>
                    <div class="willtrade">
                        <span>{{$t('message.expect_turnover')}}</span><span class="num green">{{ sellTotal | formatNum }}</span> <span>{{$t('message.money_code')}}</span>
                    </div>
                    <div class="line" v-if="validMap['trade'].securityId != 6">
                        <span class="line-head">{{$t('message.admin_password')}}</span>
                        <!-- <span class="line-body red">277706.3</span> -->
                        <input type="password" class="line-body" v-model="sellPayPwd"/>
                    </div>
                    <div v-if="tabArgs.tabTwo.right==1" class="btn bg-green" @click="createOrder('sell_market')">
                        {{$t('message.confirm_sell_text')}}
                    </div>
                    <div v-else class="btn bg-green" @click="createOrder('sell')">
                        {{$t('message.confirm_sell_text')}}
                    </div>
                </div>
            </div>
            <div class="right flex-1">
                <div class="tabs flex">
                    <div class="tab on flex-1">{{$t('message.default_stall_text')}}</div>
                    <div class="tab flex-1">{{$t('message.default_depth_text')}}</div>
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
                    <div class="tab flex-1" :class="{on: list.tab == 'list'}" @click="onTabList('list')">{{$t('message.limit_orders')}}</div>
                    <div class="tab flex-1" :class="{on: list.tab == 'record'}" @click="onTabList('record')">{{$t('message.history_orders')}}</div>
                </div>
                <div class="flex-1 t_r">
                    <span class="more hand">更多记录</span>
                </div>

            </div>
            <div class="main">
                <table>
                    <thead>
                        <tr>
                            <td class="t_l">{{$t('message.orders_time')}}</td>
                            <td>{{$t('message.orders_amount')}}({{$store.state.assets[tabArgs.subTab].name || ''}})</td>
                            <td>{{$t('message.orders_price')}}({{$t('message.money_code')}})</td>
                            <td>{{$t('message.orders_total_price')}}({{$t('message.money_code')}})</td>
                            <td>{{$t('message.orders_status')}}</td>
                            <!-- <td>订单来源</td> -->
                            <td class="t_r">{{$t('message.operation_text')}}<span class="bitch">[批量撤单]</span></td>
                        </tr>

                    </thead>
                    <tbody>
                        <template v-if="$store.state.isLogin">
                            <template v-if="list.tab == 'list'">
                                <template v-if="list.hisList.length > 0">
                                    <tr v-for="(item,index) in list.hisList" :key="'list'+index">
                                        <td class="t_l">{{ item.spotOrderTime }}</td>
                                        <td>{{ item.amount }} / {{ item.realAmount }}</td>
                                        <td>{{ item.price }} / {{ item.avgPrice }}</td>
                                        <td>{{ item.avgPrice * item.realAmount }}</td>
                                        <td>{{ item.orderStatus }}</td>
                                        <!-- <td>网页</td> -->
                                        <td class="t_r">操作<span>[批量撤单]</span></td>
                                    </tr>
                                </template>
                                <tr v-else class="no-login">
                                    <td colspan="7">
                                        还没有历史委托记录~
                                    </td>
                                </tr>
                            </template>
                            <template v-if="list.tab == 'record'">
                                <template v-if="list.recordList.length > 0">
                                    <tr v-for="(item,index) in list.recordList" :key="'record'+index">
                                        <td class="t_l">{{ item.spotOrderTime }}</td>
                                        <td>{{ item.amount }} / {{ item.realAmount }}</td>
                                        <td>{{ item.price }} / {{ item.avgPrice }}</td>
                                        <td>{{ item.avgPrice * item.realAmount }}</td>
                                        <td>{{ item.orderStatus }}</td>
                                        <td class="t_r">操作<span>[批量撤单]</span></td>
                                    </tr>
                                </template>
                                <tr v-else class="no-login">
                                    <td colspan="7">
                                        还没有历史委托记录~
                                    </td>
                                </tr>
                            </template>
                        </template>
                        <tr v-else class="no-login">
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
            tabArgs:{
                topTab: 0,
                coinTab: 0,
                subTab: 0,
                code: null,
                tabTwo:{
                    left: 0,
                    right: 0
                }
            },
            validMap: null,
            buyPayPwd:null,
            sellPayPwd:null,
            orderInfo: {
                'buy': {
                    price: null,
                    quantity: null,
                    typ: 'buy'
                },
                'sell': {
                    price: null,
                    quantity: null,
                    typ: 'sell'
                },
                'buy_market': {
                    amount: null,
                    typ: 'buy_marketbuy'
                },
                'sell_market': {
                    quantity: null,
                    typ: 'sell_market'
                }
            },
            // 限价委托、计划委托
            list: {
                tab: 'list',
                hisList: [], // 限价
                recordList: [], // 委托接口
            }
           
        }
    },
    mounted(){
        this.tabArgs.code = this.$store.state.assets[0] ? this.$store.state.assets[0]['code'] : null;
        this.init();
        this.initList('list',1);        
        // this.initList('record',1);
    },
    methods: {
        init(){
            // 初始化 权限列表
            let validMap = new Map();
            let policyList = JSON.parse(this.store.getStore('policyList'));
            for(let po of policyList){
                validMap[po.validationMode] = po;
            }
            this.validMap = validMap;
        },
        initList(type,page){
            let _this = this;
            let toAsset = 'cny';
            if(_this.tabArgs.coinTab==1){
                toAsset='btc';//对btc交易区
            }else if(_this.tabArgs.coinTab==2){
                toAsset = 'eth';//对eth交易区
            }
            let param = {
                pageSize: 5,
                pageNo: page,
                category: _this.$store.state.assets[_this.tabArgs.subTab]['code'] + '_' + toAsset,
            };
            this.$http(type == 'record' ? 'orderRecordList' : 'orderList',param).then(res => {
                if(type == 'record'){
                    this.list.recordList = res.dataWrapper.list.resultList;
                } else {
                    this.list.hisList = res.dataWrapper.list.resultList;
                }
            });
        },
        onTab(topTab, coinTab, subTab){
            this.tabArgs.topTab = topTab;
            this.tabArgs.coinTab = coinTab;
            this.tabArgs.subTab = subTab;
            this.tabArgs.code = this.$store.state.assets[subTab] ? this.$store.state.assets[subTab]['code'] : null;
            this.list.tab='list';//default limit orders
            this.resetOrderInfo(subTab);
            this.initList('list',1); 
        },
        onTabTwo(type,index){
            this.tabArgs['tabTwo'][type] = index;
        },
        onTabList(type){
            if(type=='record'){
                this.initList('record',1);
            }else if(type=='list'){
                this.initList('list',1);
            }
             this.list.tab = type || 'list';
        },
        resetOrderInfo(subTab){
            this.orderInfo = {
                'buy': {
                    price: null,
                    quantity: null,
                    typ: 'buy'
                },
                'sell': {
                    price: null,
                    quantity: null,
                    typ: 'sell'
                },
                'buy_market': {
                    price: null,
                    typ: 'buy_market'
                },
                'sell_market': {
                    quantity: null,
                    typ: 'sell_market'
                }
            }
        },
        // 挂单order/createorder
        createOrder(type){
            let _this = this;
            let toAsset = 'cny';
            if(_this.tabArgs.coinTab==1){
                toAsset='btc';//对btc交易区
            }else if(_this.tabArgs.coinTab==2){
                toAsset = 'eth';//对eth交易区
            }
            let _paypwd = null ;
            if(type.indexOf('buy')>-1){
                _paypwd = _this.buyPayPwd;
            }else if(type.indexOf('sell')>-1){
                _paypwd = _this.sellPayPwd;
            }
            let param = {
                category: _this.$store.state.assets[_this.tabArgs.subTab]['code'] + '_' + toAsset,
                price: _this.orderInfo[type].price,
                amount: _this.orderInfo[type].amount,
                quantity: _this.orderInfo[type].quantity,
                type: type,
                paypwd: _paypwd
            }
            this.$http('createorder', param).then(res => {
                 alert(res.msg);
            });
        }
    },
    computed: {
        buyTotal(){
            return this.orderInfo.buy.price * this.orderInfo.buy.quantity
        },
        sellTotal(){
            return this.orderInfo.sell.price * this.orderInfo.sell.quantity
        },
    },
    filters: {
        formatNum: function(value) {
            return Math.floor(value * 1000) / 1000;
        },
        calDivision: function(value, single){
            return Math.floor((value / single)* 1000) / 1000;
        },
        calDivision2: function(value, single){
            return (value / single);
        },
        calMulti(value, single){
            return Math.floor((value * single)* 1000) / 1000;
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
        margin-top: 14px;
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
        .head {
            position: relative;
            border-bottom: 1px solid #f2f2f5;
            .coin-nav{
                border-bottom: 2px solid #f2f2f5;
                li {
                    text-align: center;
                    box-sizing: border-box;
                    float: left;
                    height: 70px;
                    span{
                        box-sizing: border-box;
                        display: inline-block;
                        margin-top: 23px;
                        border-radius: 4px;
                        min-width: 78px;
                        padding: 0 20px;
                        line-height: 32px;
                        &.on{
                            color: #fff;
                            background: #589cff;
                        }

                    }
                }
            }
            .sub-nav{
                display: flex;
                flex-wrap: wrap;
                padding: 0 46px 0 0;
                position: relative;
                .sub-nav-item{
                    width: 132px;
                    text-align: center;
                    line-height: 43px;
                    box-sizing: border-box;
                    // &.t-left{
                    //     text-align: left;
                    //     padding-left: 8px;
                    //     width: 91px;
                    // }
                    &.on{
                        border-bottom: 3px solid #0f88ed;
                    }
                }
                .open{
                    position: absolute;
                    right: -6px;
                    top: 14px;
                    color: #999999;
                    .arrows {
                        width: 12px;
                        display: inline-block;
                        margin-left: 6px;
                    }
                }
            }
        }
    }

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
