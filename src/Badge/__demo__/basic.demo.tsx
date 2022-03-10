
/**
 * title: 基础用法
 * desc: 基础的用法。只需指定 `count`，即可显示徽标。
 */
import { Badge, Avatar, Space } from '@sensoro-design/react';
import { IconClockCircle } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Space size={40}>
    <Badge count={9}>
      <Avatar shape="square" />
    </Badge>
    <Badge count={9} dot dotStyle={{ width: 10, height: 10 }}>
      <Avatar shape="square" />
    </Badge>
    <Badge
      count={<IconClockCircle style={{ verticalAlign: 'middle', color: 'var(--color-text-2)' }} />}
      dotStyle={{ height: 16, width: 16, fontSize: 14 }}
    >
      <Avatar shape="square" />
    </Badge>
  </Space>
  )
}
