/**
 * title: 可交互
 * desc: 提供复制、编辑文本等功能。
 */
import React, { useState } from 'react';
import { Typography } from '@sensoro-design/react';

export default () => {
  const [str, setStr] = useState('Click the icon to edit this text.');
  return (
    <Typography>
      <Typography.Paragraph copyable>
        Click the icon to copy this text.
      </Typography.Paragraph>
      <Typography.Paragraph
        editable={{
          onChange: setStr,
        }}
      >
        {str}
      </Typography.Paragraph>
    </Typography>
  );
}

