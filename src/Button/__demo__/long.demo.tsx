/**
 * title: 长按钮
 * desc: 按钮宽度随着容器宽度进行适配。
 */
import { Button, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space
      style={{
        width: 360,
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: 20,
      }}
      direction="vertical"
      size="large"
    >
      <Button type="primary" long>Primary</Button>
      <Button type="secondary" long>Secondary</Button>
      <Button type="dashed" long>Dashed</Button>
      <Button type="default" long>Default</Button>
      <Button type="text" long>Text</Button>
    </Space>
  )
}
