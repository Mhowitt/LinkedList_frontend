import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { removeError } from "../store/actions/errors";
import { authCompany, loginCompany } from "../store/actions/authCompany";
import { grabCompanyInfo } from "../store/actions/company";
import CompanyHomepage from "../components/CompanyHomepage";
import AuthFormCompany from "../components/AuthFormCompany";
import CompanyProfile from "../components/CompanyProfile";
import withAuthCompany from "../hocs/withAuthCompany";

const CompanyMainContainer = props => {
  const {
    authCompany,
    currentCompany,
    grabCompanyInfo,
    company,
    errors,
    removeError,
    loginCompany
  } = props;
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/companies/signin"
          render={props => {
            if (currentCompany.isAuthenticated) {
              return <Redirect to="/companies" />;
            }
            return (
              <AuthFormCompany
                buttonText="Log in"
                errors={errors}
                removeError={removeError}
                heading="Welcome Back."
                onAuth={loginCompany}
                signIn
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/companies/signup"
          render={props => {
            if (currentCompany.isAuthenticated) {
              return <Redirect to="/companies" />;
            }
            return (
              <AuthFormCompany
                removeError={removeError}
                buttonText="Sign my company up!"
                errors={errors}
                heading="Join Linked List today."
                onAuth={authCompany}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/companies/:handle"
          component={withAuthCompany(() => (
            <CompanyProfile
              grabCompanyInfo={grabCompanyInfo}
              company={company}
              {...props}
            />
          ))}
        />
        <Route
          path="/companies/secret"
          component={withAuthCompany(() => <h1>Secret Company Page!</h1>)}
        />

        <Route
          exact
          path="/companies"
          render={props => (
            <CompanyHomepage {...props} currentCompany={currentCompany} />
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentCompany: state.currentCompany,
    company: state.company,
    errors: state.errors
  };
};

CompanyMainContainer.propTypes = {
  signIn: PropTypes.func,
  signUp: PropTypes.func,
  authCompany: PropTypes.func,
  loginCompany: PropTypes.func,
  currentCompany: PropTypes.object,
  company: PropTypes.object,
  removeError: PropTypes.func,
  errors: PropTypes.object
};

export default withRouter(
  connect(mapStateToProps, {
    loginCompany,
    authCompany,
    grabCompanyInfo,
    removeError
  })(CompanyMainContainer)
);

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// // Some folks find value in a centralized route config.
// // A route config is just data. React is great at mapping
// // data into components, and <Route> is a component.

// ////////////////////////////////////////////////////////////
// // first our route components
// const Company = () => <h2>Company Signin</h2>;

// const HomepageCompany = () => <h2>Sandwiches</h2>;

// const Tacos = ({ routes }) => (
//   <div>
//     <h2>Tacos</h2>
//     <ul>
//       <li>
//         <Link to="/tacos/bus">Bus</Link>
//       </li>
//       <li>
//         <Link to="/tacos/cart">Cart</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

// const Bus = () => <h3>Bus</h3>;
// const Cart = () => <h3>Cart</h3>;

// ////////////////////////////////////////////////////////////
// // then our route config
// const companyRoutes = [
//   {
//     path: "/companies",
//     component: withAuthCompany(CompanyHomepage),
//     routes: [
//       {
//         path: "/companies/signin",
//         exact: true,
//         component: AuthFormCompany
//       },
//       {
//         path: `/companies/:handle`,
//         exact: true,
//         component: withAuthCompany(CompanyProfile)
//       },
//       {
//         path: `/companies/:handle/edit`,
//         exact: true,
//         component: withAuthCompany(CompanyProfile)
//       }
//     ]
//   }
// ];

// // wrap <Route> and use this everywhere instead, then when
// // sub routes are added to any route it'll work
// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     render={props => (
//       // pass the sub-routes down to keep nesting
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

// const RouteConfigExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/tacos">Tacos</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches">Sandwiches</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   </Router>
// );
