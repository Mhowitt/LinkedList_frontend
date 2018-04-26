import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { logoutCompany } from "../store/actions/authCompany";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  logoutCompany = e => {
    e.preventDefault();
    this.props.logoutCompany();
  };

  render() {
    return (
      <nav>
        {this.props.currentUser.isAuthenticated ? (
          <ul>
            <li>
              <a href="/logout" onClick={this.logout}>
                Log out
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signin">User Log in</Link>
            </li>
            <li>
              <Link to="/companies/signin">Company Log in</Link>
            </li>
          </ul>
        )}
        {this.props.currentCompany.isAuthenticated ? (
          <ul>
            <li>
              <a href="/logout" onClick={this.logoutCompany}>
                Log out Company
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/companies/signin">Company Log in</Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    currentCompany: state.currentCompany
  };
}

Navbar.propTypes = {
  currentUser: PropTypes.object.isRequired,
  currentCompany: PropTypes.object.isRequired,
  logoutCompany: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout, logoutCompany })(Navbar);
