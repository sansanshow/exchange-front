import Vue from "vue";
import Vuex from "vuex";
import mutations from './muactions';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);

// state
const state = {
    userInfo: null,
    username: null,
    userTab: 1,
    isLogin: false,
    socketData:{
    },
    langType: 0,
    assets:[
        {name:'BTC',code:'btc'},
        {name:'ETH',code:'eth'}
    ],
    rootClick: { // 控制根上面的事件，使用注意冒泡影响
        countryShow: false,
    }
}

// mutations
/**
 * store.commit('increment')
 * store.commit 传入额外的参数，�??? mutation �??? 载荷（payload）：
 */
// const mutations = {
//     INIT_LOGIN_INFO(){

//     },
//     UPDATE_USER(state, userInfo) {
//         let uname = userInfo.username || '';
//         if(userInfo.mobile){
//            uname = userInfo.mobile;
//         }else if(userInfo.email){
//             uname = userInfo.email;
//         }
//         if(uname.length >= 6){
//             var m = uname.substring(3, uname.length-3).replace(/./g, "*");
//             uname = uname.substr(0,3) + m + uname.substr(uname.length-3);
//         }
//         if(userInfo.id > 0){
//             state.isLogin = true;
//         }else{
//             state.isLogin = false;
//         }
//         state.userInfo = userInfo;
//         state.username = uname;
//     },
//     ON_CLICK_USERTAB(state, tab){
//         Object.assign(state.userTab, tab);
//     },
//     UPDATE_SOCKETDATA(state, data){
//         let newData = Object.assign({}, state.socketData, data);
//         state.socketData = newData;
//     },
//     UPDATE_LANGTYPE(state, data){
//         state.langType = data;
//     },
//     CHANGE_ID_COUNTRY_LIST(state,type){ // 隐藏国家选择
//         state.rootClick.countryShow = type;
//     },
// }
// actions  -- 主要用来提交 mutations 中的事物
// const actions = {
//     updateUser: ({ commit,state}, newUser = {}) => {
//         newUser = Object.assign({}, newUser);
//         commit('UPDATE_USER', newUser);
//     },
//     updateSocketData({commit,state},socketInfo = {}){
//         commit('UPDATE_SOCKETDATA', socketInfo);
//     },
//     onClickUserTab: ({ commit,state}, tab) => {
//         commit('ON_CLICK_USERTAB', tab);
//     },
//     updateLangType: ({ commit,state}, index) => {
//         commit('UPDATE_LANGTYPE', index);
//     },
//     changeIdCountryList: ({ commit, state }, type) => {
//         commit('CHANGE_ID_COUNTRY_LIST',type);
//     },
// }

// getters
// const getters = {
//     getUser(state, getters){
//         return state.userInfo
//     },
//     getUserId(state, getters){
//         return state.userInfo.id
//     }
// }


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;