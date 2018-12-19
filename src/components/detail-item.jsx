import React from 'react';
import { Timeline, Icon } from 'antd';
import DetailIcons from './detail-icons';

const DetailItem = ({detail}) => {

  const detailIcon = DetailIcons(detail.type);

  return (
  <Timeline.Item 
  color={detailIcon.color}
  dot={<Icon type={detailIcon.icon} style={{ fontSize: '20px' }} />}
  >
    <div className="detail">
      <span className="comment">{detail.message}</span>
      <span className="comment-detail">
        {/* <Avatar>U</Avatar> */}
        by {detail.author} on {detail.date}
      </span>
    </div>
  </Timeline.Item>
  );
}

export default DetailItem;