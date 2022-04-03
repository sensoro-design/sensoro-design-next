/**
 * title: 动画
 * desc: 骨架屏显示动画效果。
 */
import React, { useState, } from 'react';
import { Skeleton, Switch, Avatar, Typography } from '@sensoro-design/react';

export default () => {
  const [loading, setLoading] = useState(true);

  const handleChange = () => {
    setLoading(prev => !prev);
  };

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Typography.Text style={{ marginRight: 8 }}>Animation</Typography.Text>
        <Switch
          style={{ verticalAlign: 'middle' }}
          size="small"
          onChange={handleChange}
          checked={loading}
        />
      </div>
      <Skeleton
        loading={loading}
        text={{ width: '90%' }}
        image={{ shape: 'circle' }}
        animation
      >
        <div style={{ display: 'flex' }}>
          <Avatar size={50} style={{ marginRight: 20 }}>
            Arco
          </Avatar>
          <Typography>
            <Typography.Paragraph style={{ margin: 0 }}>This is content, this is content, this is content</Typography.Paragraph>
            <Typography.Paragraph  style={{ margin: 0 }}>This is content, this is content</Typography.Paragraph>
            <Typography.Paragraph  style={{ margin: 0 }}>This is content, this is content</Typography.Paragraph>
          </Typography>
        </div>
      </Skeleton>
    </div>
  )
}
