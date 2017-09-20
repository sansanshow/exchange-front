<template>
    <div class="container">
       <div class="i-banner">
            <div class="wrap1200 fix">
                <div class="i-login-form r">
                    <h2 class="i-form-title">登录</h2>
                    <div class="i-form-field">
                        <input type="text" name="" value="" placeholder="手机号">
                    </div>
                    <div class="i-form-field">
                        <input type="text" name="" value="" placeholder="密码">
                    </div>
                    <div class="i-form-field fix" style="padding-top: 6px;">
                        <a class="l" href="">验证码登录</a>
                        <a class="r" href="">忘记密码？</a>
                    </div>
                    <div class="i-form-field">
                        <button class="login-btn">登录</button>
                    </div>
                    <div class="i-form-field txt-fff" style="padding-top: 4px;">
                        <span>还没有账号？&nbsp;&nbsp;</span>
                        <a class="a-line" href="./register.html">点此注册</a>
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
                        <a href="">更多动态&nbsp;&gt;</a>
                    </div>
                </div>
            </div>
            <div class="wrap1200 details">
                <div class="i-title">
                    <div class="head-outer center">
                        <h2>实时行情</h2>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <ul class="coin-nav fix">
                    <li class="nav" :class="{ 'on' : tab==0 }" @click="onTab(0)">BTC</li>
                    <li class="nav" :class="{ 'on' : tab==1 }" @click="onTab(1)">LTC</li>
                    <li class="nav" :class="{ 'on' : tab==2 }" @click="onTab(2)">ETH</li>
                    <li class="nav" :class="{ 'on' : tab==3 }" @click="onTab(3)">BCC</li>
                    <li class="nav" :class="{ 'on' : tab==4 }" @click="onTab(4)">BTS</li>
                </ul>
                <div class="c-details flex">
                    <div class="item">
                        <div class="item-title">最新</div>
                        <div class="item-data">
                            1000
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">今日涨幅</div>
                        <div class="item-data">
                            1000
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">今日最高</div>
                        <div class="item-data">
                            1000
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">今日最低</div>
                        <div class="item-data">
                            1000
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">24小时成交量</div>
                        <div class="item-data">
                            1000
                        </div>
                    </div>
                </div>
                <!-- charts -->
                <div id="index-chart" class="d-chart"></div>
                <div class="btn-wrap center">
                    <a class="btn">查看更多行情并交易&nbsp;&gt;</a>
                </div>
            </div>
        </div>
        <!--最新资讯-->
        <div class="i-news">
            <div class="wrap1200 zixun">
                <div class="i-title">
                    <div class="head-outer center">
                        <h2>最新资讯</h2>
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
                    <a href="">查看更多资讯&nbsp;&gt;</a>
                </div>
            </div>
        </div>
        <!--新手指导-->
        <div class="i-guide">
            <div class="wrap1200 guides">
                <div class="i-title">
                    <div class="head-outer center">
                        <h2>新手指导</h2>
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
                    <a href="">查看更多&nbsp;&gt;</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    components:{
    },
    data(){
        return {
            tab:1,
            chartsOptions:{}
        }
    },
    mounted(){
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        let option = {
            tooltip: {
                trigger: 'axis',
                position: function(pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '大数据量面积图',
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [{
                name: '模拟数据',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }]
        };
        let myChart = echarts.init(document.getElementById("index-chart"));
        myChart.setOption(option);
    },
    created(){

    },
    methods: {
        onTab(index){
            this.tab = index;
            this.store.setStore('api',index);
        }
    }
}
</script>
<style scoped>
.i-banner {
    height: 380px;
    min-width: 1200px;
    background: url('../assets/images/i-banner.png') no-repeat center;
}
/* 实时动态 */

.i-current {
    background: #fff;
    height: 878px;
}

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


