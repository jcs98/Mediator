import React, { Component } from 'react';
import { Icon, Input, Button, Select, notification } from 'antd';
import DetailIcon from './detail-icons'
const Option = Select.Option;

class AddIssueDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      type: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  selectChange(value) {
    this.setState({ type: value });
    console.log(value)
  }

  handleSubmit() {
    const detailType = this.state.type;
    const message = this.state.message;
    console.log(detailType, message);
    if(message === '') return;
    console.log("adding")
    this.props.addIssueDetail(this.props.currentIssueId, detailType, message);
    notification['success']({ message: 'Added Successfully!' });
    this.setState({ message: '' });
  }

  render() {

    const children = [];
    for (let i = 0; i < 5; i++) {
      const detailIcon = DetailIcon(i);
      children.push(<Option value={i}><Icon type={detailIcon.icon} style={{ fontSize: '20px', color: detailIcon.color }} /></Option>);
    }

    return (
      <div className="add-issue-detail">
        <Select onChange={this.selectChange} defaultValue={<Icon type="message" style={{ fontSize: '20px', color: "blue" }} />}>
          {children}
        </Select>
        <Input className="new-detail" placeholder="I'll start working on it soon" value={this.state.message} onChange={this.handleChange} />
        <Button onClick={this.handleSubmit} type="primary" shape="circle" icon="check" htmlType="submit" />
      </div>
    );
  }
}

export default AddIssueDetail;