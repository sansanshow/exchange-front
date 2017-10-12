const getters = {
    getUser(state, getters){
        return state.userInfo
    },
    getUserId(state, getters){
        return state.userInfo.id
    }
}