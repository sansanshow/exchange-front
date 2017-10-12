/**
 * mutations
 * store.commit('increment')
 * store.commit 传入额外的参数，�??? mutation �??? 载荷（payload）：
 */
const mutations = {
    INIT_LOGIN_INFO(){

    },
    UPDATE_USER(state, userInfo) {
        let uname = userInfo.username || '';
        if(userInfo.mobile){
           uname = userInfo.mobile;
        }else if(userInfo.email){
            uname = userInfo.email;
        }
        if(uname.length >= 6){
            var m = uname.substring(3, uname.length-3).replace(/./g, "*");
            uname = uname.substr(0,3) + m + uname.substr(uname.length-3);
        }
        if(userInfo.id > 0){
            state.isLogin = true;
        }else{
            state.isLogin = false;
        }
        state.userInfo = userInfo;
        state.username = uname;
    },
    ON_CLICK_USERTAB(state, tab){
        Object.assign(state.userTab, tab);
    },
    UPDATE_SOCKETDATA(state, data){
        let newData = Object.assign({}, state.socketData, data);
        state.socketData = newData;
    },
    UPDATE_LANGTYPE(state, data){
        state.langType = data;
    },
    CHANGE_ID_COUNTRY_LIST(state,type){ // 隐藏国家选择
        state.rootClick.countryShow = type;
    },
}
export default mutations;