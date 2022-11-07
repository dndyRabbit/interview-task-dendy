import { createStore } from "vuex";
import auth from "./modules/auth";
import { LOADING_SPINNER_MUTATION } from "./storeconstant";

const store = createStore({
  modules: {
    auth,
  },
  state() {
    return {
      loading: false,
    };
  },
  mutations: {
    [LOADING_SPINNER_MUTATION](state, payload) {
      state.loading = payload;
    },
  },
});

export default store;
