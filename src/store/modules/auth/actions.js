import axios from "axios";
import LoginValidations from "../../../services/LoginValidations";
import {
  GET_USER_DATA_ACTION,
  GET_USER_TOKEN_MUTATION,
  LOADING_SPINNER_MUTATION,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  REGISTER_ACTION,
  REMOVE_USER_DATA_TOKEN,
  SET_USER_TOKEN_MUTATION,
} from "../../storeconstant";
import axiosAPI from "../../../services/Axios";
import { setAccessToken, setRefreshToken } from "../../../utils/token";

export default {
  async [LOGIN_ACTION](context, payload) {
    const bodyData = {
      email: payload.email,
      password: payload.password,
    };

    context.commit(LOADING_SPINNER_MUTATION, true, { root: true });

    let res = "";
    try {
      res = await axiosAPI.post("authenticate", bodyData);
    } catch (err) {
      context.commit(LOADING_SPINNER_MUTATION, false, { root: true });
      console.log(err, "ERROR");
      let errorMessage = LoginValidations.getErrorMessageFromCode(
        err.response.data.status
      );

      throw errorMessage;
    }
    context.commit(LOADING_SPINNER_MUTATION, false, { root: true });
    if (res.status === 200) {
      setAccessToken(res.data.data.access_token);
      setRefreshToken(res.data.data.refresh_token);

      context.commit(SET_USER_TOKEN_MUTATION, {
        access_token: res.data.data.access_token,
        refresh_token: res.data.data.refresh_token,
      });
    }
  },

  async [REGISTER_ACTION](context, payload) {
    const bodyData = {
      email: payload.email,
      password: payload.password,
      phone: payload.phone,
      bride: payload.bride,
      groom: payload.groom,
    };

    context.commit(LOADING_SPINNER_MUTATION, true, { root: true });

    let res = "";
    try {
      res = await axiosAPI.post("register", bodyData);
    } catch (err) {
      context.commit(LOADING_SPINNER_MUTATION, false, { root: true });
      console.log(err, "ERROR");
    }
    context.commit(LOADING_SPINNER_MUTATION, false, { root: true });

    if (res.status === 200) {
      if (res.status === "success") {
        setAccessToken(res?.data?.data?.user?.access_token);
        setRefreshToken(res?.data?.data?.user?.refresh_token);
        context.commit(SET_USER_TOKEN_MUTATION, {
          access_token: res?.data?.data?.user?.access_token,
          refresh_token: res?.data?.data?.user?.refresh_token,
        });
      } else {
        return console.log(res?.data?.data?.message);
      }
    }
  },

  async [GET_USER_DATA_ACTION](context, payload) {
    try {
      const response = await axiosAPI.get("me");

      console.log(response.data);
      if (response.status === 200) {
        context.commit(GET_USER_DATA_ACTION, { data: response.data });
      }
    } catch (err) {
      console.log(err, "ERR");
    }
  },

  [LOGOUT_ACTION](context) {
    context.commit(REMOVE_USER_DATA_TOKEN, {
      access_token: "",
      refresh_token: "",
      data: {},
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },
};
