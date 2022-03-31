/**
 * title: 最大值
 * desc: 设置 `maxCount`，可以限制最大显示的徽标数值，超过将会加 `+` 后缀。`maxCount` 默认为 `99`。
 */
import { Badge, Avatar, Space } from '@sensoro-design/react';

import UserOutlined from '@sensoro-design/icons/UserOutlined';

export default () => {
  return (
    <Space size={40}>
      <Badge count={100} maxCount={10}>
        <Avatar shape="square">
          <span>
            <UserOutlined />
          </span>
        </Avatar>
      </Badge>
      <Badge count={100}>
        <Avatar shape="square">
          <span>
            <UserOutlined />
          </span>
        </Avatar>
      </Badge>
      <Badge count={1000} maxCount={999}>
        <Avatar shape="square">
          <span>
            <UserOutlined />
          </span>
        </Avatar>
      </Badge>
    </Space>
  )
}
