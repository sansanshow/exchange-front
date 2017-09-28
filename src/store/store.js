import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// state321321123
const state = {
    userInfo: null,
    username: null,
    userTab: 1,
    isLogin: false,
    socketData:{
    },
    assets:[
        {name:'BTC',code:'btc'},
        {name:'ETH',code:'eth'}
    ]
}

// mutations
/**
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
    }
}
// actions  -- 主要用来提交 mutations 中的事物
const actions = {
    updateUser: ({ commit,state}, newUser = {}) => {
        newUser = Object.assign({}, newUser);
        commit('UPDATE_USER', newUser);
    },
    updateSocketData({commit,state},socketInfo = {}){
        commit('UPDATE_SOCKETDATA', socketInfo);
    },
    onClickUserTab: ({ commit,state}, tab) => {
        commit('ON_CLICK_USERTAB', tab);
    }
}

// getters
const getters = {
    getUser(state, getters){
        return state.userInfo
    },
    getUserId(state, getters){
        return state.userInfo.id
    }
}


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;