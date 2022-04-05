/**
 * title: 支持更多内容配置
 * desc: `actions` 字段接收一个 `ReactNode` 数组，用于展示底部按钮组。
 * background: var(--color-fill-2)
 */
import { Card, Avatar, Typography } from '@sensoro-design/react';

import MoreOutlined from '@sensoro-design/icons/MoreOutlined';
import HeartOutlined from '@sensoro-design/icons/HeartOutlined';
import StarOutlined from '@sensoro-design/icons/StarOutlined';

const { Meta } = Card;

export default () => {
  return (
    <Card
    className="card-with-icon-hover"
    style={{ width: 360 }}
    cover={
      <div
        style={{
          height: 204,
          overflow: 'hidden',
        }}
      >
        <img
          style={{ width: '100%', transform: 'translateY(-20px)' }}
          alt="dessert"
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
        />
      </div>
    }
    actions={[
      <span className="icon-hover">
        <StarOutlined />
      </span>,
      <span className="icon-hover">
        <HeartOutlined />
      </span>,
      <span className="icon-hover">
        <MoreOutlined />
      </span>,
    ]}
  >
    <Meta
      avatar={
        <div style={{ display: 'flex', alignItems: 'center', color: '#1D2129' }}>
          <Avatar size={24} style={{ marginRight: 8 }}>
            A
          </Avatar>
          <Typography.Text>Username</Typography.Text>
        </div>
      }
      title="Card Title"
      description="This is the description"
    />
  </Card>
  )
}
