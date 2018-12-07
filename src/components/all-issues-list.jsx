import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IssueItem from './issue-item';

export default class AllPostsList extends Component {
  render() {

    let issues = [];
    this.props.issues.forEach(issue => {
      let detailCount = 0;
      this.props.details.forEach(detail => {
        if(issue.id === detail.issueId) detailCount++;
      });
      issues.push(<Link key={issue.id} to={"/details/"+issue.id}><IssueItem issue={issue} detailCount={detailCount}/></Link>);
    });

    return (
      <div className="all-issues-list">
        {issues}
      </div>
    )
  }
}
