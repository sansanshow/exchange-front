<template>
    <div class="content">
        <ui-head :options="headOptions"></ui-head>
        <div class="main">
            <div class="coin-list">
                <div class="coin-item" :class="{select: coinType == -1}" :key="-1" @click="onCoinTab(-1)">
                    人民币
                </div>
                <div class="coin-item" :class="{select: coinType == index}" v-for="(item, index) in $store.state.assets" :key="index" @click="onCoinTab(index)">
                    {{item.name}}
                </div>
            </div>
            <div class="sec-tips">
                <p>当前每日最高可返现2,000,000元</p>
            </div>

            <!-- 未实名认证 -->
            <template v-if="$store.state.userInfo.isAuth != 1"> 
                <div class="sec-nosec-no">
                    <p>根据您在本站的资金综合状况，为了您的资产安全，您需要进行初级实名认证，才能继续相关资金操作。</p>
                    <span class="btn btn-submit" @click="$to({name: 'userIdentity'})">
                         立即认证
                    </span>
                </div>
            </template>
            <template v-if="$store.state.userInfo.isAuth == 1">
                <!--人民币提现-->    
                <div v-if="type==4" class="form mr-t42">
                    <div class="form-row">
                        <div class="row-label">
                            选择银行
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="请选择银行">
                        </div>
                        <div class="row-tips">

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            可提现最大金额
                        </div>
                        <div class="row-field">
                            <div class="max-edu linHiht">0元</div>
                        </div>
                        <div class="row-tips">

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            提现金额
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="请输入提现金额">
                        </div>
                        <div class="row-tips">

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            资金密码
                        </div>
                        <div class="row-field flex">
                            <input type="password" class="flex-1" placeholder="请输入资金密码">
                        </div>
                        <div class="row-tips">

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            短信验证码
                        </div>
                        <div class="row-field flex ">
                            <input type="text" class="flex-1" placeholder="短信验证码">
                            <div class="btn btn-sms heig">
                                发送验证码
                            </div>
                        </div>
                        <div class="row-tips">

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            谷歌验证码
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="谷歌验证码">
                        </div>
                        <div class="row-tips">

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-field">
                            <div class="tbtn-submit">
                                确认提现
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="type==2" class="form mr-t42">
                    <div class="form-row linHiht">
                        <div class="row-label">提现地址</div>
                        <div class="row-field ">
                            <span @click="popupkg" class="ggColor" href="#">添加提现地址</span>
                            <span class="redColor">添加地址后才能提现</span>
                        </div>
                        <div class="row-tips"></div>
                    </div>
                    <!--选择以后的提现地址的样式-->
                    <div v-if="seen" class="form-row linHiht">
                        <div class="row-label">提现地址</div>
                        <div class="row-field ">
                           <div class="site">
                                <div class="site-info site-top">LTC</div>
                                <div class="site-info site-bottom">
                                    lgzPZcNJFFADJKLNMGasdfADF
                                    <p>LTC地址</p>
                                </div>
                           </div> 
                        </div>
                        <div class="row-tips lh">
                            <a class="xgbtn">修改</a>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            提币数量
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="请输入提币数量">
                        </div>
                        <div class="row-tips"></div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            可提现最大金额
                        </div>
                        <div class="row-field">
                            <div class="max-edu linHiht">0元</div>
                        </div>
                        <div class="row-tips"></div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            网络手续费
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="0.002">
                        </div>
                        <div class="row-tips"></div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            资金密码
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="请输入资金密码">
                        </div>
                        <div class="row-tips"></div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            短信验证码
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="短信验证码">
                            <div class="btn btn-sms">
                                发送验证码
                            </div>
                        </div>
                        <div class="row-tips"></div>
                    </div>
                    <div class="form-row">
                        <div class="row-label">
                            谷歌验证码
                        </div>
                        <div class="row-field flex">
                            <input type="text" class="flex-1" placeholder="谷歌验证码">
                        </div>
                        <div class="row-tips"></div>
                    </div>
                    <div class="form-row warning redColor">                      
                            注意：为了您提现处理快速，请留意提币/提现记录单的状态和描述，及时完成操作
                    </div>
                    <div class="form-row">
                        <div class="row-field">
                            <div class="tbtn-submit">
                                确认提现
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template>
                <!--弹窗-->
                <div v-if="popup" class="mask"></div>
                <div v-if="popup" class="popup">
                    <div class="close" @click="close()"></div>
                    <div class="popup-title">
                        添加BTC地址
                    </div>
                    <div class="line"></div>
                    <div class="popup-main">
                        <form action="">
                            <div class="input-row">
                                <div class="label-left">
                                    <label for="">接受地址</label>
                                </div>
                                <div class="input-right">
                                    <input type="text" placeholder="   填写正确的接收地址"><!--空格是故意的-->
                                </div>
                                
                             </div>
                             <div class="input-row">
                                <div class="label-left">
                                    <label for="">手机号码</label>
                                </div>
                                <div class="input-right">
                                    <input type="text" placeholder="   填写正确的手机号码">
                                </div>
                                
                             </div>
                             <div class="input-row">
                                <div class="label-left">
                                    <label for="">资金安全密码</label>
                                </div>
                                <div class="input-right">
                                    <input type="password" placeholder="   填写正确的接收地址">
                                </div>   
                             </div>
                             <div class="input-row">
                                <div class="label-left">
                                    <label for="">短信验证码</label>
                                </div>
                                <div class="send">
                                    <input type="text" placeholder="   填写正确的短信验证码">
                                    <div class="send-code">
                                        发送验证码
                                    </div>
                                </div>   
                             </div>
                             <div class="input-row">
                                <div class="label-left">
                                    <label for="">Google验证码</label>
                                </div>
                                <div class="input-right">
                                    <input type="text" placeholder="   Google验证码">
                                </div>   
                             </div>
                             <div class="add">添加</div>
                        </form>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>
<script>
import UiHead from '../../components/UiHead';
export default {
    components: {
        UiHead
    },
    data() {
        return {
            headOptions: {
                title: '提现'
            },
            seen:false,
            type: 4,
            coinType: -1,
            popup:false

        }
    },
    methods: {
        onCoinTab(index){
            this.coinType = index;
            if(index > -1){
                this.type = 2
            }else{
                this.type = 4;
            }
        },
        popupkg(){
            this.popup = true;
        },
        close(){
           this.popup = false; 
        }
    }
}
</script>
<style scoped>

.sec-nosec-no .btn{
        display: inline-block;
        font-size: 14px;
        color: #fff;
        line-height: 42px;
        width: 134px;
        border-radius: 4px;
        background: #0f88ed;
        margin-bottom: 76px;}
.sec-nosec-no{
        color: #666;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
        background: url('../../assets/images/bg-id.png') no-repeat;
        background-position: center 80px;
        padding-top: 166px;
       
        
}
 .sec-nosec-no p{
            margin-bottom: 36px;
        }
.mr-t42 {
    margin-top: 42px;
}

.row-field .max-edu {
    color: #ff5900;
}
.linHiht{
    line-height: 42px;
    position: relative;
    
}
.ggColor{
    color: #0084f1;
}
.redColor{
    color: #ff0000;
}
.warning{
    margin-left: 188px;
    font-size: 13px;

}
.tbtn-submit{
    width: 134px;
    height: 42px;
    background: #0084f0;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border-radius:3px;
    font-size: 14px;
    height: 42px;
    line-height: 42px;
    margin-left: 286px;

}
.site{
    background:#f6f7fc;
    height: 120px;
    width: 380px;
    border-radius: 4px;
    border: 1px solid #eee;
}
.site-info{
    padding-left: 17px;
    font-size:13px;

}
.site-top{
    border-bottom: 1px dashed #e7e7e7;
    font-weight: bold;
    color: #000;
}
.site-bottom{
    line-height: 30px;
    padding-top: 15px;
    color: #666666;
}
.site-bottom p{
    color:#9ca09f;
}
.xgbtn{
    position: absolute;
    border: 1px solid #c9c9c9;
    padding: 0 27px;
    height: 32px;
    line-height: 32px;
    font-size: #000;
    border-radius: 3px;
}
/******遮罩层******/
.mask{
    display: block;
    overflow: hidden;
    position: fixed;
    top:0%;
    left:0%;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 99;
    opacity: 0.6;
    filter: alpha(opacity=60);
    
}
.popup{
    display: block;
    position: relative;
    position: fixed;
    left: 35%;
    top:25%;
    width: 600px;
    height: 470px;
    background: #ffffff;
    z-index: 100;
    padding: 30px 20px;
}
.close{
    position: absolute;
    top: 10px;
    right:5px;
    background: url('../../assets/images/icon/icon-close.png') no-repeat;
    width: 15px;
    height:15px;
    padding:5px;
}
.popup-title{
    font-weight: bold;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    border-bottom: 1px solid #eeeeee;
}
.line{
    position: absolute;
    top:64px;
    width: 144px;
    height: 2px;
    background:#0084f0;
}
.popup-main{
    margin: 0 auto;
}
.input-row{
    display: flex;
    justify-content: flex-end;
    height: 40px;
    line-height: 40px;
    width:558px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.label-left{
    color: #99abbd;
    font-size: 14px;
    text-align: right;  
}
.input-right{
    display: flex;
    justify-content: space-between;
    height: 38px;
    width: 298px;
    border:1px solid #e6e9ea;
    color: #999;
    font-size: 12px;
    margin-left: 16px;
    margin-right: 70px;
    
}
.send{
 display: flex;
    justify-content: space-between;
    height: 38px;
    width: 298px;
    color: #999;
    font-size: 12px;
    margin-left: 16px;
    margin-right: 70px;
}
.send input{
    width: 170px;
    height: 38px;
    border: 1px solid #e6e9ea;
}
.send .send-code{
    width: 120px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #2194f1;
    text-align: center;
    color: #2194f1;
 
}
.input-right input:focus,.send input:focus{
    background: #faffbd;
}
.add{
    position: absolute;
    bottom: 100px;
    left:208px;
    width: 200px;
    height: 40px;
    background: #0f88ed;
    text-align: center;
    line-height:40px;
    color: #fff;
    border-radius: 4px;
}
</style>


