import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, notification } from 'antd';
import { CustomTags } from './custom-tags';
const FormItem = Form.Item;
const Option = Select.Option;


class AddIssue extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let tags = values.tags == undefined ? [] : values.tags;
        this.props.addIssue(values.title, values.body, tags);
        // console.log("form", values.title, values.body, values.tags);
        notification['success']({message: 'Issue Added Successfully!'});
        this.props.form.resetFields();
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

    return (
      <div className="issue-item">
        <h1>New Issue</h1>
        <Form onSubmit={this.handleSubmit} className="add-issue-form">
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input a title!' }],
            })(
              <Input placeholder="Title" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('body', {
              rules: [{ required: true, message: 'Please input the issue\'s body!' }],
            })(
              <Input placeholder="Body" />
            )}
          </FormItem>
          <FormItem>
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
          <FormItem>
            <Button type="primary" htmlType="submit" className="add-issue-form-button">
              Add
            </Button>
          </FormItem>
        </Form>

      </div>
    )
  }
}

export default Form.create()(AddIssue);