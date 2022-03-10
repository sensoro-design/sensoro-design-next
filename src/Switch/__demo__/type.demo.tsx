
/**
 * title: 不同类型
 * desc: 有三种类型的开关可供选择。
 */
import { Switch, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
    <Switch />
    <Switch type="round" />
    <Switch type="line" />
  </Space>
  )
}
