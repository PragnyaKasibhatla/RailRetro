import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: localStorage.getItem("Users")
        ? JSON.parse(localStorage.getItem("Users"))
        : [],
      email: "",
      password: "",
      UserType: "customer",
      RegisterUserType: "customer",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  onValueChange = (e) => {
    this.setState({
      UserType: e.target.value,
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleSubmit = (e) => {
    var apiBaseUrl = "http://localhost:8000/api/authentication/";
    var self = this;
    var payload = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.UserType,
    };
    let emailToMatch = this.state.email;
    function matchFound(user) {
      return emailToMatch === user.email;
    }
    let user = this.state.users.findIndex(matchFound);
    if (user === -1) {
      this.state.users.push({
        email: this.state.email,
        password: this.state.password,
        role: this.state.UserType,
      });
      localStorage.setItem("Users", JSON.stringify(this.state.users));
      alert("Registration Successful");
    } else {
      alert("User Already Exist");
    }

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <fieldset>
          <form className="demoForm" onSubmit={this.handleSubmit}>
            <legend className="loginLabel">Register</legend>

            <div>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Min 6 Characters"
                value={this.state.password}
                onChange={this.handleUserInput}
              />
            </div>

            <div>
              <input
              className="radio"
                type="radio"
                value="customer"
                checked={this.state.UserType === "customer"}
                onChange={this.onValueChange}
                style={{left:"800px"}}
              />
              <input
              className="radio"
                type="radio"
                value="restaurant"
                checked={this.state.UserType === "restaurant"}
                onChange={this.onValueChange}
                style={{left:"600px"}}
              />
             
            </div>
            <label style={{position:"relative", left:"910px"}} htmlFor="Customer">Customer</label>
            <label style={{position:"relative", left:"950px"}} htmlFor="Restaurant">Restaurant</label>
            <input
              type="submit"
              value="Register"
              disabled={!this.state.formValid}
            />

            <div className="error-message"></div>
          </form>
        </fieldset>
      </div>
    );
  }
}
export default Register;