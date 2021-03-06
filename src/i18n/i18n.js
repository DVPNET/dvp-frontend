import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import zh from './langs/zh';
import en from './langs/en';
import ko from './langs/ko';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import koLocale from 'element-ui/lib/locale/lang/ko';


Vue.use(VueI18n)

const messages = {
    en: Object.assign(en, enLocale),
    zh: Object.assign(zh, zhLocale),
    ko: Object.assign(ko, koLocale)
}

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'en',
    messages,
    silentTranslationWarn: true
})


locale.i18n((key, value) => i18n.t(key, value));

export default i18n
