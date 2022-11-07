import { GET_USER_TOKEN_GETTER } from "../../storeconstant";

export default {
  [GET_USER_TOKEN_GETTER]: (state) => {
    return state.access_token;
  },
};
