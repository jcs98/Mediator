import React from 'react';
import { Timeline, Icon } from 'antd';

const DetailItem = ({detail}) => {
  return (
  <Timeline.Item 
  color={detail.color}
  dot={<Icon type={detail.type} style={{ fontSize: '20px' }} />}
  >
    <div class="detail">
      <span class="comment">{detail.message}</span>
      <span class="comment-detail">
        {/* <Avatar>U</Avatar> */}
        by {detail.author} on {detail.date}
      </span>
    </div>
  </Timeline.Item>
  );
}

export default DetailItem;