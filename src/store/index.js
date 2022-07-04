import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        coll: false,
        cul: null,
        tabList: [{ path: "/", uname: "首页", icon: "home", name: "home" }],
    },
    getters: {},
    mutations: {
        col(st) {
            st.coll = !st.coll;
        },
        tab(state, val) {
            if (val.name !== "home") {
                state.cul = val;
                const result = state.tabList.findIndex(
                    (state) => state.name === val.name
                );
                if (result === -1) {
                    state.tabList.push(val);
                }
            } else {
                state.cul = null;
            }
        },
        des(state, val) {
            const result = state.tabList.findIndex(
                (state) => state.name === val.name
            );
            state.tabList.splice(result, 1);
        },
    },
    actions: {},
    modules: {},
});