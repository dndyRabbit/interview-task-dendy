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
            <div class="text-center">
              <h4 style="color: #5e6282">Agung & Isti</h4>
            </div>
          </b-card>
        </div>
      </div>
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
                      <b-icon-check-circle class="h5" variant="success" />
                      <p>Verified</p>
                    </div>
                  </b-form-group>
                </b-col>

                <b-col>
                  <b-form-group label="Nomer Handphone">
                    <b-form-input
                      type="handphone"
                      placeholder="No. Handphone"
                      required
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
import axios from "axios";
import { mapGetters } from "vuex";
import { GET_USER_TOKEN_GETTER } from "../store/storeconstant";

export default {
  data() {
    return;
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
    }),
  },
  mounted() {
    axios
      .get("https://103.183.74.178:8888/api/v1/me", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
