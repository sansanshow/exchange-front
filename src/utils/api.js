/**
 * 请求地址总入�?
 */
import project from '../../config/project.js'
let prefix = project.projectConfig['default'].baseURL + '/' + ( project.projectConfig['default'].rootPath ? project.projectConfig['default'].rootPath + '/' : '')
// let prefix = "/api/"
// let prefix = "/"
const serviceModule = {
    test: {
        name: '说明文字',
        url: 'http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600',
        method: 'get'
    },
    login: {
        name: '登录',
        url: prefix + 'login',
        method: 'post'
    },
    loginOut: {
        name: '�?出登�?',
        url: prefix + 'loginOut',
        method: 'get'
    },
    register: {
        name: '注册',
        url: prefix + 'register',
        method: 'post'
    },
    sendsms: {
        name: '注册-发�?�验证码',
        url: prefix + 'sendRegCode',
        method: 'post'
    },
    sendVCode: {
        name: '修改-绑定-发�?�验证码',
        url: prefix + 'sendVCode',
        method: 'post'
    },
    changeMobile: {
        name: '修改-手机',
        url: prefix + 'account/changemobile',
        method: 'post'
    },
    bindAccount:{
        name: '绑定-手机或邮箱',
        url: prefix + 'account/bind',
        method: 'post'
    },
    fileUpload: {
        name: '实名认证-图片上传',
        url: prefix + 'fileUpload/loadFile',
        method: 'post'
    },
    identify: {
        name: '实名认证',
        url: prefix + 'account/identify',
        method: 'post'
    },
    changepwd:{
        name:"修改-登录密码",
        url:prefix + 'account/changepwd',
        method: 'post'
    },
    setfundpwd:{
        name:'资金密码-设置/修改',
        url:prefix + 'account/resetasset',
        method: 'post'
    },
    gauthGene:{
        name:'谷歌验证�?-信息生成',
        url:prefix + 'account/gener',
        method: 'post'
    },
    googleBind:{
        name:'谷歌验证�?-绑定',
        url:prefix + 'account/gbind',
        method: 'post'
    },
    googleChange:{
        name:'谷歌验证�?-修改',
        url:prefix + 'account/chgbind',
        method: 'post'
    },
    createorder: {
        name:'挂单接口',
        url:prefix + 'order/createorder',
        method: 'post'
    },
    userAsset:{
        name:'账户资产',
        url:prefix+'customerAsset/cnySpotAssetQuery',
        method:'post'
    },
    orderList: {
        name: '限价委托-交易记录',
        url: prefix+'order/list',
        method:'post'
    },
    orderRecordList: {
        name: '计划委托-委托历史接口',
        url: prefix+'order/recordList',
        method:'post'
    },
    addBankCard: {
        name: '银行卡添加',
        url: prefix+'bankInfo/add',
        method:'post'
    },
}
const API = {...serviceModule }
export default API;
