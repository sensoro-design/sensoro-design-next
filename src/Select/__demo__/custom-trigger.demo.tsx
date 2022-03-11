/**
 * title: 自定义触发节点
 * desc: 设置 `triggerElement` 可以自定义触发下拉框的节点。
 */
import { useState } from 'react';
import { Select, Typography, Link } from '@sensoro-design/react';

const Option = Select.Option;

export default () => {
  const [text, setText] = useState('None');

  return (
    <div>
      <Select
        mode="multiple"
        onChange={(_, option) => {
          const array = option.map((item) => item.children);
          setText(array.join('，') || 'None');
        }}
        triggerElement={
          <Typography.Paragraph style={{ width: 345 }}>
            Favorite Cities：<Link>{text}</Link>
          </Typography.Paragraph>
        }
      >
        <Option value="1">Beijing</Option>
        <Option disabled value="2">
          Shanghai
        </Option>
        <Option value="3">Shenzhen</Option>
        <Option value="4">Wuhan</Option>
      </Select>
    </div>
  );
};
