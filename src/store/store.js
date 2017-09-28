import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// state321321123
const state = {
    userInfo: {
    },
    userTab: 1
}

// mutations
/**
 * store.commit('increment')
 * store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
 */
const mutations = {
    UPDATE_USER(state, userInfo) {
        state.userInfo = userInfo;
    },
    ON_CLICK_USERTAB(state, tab){
        state.userTab = tab;
    }
}
// actions  -- 主要用来提交 mutations 中的事物
const actions = {
    updateUser: ({ commit,state}, newUser = {}) => {
        newUser = Object.assign({}, state.userInfo, newUser);
        commit('UPDATE_USER', newUser);
    },
    onClickUserTab: ({ commit,state}, tab) => {
        commit('ON_CLICK_USERTAB', tab);
    }
}

// getters 
const getters = {
    getUserId: state => {
        return state.userInfo.id
    }
}
const store = new Vuex.Store({   
    state,
    mutations,
    actions,
    getters
});

export default store;
