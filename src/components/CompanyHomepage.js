import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CompanyHomepage = ({ currentCompany }) => {
  if (!currentCompany.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to Linked List!</h1>
        <Link to="/companies/signup">Sign up here</Link>
      </div>
    );
  }
  return <h1>You (as a Company) are logged in!</h1>;
};

CompanyHomepage.propTypes = {
  currentCompany: PropTypes.object
};

export default CompanyHomepage;
