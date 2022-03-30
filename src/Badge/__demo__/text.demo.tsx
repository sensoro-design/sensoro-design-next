/**
 * title: 文本内容
 * desc: 设置 `text`，可设置自定义提示内容。
 */
import { Badge, Avatar, Space } from '@sensoro-design/react';

import UserOutlined from '@sensoro-design/icons/UserOutlined';

export default () => {
  return (
    <Space size={40}>
      <Badge text="NEW">
        <Avatar shape="square">
          <span>
            <UserOutlined />
          </span>
        </Avatar>
      </Badge>
      <Badge text="HOT">
        <Avatar shape="square">
          <span>
            <UserOutlined />
          </span>
        </Avatar>
      </Badge>
    </Space>
  )
}
