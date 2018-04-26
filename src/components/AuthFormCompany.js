import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

class AuthFormCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      handle: "",
      name: "",
      logo: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signIn ? "signin" : "signup";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/companies");
      })
      .catch(() => {
        // we failed to log in, display the error message
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, handle, name, logo } = this.state;
    const {
      signIn,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;
    history.listen(() => {
      removeError();
    });
    return (
      <div>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            {errors.message && <div>{errors.message}</div>}
            <div>
              <label htmlFor="handle">Company Handle</label>
              <input
                id="handle"
                name="handle"
                onChange={this.handleChange}
                type="text"
                value={handle}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
            </div>
            {!signIn && (
              <div>
                <div>
                  <label htmlFor="email">E-mail</label>
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    type="text"
                    value={email}
                  />
                </div>
                <div>
                  <label htmlFor="name">Company Name</label>
                  <input
                    id="name"
                    name="name"
                    onChange={this.handleChange}
                    type="text"
                    value={name}
                  />
                </div>
                <div>
                  <label htmlFor="logo">Upload a company Logo</label>
                  <input
                    id="logo"
                    name="logo"
                    onChange={this.handleChange}
                    type="text"
                    value={logo}
                  />
                </div>
              </div>
            )}
            <button type="submit">{buttonText}</button>
          </form>
        </Card>
      </div>
    );
  }
}
AuthFormCompany.propTypes = {
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  signIn: PropTypes.bool,
  removeError: PropTypes.func
};

export default AuthFormCompany;
