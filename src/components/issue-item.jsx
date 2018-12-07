import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';
import { CustomTags } from './custom-tags';
// import '../css/issue-item.css'

export default class IssueItem extends Component {
  render() {

    const Actions = ({ stars, comments }) => {
      // calculate no. of stars and comments here
      return (
        <span className="actions">
          <span>
            <Icon type="star-o" style={{ marginRight: 8 }} />
            {stars}
            <span> | </span>
            <Icon type="message" style={{ marginRight: 8 }} />
            {comments}
          </span>
        </span>
      );
    }

    return (
      <div className="issue-item">
        <div className="item-header">
        <span className="author-avatar">
          <Avatar >{this.props.issue.author[0].toUpperCase()}</Avatar>
        </span>
          <span className="title-detail">
            <h3 className="title">{this.props.issue.title}</h3>
            <p className="details">#{this.props.issue.id} opened on {this.props.issue.date} by {this.props.issue.author}</p>
          </span>
          <Actions stars={this.props.issue.stars} comments={this.props.detailCount}/>
        </div>
        <p className="body">{this.props.issue.body}</p>
        <CustomTags tags={this.props.issue.tags} />
      </div>
    )
  }
}
