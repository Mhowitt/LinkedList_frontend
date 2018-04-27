import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { removeError } from "../store/actions/errors";
import { authUser, loginUser } from "../store/actions/auth";
import { grabUserInfo } from "../store/actions/user";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import withAuth from "../hocs/withAuth";
import JobList from "../containers/JobList";
import User from "../components/User";

const Main = props => {
  const {
    authUser,
    currentUser,
    errors,
    removeError,
    loginUser,
    grabUserInfo,
    user
  } = props;
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/signin"
          render={props => {
            if (currentUser.isAuthenticated) {
              return <Redirect to="/jobs" />;
            }
            return (
              <AuthForm
                buttonText="Log in"
                errors={errors}
                removeError={removeError}
                heading="Welcome Back."
                onAuth={loginUser}
                signIn
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            if (currentUser.isAuthenticated) {
              return <Redirect to="/jobs" />;
            }
            return (
              <AuthForm
                removeError={removeError}
                buttonText="Sign me up!"
                errors={errors}
                heading="Join Linked List today."
                onAuth={authUser}
                {...props}
              />
            );
          }}
        />

        <Route
          path="/users/:username"
          component={withAuth(() => (
            <User grabUserInfo={grabUserInfo} user={user} {...props} />
          ))}
        />

        <Route
          path="/secret"
          component={withAuth(() => <h1>Secret Page!</h1>)}
        />

        <Route path="/jobs" component={withAuth(() => <JobList />)} />

        <Route
          exact
          path="/"
          render={props => <Homepage {...props} currentUser={currentUser} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    user: state.user
  };
};

Main.propTypes = {
  signIn: PropTypes.func,
  signUp: PropTypes.func,
  authUser: PropTypes.func,
  loginUser: PropTypes.func,
  currentUser: PropTypes.object,
  removeError: PropTypes.func,
  errors: PropTypes.object,
  user: PropTypes.object
};

export default withRouter(
  connect(mapStateToProps, { loginUser, authUser, removeError, grabUserInfo })(
    Main
  )
);
