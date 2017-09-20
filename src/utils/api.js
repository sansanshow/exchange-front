/**
 * 请求地址总入口
 */ 
// let prefix = "http://192.168.0.232:8089/"
let prefix = "/api/"
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
    register: {
        name: '注册',
        url: prefix + 'register',  
        method: 'post'  
    },
    sendsms: {
        name: '注册-发送验证码',
        url: prefix + 'sendRegCode',  
        method: 'post'  
    }
    
}  
const API = {...serviceModule }
export default API;