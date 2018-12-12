import React, { Component } from 'react';
import { Form, Avatar, Input, Button, Select, notification, Row, Col } from 'antd';
import { CustomTags } from './custom-tags';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class AddIssue extends Component {

  constructor(props) {
    super(props);
    this.state = { issueSubmitted: false }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let tags = values.tags == undefined ? [] : values.tags;
        this.props.addIssue(values.title, values.body, tags);
        // console.log("form", values.title, values.body, values.tags);
        notification['success']({ message: 'Issue Added Successfully!' });
        this.props.form.resetFields();
        this.setState({ issueSubmitted: !this.state.issueSubmitted });
        console.log("Submitting...", this.state.issueSubmitted);
        setTimeout(() => this.setState({ issueSubmitted: !this.state.issueSubmitted }), 1000);
      }
    });
  }


  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const children = [];
    for (let i = 0; i < 6; i++) {
      children.push(<Option key={i}><CustomTags tags={[i]} /></Option>);
    }

    let issueClass = ["new-issue"];
    if (this.state.issueSubmitted) {
      issueClass.push('on-submit-issue');
    }

    return (
      <div className={issueClass.join(' ')}>
        <Form onSubmit={this.handleSubmit} className="add-issue-form">
          <Row>
            <Col lg={{ span: 1 }} xs={{ span: 4 }}>
              <Avatar icon="user" />
            </Col>
            <Col lg={{ span: 12, offset: 1 }} xs={{ span: 20 }}>
              <FormItem>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please input a title!' }],
                })(
                  <Input placeholder="New Issue Title" />
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            {getFieldDecorator('body', {
              rules: [{ required: true, message: 'Please input the issue\'s body!' }],
            })(
              <TextArea placeholder="New Issue Body" />
            )}
          </FormItem>
          <Row>
            <Col span={22}>
              <FormItem className="last-row">
                {getFieldDecorator('tags', {
                  rules: [],
                })(
                  <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Tags"
                    onChange={this.handleChange}
                  >
                    {children}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={1} offset={1}>
              <Button type="primary" shape="circle" icon="check" htmlType="submit" />
            </Col>
          </Row>
        </Form>

      </div>
    )
  }
}

export default Form.create()(AddIssue);