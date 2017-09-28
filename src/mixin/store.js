const store = {
    /**
     * 存储localStorage
     */
    setStore(name, content){
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },

    /**
     * 获取localStorage
     */
    getStore(name){
        if (!name) return;
        return window.localStorage.getItem(name);
    },

    /**
     * 删除localStorage
     */
    removeStore(name) {
        if (!name) return;
        window.localStorage.removeItem(name);
    },
    /**
     * 删除 全部 localStorage
     */
    removeAll() {
        localStorage.clear();
    },
    /**
     * 存储cookie 有效期两小时
     * @param {*} name 
     * @param {*} value 
     */
    setCookie(name,value) {   
        var exp  = new Date(); 
        exp.setTime(exp.getTime() + 2*60*60*1000);  
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/;";
    },
    /**
     * 获取cookie
     * @param {*} name 
     */
    getCookie(name){
        // console.log(document.cookie);       
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));  
        if(arr != null) return unescape(arr[2]); return null;  
    },
    /**
     * 删除cookie
     * @param {*} name 
     */
    delCookie(name){  
        var exp = new Date();  
        exp.setTime(exp.getTime() - 1*24*60*60*1000);  
        var cval=getCookie(name);  
        if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/;";  
    },
    /**
     * 清空所有cookie
     */
    clearCookie(){
        var exp = new Date();  
        exp.setTime(exp.getTime() - 1*24*60*60*1000);
        var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i =  keys.length; i--;)
                document.cookie=keys[i]+'=0;expires=' +exp.toUTCString()+";path=/;domain=.";
        }    
    }


}
export default store;