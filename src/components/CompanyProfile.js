import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { apiCall } from "../services/api";

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let handle = this.props.match.params.handle;
    console.log("Here's the handle: " + handle);
    this.props.grabCompanyInfo(handle);
  }

  render() {
    let { company } = this.props;
    console.log("Here's the rendered" + company);
    return (
      <div>
        <h1>You (as a Company) are logged in! {company.name}</h1>

        <p>{company.name}</p>
        <p>{company.email}</p>
        <p>{company.handle}</p>
      </div>
    );
  }
}

CompanyProfile.propTypes = {
  currentCompany: PropTypes.object,
  grabCompanyInfo: PropTypes.function,
  company: PropTypes.object
};

export default withRouter(CompanyProfile);
