import Vue from "vue";
import httpServer from '../utils/fetch'
import API from '../utils/api'
import store from './store'

import gHeader from '../components/gHeader';
import gFooter from '../components/gFooter';
//全局混合
Vue.mixin({
    components: {
        gHeader,
        gFooter
    },
    data() {
        return{
            header: true,
            footer: true,
            store: store,
            isLogin: false,
            wait: 5
        }
    },
    created(){
        this.store.getStore('_token');
    },
    methods: {
        $to(param) {
            this.$router.push(param);
        },
        $http(apiKey,param,config = {}){
            return httpServer(API[apiKey],param,config);
        }
    }
})