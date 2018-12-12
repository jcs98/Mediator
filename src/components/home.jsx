import React from 'react';
import { Icon, Layout, Row, Col, Button } from 'antd';

import AllIssuesList from './all-issues-list';
import AddIssue from './add-issue';

const Home = (props) => {
  return (
    <div className="home-page">
      <Row>
        <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 3 }} lg={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }}>
          <h1>All issues</h1>
          <AddIssue addIssue={props.addIssue}/>
          <AllIssuesList issues={props.issues} details={props.details} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;