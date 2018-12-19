import React from 'react';
import { Timeline, Icon } from 'antd';

const DetailItem = ({detail}) => {

  let detailColor, detailIcon;

  switch (parseInt(detail.type)) {
    case 0: detailIcon = "message"; detailColor = "blue"; break;
    case 1: detailIcon = "edit"; detailColor = "blue"; break;
    case 2: detailIcon = "check-circle-o"; detailColor = "green"; break;
    case 3: detailIcon = "clock-circle-o"; detailColor = "red"; break;
    case 4: detailIcon = "close-circle-o"; detailColor = "red"; break;
    default: detailIcon = "message"; detailColor = "blue"; break;
  }

  return (
  <Timeline.Item 
  color={detailColor}
  dot={<Icon type={detailIcon} style={{ fontSize: '20px' }} />}
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