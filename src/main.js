// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import store from "./vuex/store";
import "babel-polyfill";
import App from "./App";
import layout from "./components/layout";
import VueRouter from "vue-router";
import routes from "./router/index.js";
import echarts from "echarts";
import Es6Promise from "es6-promise";
//import VueI18n from 'vue-i18n'     //中英文翻译
import ElementUI from "element-ui";
import i18n from "./i18n/i18n";
import ajax from "./apis/apiPath";
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/index.js";
import BackToTop from "vue-backtotop";
import "../static/font/iconfont.css";
//swiper引用
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
// vue富文本编辑样式
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// vue富文本编辑样式
import VueStickto from "vue-stickto";
//无缝滚动
import vueSeamlessScroll from "vue-seamless-scroll";
import "../src/assets/scss/reset-element.scss";

//微信二维码生成
import VueQArt from "vue-qart";

import "../static/css/DH_style.mobile.scss";

//设置cookie缓存跨域问题
axios.defaults.withCredentials = true;
Vue.config.productionTip = false;

//定义全局变量
Vue.prototype.$http = axios;
Vue.prototype.$ajax = ajax;
Vue.prototype.$echarts = echarts;
Es6Promise.polyfill();
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueQuillEditor);
//Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper);
Vue.use(VueStickto);
Vue.use(vueSeamlessScroll);
Vue.use(BackToTop);
// 创建路由实例
const router = new VueRouter({
    mode: "history",
    routes
});

Vue.directive("enterToNext", {
    inserted: function (el) {
        //let frm = el.querySelector('.el-form');
        let inputs = el.querySelectorAll("input");
        //绑定回写事件
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("keyFocusIndex", i);
            inputs[i].addEventListener("keyup", ev => {
                if (ev.keyCode === 13) {
                    let targetTo = ev.srcElement.getAttribute("keyFocusTo");
                    if (targetTo) {
                        this.$refs[targetTo].$el.focus();
                    } else {
                        var attrIndex = ev.srcElement.getAttribute("keyFocusIndex");
                        var ctlI = parseInt(attrIndex);
                        if (ctlI < inputs.length - 1) inputs[ctlI + 1].focus();
                    }
                }
            });
        }
    }
});

router.beforeEach((to, from, next) => {
    //	window.addEventListener('load', function () {
    //	  log(to)
    //	  log(from)
    //	})
    if (to.meta.title) {
        // document.title = to.meta.title;
    }
    let token = window.localStorage.getItem("token");
    if (
        to.matched.some(record => record.meta.requiresAuth) &&
        (!token || token === null)
    ) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenType");
        localStorage.clear();
        next({
            path: "/login",
            query: {redirect: to.fullPath}
        });
    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    i18n,
    store,
    components: {layout},
    template: "<layout/>"
});
