<template>
  <div>
    <b-container>
      <div class="d-flex w-100 justify-content-center">
        <div class="mb-3">
          <b-card class="bg-transparent border-0">
            <div
              class="p-2"
              style="
                border-radius: 50%;
                border: 5px solid #ffff;
                margin-bottom: 12px;
              "
            >
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                size="185.44px"
              ></b-avatar>
            </div>
          </b-card>
        </div>
      </div>
      <b-card class="bg-transparent border-0">
        <div class="text-center">
          <h4 style="color: #5e6282">
            {{ this.userData.fullname ?? "unknown & unknown" }}
          </h4>
        </div>
      </b-card>
      <div>
        <b-card class="border-0">
          <b-card-text>
            <b-form>
              <b-row>
                <b-col>
                  <b-form-group label="Email">
                    <b-form-input
                      type="email"
                      placeholder="Alamat Email"
                      required
                      :value="this.userData.email ?? this.useremail"
                      style="
                        border: 1;
                        border-color: #c5ae96;
                        border-radius: 5px;
                      "
                    ></b-form-input>
                    <div
                      class="d-flex mt-2 align-content-center justify-content-end gap-1"
                      style="font-size: 12px; font-style: normal"
                    >
                      <b-icon-check-circle
                        v-if="this.userData.is_email_verified"
                        class="h5"
                        variant="success"
                      />
                      <b-icon-x-circle v-else class="h5" variant="danger" />
                      <p v-if="this.userData.is_email_verified">Verified</p>
                      <p v-else>No verified</p>
                    </div>
                  </b-form-group>
                </b-col>

                <b-col>
                  <b-form-group label="Nomer Handphone">
                    <b-form-input
                      type="handphone"
                      placeholder="No. Handphone"
                      required
                      :value="this.userData.phone ?? this.userphone"
                      style="
                        border: 1;
                        border-color: #c5ae96;
                        border-radius: 5px;
                      "
                    ></b-form-input>
                    <div
                      class="d-flex mt-2 align-content-center justify-content-end gap-1"
                      style="font-size: 12px; font-style: normal"
                    >
                      <b-icon-x-circle class="h5" variant="danger" />
                      <p>Not Verified</p>
                    </div>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card-text>
        </b-card>
      </div>
      <div
        class="d-flex w-100 justify-content-center align-items-center"
        style="margin-top: 56px"
      >
        <button
          class="d-flex justify-content-center align-items-center border-0 bg-transparent gap-2"
        >
          <b-icon-power
            style="height: 24px; width: 24px"
            variant="secondary"
          ></b-icon-power>
          <b-card-text
            @click="onLogout()"
            style="
              font-size: 16px;
              font-weight: 700;
              color: #707c97;
              font-family: 'Poppins';
            "
          >
            LOG OUT
          </b-card-text>
        </button>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import {
  GET_USER_DATA_ACTION,
  GET_USER_TOKEN_GETTER,
  LOGOUT_ACTION,
} from "../store/storeconstant";

export default {
  data() {
    return {
      useremail: "",
      userphone: "",
    };
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
    }),

    ...mapState("auth", {
      userData: (state) => state.data,
    }),
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    ...mapActions("auth", {
      getData: GET_USER_DATA_ACTION,
      logoutAction: LOGOUT_ACTION,
    }),

    onLogout() {
      try {
        this.logoutAction();
        this.$router.push("/auth");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
