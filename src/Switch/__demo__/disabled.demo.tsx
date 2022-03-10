
/**
 * title: 禁用状态
 * desc: 通过 `disabled` 设置 `Switch` 为禁用状态。
 */
import { Switch, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
      <Switch disabled />
      <Switch checked disabled />
      <Switch type="round" disabled />
      <Switch type="round" checked disabled />
      <Switch type="line" disabled />
      <Switch type="line" checked disabled />
    </Space>
  )
}

