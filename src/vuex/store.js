import Vue from 'vue'
import Vuex from 'vuex'
import {detectionStore} from "./detection.module";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        detectionStore
    },
    plugins: [
        createPersistedState({storage: window.sessionStorage})
    ],
    state: {
        BMZuser: {},
        CSuser: {},
        Vuluser: {},
        lang: localStorage.getItem("locale") || 'en'
    },
    getters: {
        //获取白帽子登录信息
        getBMZuser: state => {
            return state.BMZuser
        },
        //获取厂商登录信息
        getCSuser: state => {
            return state.CSuser
        },
        getVuluser: state => {
            return state.Vuluser
        },
        getLang: state => {
            return state.lang;
        }
    },
    actions: {
        //获取白帽子登录信息
        setBMZuser({commit}, item) {
            commit('setBMZuser', item)
        },
        //获取厂商登录信息
        setCSuser({commit}, item) {
            commit('setCSuser', item)
        },
        setVuluser({commit}, item) {
            commit('setVuluser', item)
        },
        clearUser({commit}) {
            commit('clearUser')
        },
    },
    mutations: {
        //设置白帽子登录信息
        setBMZuser(state, item) {
            if (item) {
                state.BMZuser = JSON.parse(item)
            }
        },
        //设置厂商登录信息
        setCSuser(state, item) {
            if (item) {
                state.CSuser = JSON.parse(item)
            }
        },
        //清除厂商登录
        clearUser(state) {
            state.CSuser = {};
            state.BMZuser = {};
        },
        setVuluser(state, item) {
            if (item) {
                state.Vuluser = JSON.parse(item)
            }
        },
        clearVulUser(state) {
            state.Vuluser = {};
        },
        setLang(state, l) {
            localStorage.setItem("locale", l);
            state.lang = l;
        }
    }
});


