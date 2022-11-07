import { SET_USER_TOKEN_MUTATION } from "../../storeconstant";

export default {
  [SET_USER_TOKEN_MUTATION](state, payload) {
    state.access_token = payload.access_token;
    state.refresh_token = payload.refresh_token;
  },
};
