import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const Card = styled.div`
    width: 70%;
    height: 100px;
    border-radius: 5px;
    border: 0.5px solid grey;
    margin: 10px auto;
    padding-left: 20px;
`;

const CompanyName = styled.strong`
    color: rgb(40, 150, 74);
`

// job.salary IF IT EXISTS
// job.equity IF IT EXISTS

const Job = ({ title, company, salary, equity }) => (
    <Card>
        <p>{title} <CompanyName>@{company}</CompanyName></p>
        {!!salary && (
            <p>{salary}K
                {!!equity && (
                    <span> | {equity}%</span>
                )}
            </p>
        )}
    </Card>
);

Job.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    salary: PropTypes.number,
    equity: PropTypes.number
}

export default Job;