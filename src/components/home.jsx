import React from 'react';
import { Icon, Layout, Row, Col, Button } from 'antd';

import AllIssuesList from './all-issues-list';
import AddIssue from './add-issue';

const Home = (props) => {
  return (
    <div className="home-page">
      <Row>
        <Col span={12} offset={6}>
          <AddIssue addIssue={props.addIssue}/>
          <h1>All issues</h1>
          <AllIssuesList issues={props.issues} details={props.details} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;