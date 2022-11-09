<template>
  <b-container style="margin-top: 55px; background: #f9f3f2" class="h-auto">
    <b-card class="bg-transparent border-0">
      <b-row>
        <b-col class="mb-5">
          <b-card-text
            style="
              font-style: normal;
              font-weight: 700;
              font-size: 30px;
              line-height: 40px;
              letter-spacing: 0.1em;
              color: #8a7f77;
              margin-bottom: 20px;
            "
          >
            Sign In
          </b-card-text>
          <b-card-text
            style="
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: 30px;
              color: #402b2b;
              margin-bottom: 10px;
            "
          >
            Masuk, dan buat undangan pernikahan kamu, kemudian share undangan
            kamu,
          </b-card-text>
          <b-form @submit.prevent="onLogin()">
            <div class="alert alert-danger" v-if="login.error">
              *{{ login.error }}
            </div>
            <!-- <b-form-invalid-feedback class="danger" v-if="login.errors.email">{{
              login.errors.email
            }}</b-form-invalid-feedback> -->
            <b-form-input
              v-model="login.email"
              placeholder="Alamat Email"
              class="px-4 py-2 mb-3"
              style="border: 1; border-color: #c5ae96; border-radius: 5px"
            />

            <b-form-text class="error" v-if="login.errors.password">{{
              login.errors.password
            }}</b-form-text>
            <b-form-input
              v-model="login.password"
              placeholder="Password"
              type="password"
              class="px-4 py-2"
              style="
                border: 1;
                border-color: #c5ae96;
                border-radius: 5px;
                margin-bottom: 35px;
              "
            />

            <div class="d-flex align-items-center justify-content-between">
              <p
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 24px;
                  text-transform: uppercase;
                  color: #d5a26e;
                "
              >
                lupa password?
              </p>
              <b-button
                type="submit"
                class="d-flex align-items-center justify-content-center shadow-sm"
                style="
                  width: 220px;
                  height: 60px;
                  background: #d5a26e;
                  border-radius: 5px;
                  border: 0;
                "
              >
                <p
                  style="
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: #ffffff;
                    margin-top: 10px;
                  "
                >
                  Sign In
                </p>
              </b-button>
            </div>
          </b-form>
        </b-col>

        <b-col cols="2">
          <Line />
        </b-col>

        <b-col>
          <label
            style="
              font-style: normal;
              font-weight: 700;
              font-size: 30px;
              line-height: 40px;
              letter-spacing: 0.1em;
              color: #8a7f77;
            "
            class="justify-content-end d-flex"
          >
            DAFTAR
          </label>
          <label
            style="
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: 30px;
              color: #402b2b;
              text-align: end;
              margin-bottom: 10px;
            "
          >
            Buat Undangan Pernikahan Digital Kamu dengan elegan, your
            alternative wedding invitation
          </label>
          <b-form @submit.prevent="onRegister()">
            <b-form-text class="errors" v-if="register.errors.email">{{
              register.errors.email
            }}</b-form-text>
            <b-form-input
              v-model="register.email"
              placeholder="Alamat Email"
              class="px-4 py-2 mb-3"
              style="border: 1; border-color: #c5ae96; border-radius: 5px"
            />
            <b-form-input
              v-model="register.phone"
              placeholder="Nomor HP"
              class="px-4 py-2 mb-3"
              style="border: 1; border-color: #c5ae96; border-radius: 5px"
            />
            <b-form-input
              v-model="register.groom"
              placeholder="Nama Panggilan Laki-Laki"
              class="px-4 py-2 mb-3"
              style="border: 1; border-color: #c5ae96; border-radius: 5px"
            />
            <b-form-input
              v-model="register.bride"
              placeholder="Nama Panggilan Perempuan"
              class="px-4 py-2 mb-3"
              style="border: 1; border-color: #c5ae96; border-radius: 5px"
            />
            <b-form-text class="errors" v-if="register.errors.password">{{
              register.errors.password
            }}</b-form-text>
            <b-form-input
              v-model="register.password"
              placeholder="Password"
              class="px-4 py-2"
              type="password"
              style="
                border: 1;
                border-color: #c5ae96;
                border-radius: 5px;
                margin-bottom: 20px;
              "
            />

            <b-button
              type="submit"
              class="d-flex align-items-center justify-content-between w-100 px-4"
              style="
                height: 60px;
                background: #d5a26e;
                border-radius: 5px;
                border: 0;
              "
            >
              <p
                style="
                  font-style: normal;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 19px;
                  letter-spacing: 0.05em;
                  text-transform: uppercase;
                  color: #ffffff;
                  margin-top: 10px;
                "
              >
                Buat UndanganMu Sekarang
              </p>
              <b-icon-arrow-right
                class="h4"
                style="font-weight: 700; color: #ffffff"
              >
              </b-icon-arrow-right>
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import LoginValidations from "../services/LoginValidations";
import RegisterValidations from "../services/RegisterValidations";
import { mapActions } from "vuex";
import { LOGIN_ACTION, REGISTER_ACTION } from "../store/storeconstant";
import Line from "../components/Line.vue";

export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
        errors: [],
        error: "",
      },
      register: {
        email: "",
        password: "",
        phone: "",
        bride: "",
        groom: "",
        errors: [],
        error: "",
      },
    };
  },
  mounted() {
    if (
      window.localStorage.getItem("access_token") !== null &&
      this.$route.path === "/auth"
    ) {
      console.log("THIS IS FROM HOME TO ROUTE");
      this.$router.push("/"); // redirect to home, for example
    } else {
      console.log("fail");
    }
  },
  methods: {
    ...mapActions("auth", {
      loginAction: LOGIN_ACTION,
      registerAction: REGISTER_ACTION,
    }),

    async onLogin() {
      // Chek the validation
      let loginValidations = new LoginValidations(
        this.login.email,
        this.login.password
      );

      this.login.errors = loginValidations.checkValidation();

      if (this.login.errors.length) {
        return false;
      }

      try {
        await this.loginAction({
          email: this.login.email,
          password: this.login.password,
        });
        window.location.href = "/";
      } catch (err) {
        this.login.error = err;
      }
    },

    async onRegister() {
      let registerValidations = new RegisterValidations(
        this.register.email,
        this.register.password
      );
      this.register.errors = registerValidations.checkValidation();
      if (this.register.errors.length) {
        return false;
      }

      try {
        await this.registerAction({
          email: this.register.email,
          password: this.register.password,
          phone: this.register.phone,
          bride: this.register.bride,
          groom: this.register.groom,
        });

        window.location.href = "/";
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    Line,
  },
};
</script>
