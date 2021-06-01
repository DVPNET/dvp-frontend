import {createNamespacedHelpers} from 'vuex';
let domain = process.env.API_ROOT;
import {posToken, geToken} from "../apis/apiPath";

export const detectionStore = {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        sendCode({commit}, params){
            return posToken("/api/user/contract/detect", params);
        },
    },
};

export const detectionStoreHelper = createNamespacedHelpers('detectionStore');
