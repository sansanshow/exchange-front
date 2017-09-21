import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// state
const state = {
    userInfo: {
    }
}

// mutations
/**
 * store.commit('increment')
 * store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
 */
const mutations = {
    UPDATE_USER(state, userInfo) {
        state.userInfo = userInfo;
    }
}
// actions  -- 主要用来提交 mutations 中的事物
const actions = {
    updateUser: ({ commit,state}, newUser = {}) => {
        newUser.newProps = 'newProps'
        newUser = Object.assign({}, state.userInfo, newUser);
        console.log(newUser);
        commit('UPDATE_USER', newUser);
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
