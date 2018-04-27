import React, { Component } from "react";
import { apiCall } from "../services/api";
import { connect } from "react-redux";
import Job from "../components/Job";
import { addJobList } from "../store/actions/jobs"

class JobList extends Component {
    componentDidMount() {
        apiCall("get", "/jobs")
            .then(data => {
                console.log("data from apiCall...", data);
                this.props.dispatch(addJobList(data.data))
            })
            .catch(err => console.log("From componentDidMount: ", err));
    }

    render() {
        console.log("JobList render");
        let jobs = this.props.jobList.map(job => (
            <Job
                key={job._id}
                title={job.title}
                company={job.company.handle}
                salary={job.salary}
                equity={job.equity}
            />
        ));
        return (
            <div>{jobs}</div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log("JobList mapStateToProps state=", state);
    return {
        jobList: state.jobList.jobList
    }
}

export default connect(mapStateToProps)(JobList);