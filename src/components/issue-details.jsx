import React, { Component } from 'react';
import IssueItem from './issue-item';
import DetailItem from './detail-item';
import { Icon, Layout, Row, Col, Button, Timeline, Avatar } from 'antd';
const { Header, Content } = Layout;

export default class IssueDetails extends Component {

  render() {

    const currentIssue = this.props.issues.find(issue => {
      return issue.id == this.props.match.params.id;
    });

    let currentDetails = [];
    this.props.details.forEach(detail => {
      if (detail.issueId === currentIssue.id)
        currentDetails.push(<DetailItem detail={detail} />);
    });

    return (
      <div className="issue-details-page">
        <Row>
          <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 3 }} lg={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }}>
            <h1>Issue details</h1>
            <IssueItem issue={currentIssue} />
            <Col xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
              <span className="details">
                <Timeline>

                  {currentDetails.length > 0
                    ? currentDetails
                    : <p>--- There are no details yet for this issue ---</p>}

                </Timeline>
              </span>
            </Col>

          </Col>
        </Row>
      </div>
    )
  }
}
