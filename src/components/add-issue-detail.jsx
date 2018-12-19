import React from 'react';
import { Timeline, Icon, Input, Button, Select } from 'antd';
import DetailIcon from './detail-icons';
import { blue } from 'ansi-colors';
const Option = Select.Option;

const AddIssueDetail = () => {

  const children = [];
    for (let i = 0; i < 5; i++) {
      const detailIcon = DetailIcon(i);
      children.push(<Option key={i}><Icon type={detailIcon.icon} style={{ fontSize: '20px', color: detailIcon.color }} /></Option>);
    }

  return (
  <div className="add-issue-detail">
    <Select defaultValue={<Icon type="message" style={{ fontSize: '20px', color: "blue" }} />}>
      { children }
    </Select>
    <Input className="new-detail" placeholder="I'll start working on it soon"/>
    <Button type="primary" shape="circle" icon="check" htmlType="submit" />
  </div>
  );
}

export default AddIssueDetail;