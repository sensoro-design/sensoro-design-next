/**
 * title: 不同尺寸的开关
 * desc: 通过指定 `size` 可以得到不同尺寸的开关。
 */
import { Switch, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
      <Switch />
      <Switch size="small" />
      <Switch type="round" />
      <Switch size="small" type="round" />
      <Switch type="line" />
      <Switch size="small" type="line" />
    </Space>
  )
}
