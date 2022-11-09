import {
  GET_USER_DATA_ACTION,
  REGISTER_ACTION,
  REMOVE_USER_DATA_TOKEN,
  SET_USER_TOKEN_MUTATION,
} from "../../storeconstant";

export default {
  [SET_USER_TOKEN_MUTATION](state, payload) {
    state.access_token = payload.access_token;
    state.refresh_token = payload.refresh_token;
  },

  [GET_USER_DATA_ACTION](state, payload) {
    state.access_token = payload.data.data.access_token;
    state.refresh_token = payload.data.data.refresh_token;
    state.data = payload.data.data;
  },

  [REMOVE_USER_DATA_TOKEN](state, payload) {
    state.access_token = payload.access_token;
    state.refresh_token = payload.refresh_token;
    state.data = payload.data;
  },
  [REGISTER_ACTION](state, payload) {},
};
