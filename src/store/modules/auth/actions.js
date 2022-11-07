import axios from "axios";
import LoginValidations from "../../../services/LoginValidations";
import {
  GET_USER_TOKEN_MUTATION,
  LOADING_SPINNER_MUTATION,
  LOGIN_ACTION,
  SET_USER_TOKEN_MUTATION,
} from "../../storeconstant";
import https from "https";

export default {
  async [LOGIN_ACTION](context, payload) {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    const bodyData = {
      email: payload.email,
      password: payload.password,
    };

    context.commit(LOADING_SPINNER_MUTATION, true, { root: true });

    let res = "";
    try {
      res = await axios.post(
        "https://103.183.74.178:8888/api/v1/authenticate",
        bodyData,
        {
          httpsAgent: agent,
        }
      );
      console.log(res, "RESPONSE");
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
      localStorage.setItem(
        "access_token",
        JSON.stringify(res.data.access_token)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(res.data.refresh_token)
      );
      context.commit(SET_USER_TOKEN_MUTATION, {
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
      });
    }
  },
};
