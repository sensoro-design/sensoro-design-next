/**
 * title: 标题
 * desc: 展示不同级别的标题。
 */
import React from 'react';
import { Typography } from '@sensoro-design/react';

export default () => {
  return (
    <Typography>
      <Typography.Title>
        H1. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={2}>
        H2. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={3}>
        H3. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={4}>
        H4. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={5}>
        H5. The Pragmatic Romanticism
      </Typography.Title>
      <Typography.Title heading={6}>
        H6. The Pragmatic Romanticism
      </Typography.Title>
    </Typography>
  )
}

