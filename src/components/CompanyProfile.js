// const handle = this.props.params.handle;

// getCompany(handle);

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CompanyProfile = ({ currentCompany, grabCompany, match, props }) => {
  if (!currentCompany.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to Linked List!</h1>
        <Link to="/companies/signup">Sign up here</Link>
      </div>
    );
  }
  const companyHandle = props.match.params.handle;
  console.log("CompanyProfile match.params=", props.match.params);

  const foundCompany = grabCompany(companyHandle);
  return <h1>You (as a Company) are logged in! {foundCompany.name}</h1>;
};

CompanyProfile.propTypes = {
  currentCompany: PropTypes.object,
  grabCompany: PropTypes.function
};

export default CompanyProfile;
