/**
 * actions 
 */
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
    },
    updateLangType: ({ commit,state}, index) => {
        commit('UPDATE_LANGTYPE', index);
    },
    changeIdCountryList: ({ commit, state }, type) => {
        commit('CHANGE_ID_COUNTRY_LIST',type);
    },
}
export default actions;