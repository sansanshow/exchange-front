import axios from 'axios'  
import qs from 'qs'  
// let baseURL = "http://192.168.0.232:8089";
let baseURL = "";
import cache from '../mixin/store'
axios.interceptors.request.use(config => {  
  // store.commit('UPDATE_LOADING',true) //显示loading  
  return config  
}, error => {  
  return Promise.reject(error)  
})  
  
  
axios.interceptors.response.use(response => {  
  return response  
}, error => {  
  return Promise.resolve(error.response)  
})  
  
function errorState(response) {  
  console.log(response);
  // store.commit('UPDATE_LOADING',false)  //隐藏loading 
  // 如果http状态码正常，则直接返回数据  
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {  
    return response  
      // 如果不需要除了data之外的数据，可以直接 return response.data  
  }else{  
    aleralert("网络异常");
    // Vue.prototype.$msg.alert.show({  
    //         title: '提示',  
    //         content: '网络异常'  
    // })  
  }  
    
}  
  
function successState(res) {  
  if(res.status != 0){
    // alert(res.msg);
  }

  return;
  // store.commit('UPDATE_LOADING',false) //隐藏loading  
  //统一判断后端返回的错误码  
  if(res.status != 0){  
       Vue.prototype.$msg.alert.show({  
            title: '提示',  
            content: res.data.errDesc||'网络异常',  
            onShow () {  
            },  
            onHide () {  
              console.log('确定')  
            }  
       })  
  }else if(res.data.errCode != '000002'&&res.data.errCode != '000000') {  
      Vue.prototype.$msg.alert.show({  
            title: '提示',  
            content: res.data.errDesc||'网络异常',  
            onShow () {  
  
            },  
            onHide () {  
              console.log('确定')  
            }  
       })  
  }  
}  

const httpServer = (opts, data = {}, config = {}) => { 
    let token = cache.getStore('_token');
    let uid = JSON.parse(cache.getStore('userInfo')) ? JSON.parse(cache.getStore('userInfo')).id : '';
    let defaultHeaders = opts.method=='get' ? { 
      // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, Token, Access-Control-Allow-Origin',
      // 'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
      // 'Access-Control-Allow-Origin': '*',
      // 'X-Requested-With': 'XMLHttpRequest',  
      // "Accept": "application/json",  
      // "Content-Type": "application/json; charset=UTF-8"  
      '_token': token || '',
      '_uuid': uid || ''
    }:{  
      // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, Token, Access-Control-Allow-Origin',
      // 'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
      // 'Access-Control-Allow-Origin': '*',
      // 'X-Requested-With': 'XMLHttpRequest',  
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
      '_token': token || '',
      '_uuid': uid || ''
    };
    if(config['headers']){
      defaultHeaders = Object.assign({},defaultHeaders,config['headers']);
      delete config.headers
    }
    let Public = {}//公共参数 
    let defaultOpts = { //http默认配置  
        method:opts.method,  
        // baseURL,  
        url: opts.url,  
        timeout: 100000,  
        params:Object.assign(Public, data),  
        data: (data instanceof FormData) ? data : qs.stringify(Object.assign(Public, data)),  
        headers: defaultHeaders
    }  
    let httpDefaultOpts = Object.assign({},defaultOpts,config);
    if(opts.method=='get'){  
      delete httpDefaultOpts.data  
    }else{  
      delete httpDefaultOpts.params  
    }  
      
    let promise = new Promise(function(resolve, reject) {  
      axios(httpDefaultOpts).then( (res) => { 
          successState(res)  
          resolve(res.data);
        }  
      ).catch( (response) => {  
          errorState(response)  
          reject(response)  
        }  
      )  
  
    })  
  return promise  
}  
  
export default httpServer  