import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { logoutCompany } from "../store/actions/authCompany";
import StyledNavBar from "../components/StyledNavBar";
import StyledButton from "../components/StyledButton";

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
      <div>
        <StyledNavBar>
          {this.props.currentUser.isAuthenticated ? (
            <StyledButton>
              <a href="/logout" onClick={this.logout}>
                Log out
              </a>
            </StyledButton>
          ) : (
            <StyledButton>
              <Link to="/signin"> User Log in </Link>
            </StyledButton>
          )}
          {this.props.currentCompany.isAuthenticated ? (
            <StyledButton>
              <a href="/logout" onClick={this.logoutCompany}>
                Log out Company
              </a>
            </StyledButton>
          ) : (
            <StyledButton>
              <Link to="/companies/signin">Company Log in</Link>
            </StyledButton>
          )}
        </StyledNavBar>
      </div>
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
