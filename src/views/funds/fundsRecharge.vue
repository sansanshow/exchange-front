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
            <div class="section">
                <!-- 未实名认证 -->
                <template v-if="$store.state.userInfo.isAuth != 1"> 
                    <div class="sec-no">
                        <p>根据您在本站的资金综合状况，为了您的资产安全，您需要进行初级实名认证，才能继续相关资金操作。</p>
                        <span class="btn" @click="$to({name: 'userIdentity'})">
                            立即认证
                        </span>
                    </div>
                </template>
                <template v-if="$store.state.userInfo.isAuth == 1"> 
                    <div v-if="type==2" class="sec-wallet">
                        钱包地址：1MmwBeaSwL4TnDM73P2GYzuYj1prFCut1Y
                        <span class="link">复制钱包地址</span>
                        <div class="qrcode">
                            <img src="../../assets/images/temp/img-qrcode.png" alt="">
                        </div>
                        <div class="btn-wrap">
                            <div class="btn">立即认证</div>
                        </div>
                        <div class="sec-tips">
                            <p class="line1">禁止充值除BTC之外的其他资产，任何非BTC资产充值将不可找回</p>
                            <p>* 1. 往该地址充值，汇款完成，等待网络自动确认（10个确认）后系统自动到账</p>
                            <p>* 2. 为了快速到账，充值时可以适当提高网络手续费</p>
                        </div>
                    </div>
                    <div v-if="type==3" class="sec-bang">
                        <div class="bang-title">
                            网银转账
                        </div>
                        <p class="bang-sub">两步完成充值：1.绑定银行卡；2.网银转账充值</p>
                        <div class="form mr-t46">
                            <div class="form-row">
                                <div class="row-label">
                                    姓名
                                </div>
                                <div class="row-field flex">
                                    <input type="text" class="flex-1" v-model="bankInfoParam.cardHolderName" placeholder="请输入真实姓名">
                                </div>
                                <div class="row-tips">
                                
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="row-label">
                                    国籍
                                </div>
                                <div class="row-field">
                                    <div class="country-select"><p>中国(China)</p></div>
                                </div>
                                <div class="row-tips">
                                    
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="row-label">
                                    身份证号
                                </div>
                                <div class="row-field">
                                    <input type="text" v-model="bankInfoParam.idNumber" placeholder="请输入本人身份证号">
                                </div>
                                <div class="row-tips">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="row-label">
                                    选择银行
                                </div>
                                <div class="row-field">
                                    <input type="text" v-model="bankInfoParam.bankName" placeholder="请输入绑定银行">
                                </div>
                                <div class="row-tips">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="row-label">
                                    银行卡号
                                </div>
                                <div class="row-field">
                                    <input type="text" v-model="bankInfoParam.bankAccount" placeholder="请输入银行卡号">
                                </div>
                                <div class="row-tips">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="row-label">
                                    
                                </div>
                                <div class="row-field">
                                    <div class="btn btn-submit" @click="addBankCard">
                                        绑定银行卡
                                    </div>
                                </div>
                                <div class="row-tips">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="sec-tips">
                            <p class="line1">禁止充值除BTC之外的其他资产，任何非BTC资产充值将不可找回</p>
                            <p>* 1. 往该地址充值，汇款完成，等待网络自动确认（10个确认）后系统自动到账</p>
                            <p>* 2. 为了快速到账，充值时可以适当提高网络手续费</p>
                        </div>
                    </div>
                    <div v-if="type==4" class="sec-zhuan">
                        <div class="zhuan-title">
                            网银转账
                        </div>
                        <p class="zhuan-sub">两步完成充值：1.绑定银行卡；2.网银转账充值</p>
                        <div>
                            <h4 class="main-title">请使用已绑定的银行卡转账充值</h4>
                            <p class="sub-title">快速自动充值(7×24小时)</p>
                            <div class="zhuan-main flex">
                                <div class="pay">
                                    <div class="head">付款方</div>
                                    <div class="name">付款人:xx <span class="tips">(仅支持您本人银行卡充值)</span></div>
                                    <div class="account">
                                        <span>选择银行:</span>
                                        <span class="input">
                                            <span>招商银行</span>
                                            <span class="code">尾号:8888</span>
                                        </span>
                                    </div>
                                    <p class="last">请选择银行并使用相应网银/手机银行进行转账充值</p>
                                </div>
                                <div class="payee">
                                    <div class="head">收款方</div>
                                    <div class="name">收款人:上海xxxx网络科技有限公司</div>
                                    <div class="account">收款人帐号：100010000100010001000</div>
                                    <div class="bank">收款银行:建行上海浦东支行</div>
                                    <p class="last">请选择银行并使用相应网银/手机银行进行转账充值</p>
                                </div>
                            </div>
                        </div>
                        <div class="sec-tips">
                            <p class="line1">充值须知
                            <p>充值方式：仅限您实名并且已绑定的银行卡进行转账充值。</p>
                            <p>支持金额：单笔最低充值金额为 100 元.</p>
                            <p>温馨提示：充值成功后，您的资金将在30分钟内入账。</p>
                            <p>注意事项：非绑定银行卡的充值或低于100元的充值将于10个工作日内原路退回，如果您的资金超过10个工作日未退回，或充值遇到其他问题，</p>
                            <p>请联系客服。</p>
                        </div>
                    </div>
                </template>
            </div>
            <div class="records" v-if="type==1 || type==2">
                <table>
                    <thead> 
                        <tr>
                            <td style="width: 226px;">时间</td>
                            <td>流水号</td>
                            <td>金额</td>
                            <td>充值方式</td>
                            <td>状态</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 6" :key="i">
                            <td>2017-09-25 11:22:18</td>
                            <td>网页端登录</td>
                            <td><span class="ip">192.168.0.1</span><span class="area">上海</span></td>
                            <td>成功</td>
                            <td>成功</td>
                            <td>成功</td>
                        </tr>
                        <tr>
                            <td colspan="6">
                                暂无操作记录
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
</template>
<script>
import UiHead from '../../components/UiHead';
export default {
    components:{
      UiHead
    },
    data(){
        return {
            headOptions:{
                title: '充值/充币'
            },
            type: 3,
            coinType: -1,
            bankInfoParam:{
                bankName: '招商',
                branchName:'分行',
                bankAccount: '2103456812358888',
                cardHolderName: '李小华',
                idNumber: '510921199204080318',
                cardHolderMobile: '15908401995',
                isDefault: 0,
                bankProvince: '云南',
                bankCity: '昆明',
                isAuth: 1 
            }
        }
    },
    created(){

    },
    mounted(){

    },
    methods: {
       onCoinTab(index){
           this.coinType = index;
           if(index > -1){
               this.type = 2
           }else{
              this.type = 3 
           }
       },
       // 添加银行卡
       addBankCard(){           
           this.$http('addBankCard',this.bankInfoParam).then(res => {

           });
       }
    }
}
</script>
<style lang="less" scoped>
.section{
    margin-bottom: 20px;
    .btn{
        display: inline-block;
        font-size: 14px;
        color: #fff;
        line-height: 42px;
        width: 134px;
        border-radius: 4px;
        // margin-top: 36px;
        background: #0f88ed;
        margin-bottom: 76px;
    }
    .sec-no{
        color: #666;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
        background: url('../../assets/images/bg-id.png') no-repeat;
        background-position: center 80px;
        padding-top: 166px;
        p{
            margin-bottom: 36px;
        }
        
    }
    .sec-wallet{
        text-align: center;
        padding-top: 52px;
        .qrcode{
            margin-top: 32px;
            img{
                width: 146px;
                height: 146px;
            }
            margin-bottom: 28px;
        }
    }
    .sec-bang{
        .bang-title{
            text-align: center;
            width: 122px;
            height: 42px;
            line-height: 42px;
            border-bottom: 2px solid #0f88ed;
            color: #0f88ed;
        }
        .bang-sub{
            color: #666;
            padding: 22px 28px;
        }
        
    }
    .sec-zhuan{
        .zhuan-title{
            text-align: center;
            width: 122px;
            height: 42px;
            line-height: 42px;
            border-bottom: 2px solid #0f88ed;
            color: #0f88ed;
        }
        .zhuan-sub{
            color: #666;
            padding: 22px 28px;
        }
        .main-title{
            font-size: 16px;
            text-align: center;
            margin-bottom: 16px;
        }
        .sub-title{
            font-size: 14px;
            text-align: center;
            color: #999;
            margin-bottom: 12px;
        }
        .zhuan-main{
            width: 949px;
            height: 287px;
            margin: 0 auto;
            background: url('../../assets/images/person2com.png') no-repeat center;
            position: relative;
            text-align: center;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding-top: 26px;
            margin-bottom: 30px;
            
            .last{
                font-size: 12px;
                color: #666;
            }
            .payee{
                width: 448px;
                position: relative;
                .head{
                    position: relative;
                    font-size: 16px;
                    line-height: 46px;
                    margin-bottom: 22px;
                }
                .name{
                    margin-bottom: 28px;
                }
                .account{
                    margin-bottom: 30px;
                }
                .bank{
                    margin-bottom: 34px;
                }
            }
            .pay{
                width: 448px;
                position: relative;
                
                .head{
                    position: relative;
                    font-size: 16px;
                    line-height: 46px;
                    margin-bottom: 32px;
                }
                .name{
                    font-size: 14px;
                    margin-bottom: 20px;
                    .tips{
                        font-size: 12px;
                        color: #999;
                    }
                }
                .account{
                    line-height: 42px;
                    margin-bottom: 50px;
                    .input{
                        display: inline-block;
                        line-height: 42px;
                        width: 268px;
                        border: 1px solid #ccc;
                        text-align: left;
                        background-image: url('../../assets/images/icon-select.png');
                        background-repeat: no-repeat;
                        background-position: 244px center; 
                        span{
                            padding-left: 16px;
                            display: inline-block;
                        }
                        .code{
                            color: #999;
                        }
                    }
                }
            }
        }
        
    }
}
.records{
    // margin-top: 140px;
}
</style>


