import React, { Component } from "react";
import Register from "./Register";
import { Link } from "react-router-dom";
//import { useHistory } from "history";
//const history = createBrowserHistory();

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      users: [],
      email: "",
      password: "",
      UserType: "customer",
      RegisterUserType: "customer",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      loggedIn: false,
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

  handleClick = (e) => {
    //this.props.history.push("/registration");
    e.preventDefault();
  };
  handleSubmit = (e) => {
    var apiBaseUrl = "http://127.0.0.1:8000/api/authentication/login/";
    var self = this;
    var payload = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.UserType,
    };

    const loginOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    let userRoleToMatch = this.state.UserType;
    fetch(apiBaseUrl, loginOptions)
      .then((response) => response.json())
      .then((data) => {
        if (userRoleToMatch === "customer") {
          alert("Success - Customer");
          this.props.history.push("/CustomerDashboard");
          this.setState({ loggedIn: true });
        } else {
          alert("Success - Restaurent");
          this.props.history.push("/RestoDashboard");
          this.setState({ loggedIn: true });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });

    /*     console.log(this.props);
    console.log(this.state);
    const { history } = this.props;
    var self = this;
    var payload = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.UserType,
    };
    //const navigate = useNavigate();
    let registerUsers = JSON.parse(localStorage.getItem("Users"));
    if (registerUsers) {
      let emailToMatch = this.state.email;
      let userRoleToMatch = this.state.UserType;
      function matchEmail(user) {
        return emailToMatch === user.email;
      }
      let index = registerUsers.findIndex(matchEmail);
      if (index === -1) {
        alert("User Does Not Exist");
      } else {
        if (
          this.state.password === registerUsers[index].password &&
          userRoleToMatch === registerUsers[index].role
        ) {
          if (userRoleToMatch === "customer") {
            alert("Success - Customer");
            this.props.history.push("/CustomerDashboard");
            this.setState({ loggedIn: true });
          } else {
            alert("Success - Restaurent");
            this.props.history.push("/RestoDashboard");
            this.setState({ loggedIn: true });
          }
        } else {
          alert("Password Mismatch");
        }
      }
    } else {
      alert("User Does Not Exist");
    } */
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <label className="loginLabel">Login</label>

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
                placeholder="Password"
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
                style={{ left: "800px" }}
              />
              <input
                className="radio"
                type="radio"
                value="restaurant"
                checked={this.state.UserType === "restaurant"}
                onChange={this.onValueChange}
                style={{ left: "600px" }}
              />
              <br></br>
              <label
                style={{ position: "relative", left: "910px" }}
                htmlFor="Customer"
              >
                Customer
              </label>
              <label
                style={{ position: "relative", left: "950px" }}
                htmlFor="Restaurant"
              >
                Restaurant
              </label>
            </div>
            <input
              type="submit"
              value="Login"
              disabled={!this.state.formValid}
            />

            <div className="error-message"></div>
          </form>

          <div style={{ position: "relative", left: "980px" }}>
            <Link to="/Register">Register</Link>
          </div>
        </fieldset>
      </div>
    );
  }
}
export default Login;
