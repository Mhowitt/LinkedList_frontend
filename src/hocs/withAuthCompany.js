import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default function(ComponentToBeRendered) {
  class AuthenticateCompany extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push("/companies/signin");
      }
    }

    componentDidUpdate(prevProps) {
      if (!prevProps.isAuthenticated) {
        this.props.history.push("/companies/signin");
      }
    }

    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentCompany.isAuthenticated
    };
  }

  AuthenticateCompany.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  };

  return connect(mapStateToProps)(AuthenticateCompany);
}
