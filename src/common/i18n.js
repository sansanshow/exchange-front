import Vue from "vue";
import Vuex from "vuex";
import VueI18n from 'vue-i18n'
import messagesEn from './lang/en'
import messagesZh from './lang/zh'

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: '',
    messages: {
        en: {
            message: messagesEn
        },
        zh: {
            message: messagesZh
        }
    }
})

export default i18n;