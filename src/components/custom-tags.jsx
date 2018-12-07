import React from 'react';
import { Tag } from 'antd';

export const CustomTags = ({ tags }) => {
  let tagColor = "";
  let type = "";
  let customTags = [];

  tags.forEach(tag => {

    switch (tag) {
      case 0: type = "priority"; tagColor = "#f50"; break;
      case 1: type = "announcement"; tagColor = "#3cb371"; break;
      case 2: type = "help required"; tagColor = "#551a8b"; break;
      case 3: type = "inventory needed"; tagColor = "#2db7f5"; break;
      case 4: type = "IT"; tagColor = "#108ee9"; break;
      case 5: type = "other"; tagColor = "#A9A9A9"; break;
      default: type = "other"; tagColor = "#A9A9A9"; break;
    }
    customTags.push(
      <Tag key={tag} color={tagColor} >
        {type}
      </Tag>
    );
  });
  return customTags;
}