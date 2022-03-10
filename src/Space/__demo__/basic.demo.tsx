
/**
 * title: 基本用法
 * desc: 间距组件的基本用法。
 */
import { Space, Button, Switch, Tag } from '@sensoro-design/react';

export default () => {
  return (
    <Space>
      <Tag color='arcoblue'>Tag</Tag>
      <Button type="primary">Item1</Button>
      <Button type="primary">Item2</Button>
      <Switch defaultChecked />
    </Space>
  )
}
