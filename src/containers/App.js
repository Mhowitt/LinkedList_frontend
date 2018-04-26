import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import { setCurrentCompany } from "../store/actions/authCompany";
import Navbar from "./Navbar";
import Main from "./Main";
import jwtDecode from "jwt-decode";
import CompanyMainContainer from "./CompanyMainContainer";

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually setting a key of 'jwtToken' in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Main />
        <CompanyMainContainer />
      </div>
    </Router>
  </Provider>
);

export default App;
