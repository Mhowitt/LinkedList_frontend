import React, { Component } from "react";
import { apiCall } from "../services/api";
import Job from "./Job";

export default class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsData: []
        };
    }

    componentDidMount() {
        apiCall("get", "/jobs")
            .then(data => {
                let newState = {
                    ...this.state,
                    jobsData: data.data
                };
                this.setState(newState);
            })
            .catch(err => console.log("From componentDidMount: ", err));
    }

    render() {
        let jobs = this.state.jobsData.map(job => (
            <Job
                key={job._id}
                title={job.title}
                company={job.company.handle}
                salary={job.salary} // IF IT EXISTS
                equity={job.equity} // IF IT EXISTS
            />
        ));
        return (
            <div>{jobs}</div>
        );
    }
}