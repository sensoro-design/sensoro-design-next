/**
 * title: 图标按钮
 * desc: Button 可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等。
 */
import { Button, Space } from '@sensoro-design/react';
import { IconPlus, IconDelete } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Space size="large">
      <Button type="primary" icon={<IconPlus />} />
      <Button type="primary" icon={<IconDelete />}> Delete</Button>
      <Button type="secondary" icon={<IconDelete />}> Delete</Button>
    </Space>
  )
}
