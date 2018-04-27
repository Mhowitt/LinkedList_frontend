import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { apiCall } from "../services/api";
import withAuth from "../hocs/withAuth";

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let username = this.props.match.params.username;
    this.props.grabUserInfo(username);
    console.log("wtf");
  }

  render() {
    let { user } = this.props;
    return (
      <div>
        <h1> UserData </h1>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
      </div>
    );
  }
}

export default withRouter(withAuth(User));
