import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { apiCall } from "../services/api";

// /rupaul2

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { data: {} }
        };
    }

    componentDidMount() {
        let username = this.props.match.params.username;
        apiCall("get", `/users/${username}`)
            .then(data => {
                console.log("data from apiCall...", data);
                // this.props.dispatch(addJobList(data.data))
                this.setState({
                    user: data.data
                })
            })
            .catch(err => console.log("From componentDidMount: ", err));
    }

    // const username = props.match.params.username;
    // const foundUser = grabUser(username);
    render() {
        return (
            <div>
                <h1> UserData </h1>
                <p>{this.state.user.firstName}</p>
                <p>{this.state.user.lastName}</p>
                <p>{this.state.user.email}</p>
            </div>
        );
    }
}


export default withRouter(User);