/**
 * title: 动画
 * desc: 骨架屏显示动画效果。
 */
import React from 'react';
import { Skeleton, Switch, Avatar, Typography } from '@sensoro-design/react';

export default class DemoSkeleton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  onChange = (value) => {
    this.setState({
      loading: !this.state.loading,
    });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 40 }}>
          <Typography.Text style={{ marginRight: 8 }}>Animation</Typography.Text>
          <Switch
            style={{ verticalAlign: 'middle' }}
            size="small"
            onChange={this.onChange}
            checked={this.state.loading}
          />
        </div>
        <Skeleton
          loading={this.state.loading}
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
    );
  }
}
