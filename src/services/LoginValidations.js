import Validations from "./Validations";

export default class LoginValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  checkValidation() {
    let errors = [];

    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid email.";
    }

    if (!Validations.minLength(this.password, 3)) {
      errors["password"] = "Password should be more than 3 character.";
    }

    return errors;
  }

  static getErrorMessageFromCode(errorCode) {
    switch (errorCode) {
      case "error":
        return "User Not Found.";
      case "fail":
        return "The email must be a valid email address.";
      default:
        return "Unexpected error occurred. Please try again";
    }
  }
}
