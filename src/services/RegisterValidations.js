import Validations from "./Validations";

export default class RegisterValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  checkValidation() {
    let errors = [];

    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid email.";
    }

    if (!Validations.minLength(this.password, 6)) {
      errors["password"] = "Password should be more than 6 character.";
    }

    return errors;
  }
}
