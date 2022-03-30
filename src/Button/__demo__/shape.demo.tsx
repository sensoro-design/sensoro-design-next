/**
 * title: 按钮形状
 * desc: utton 有多种形状，`square` - 长方形 **(默认)**, `circle` - 圆形, `round` - 全圆角。
 */
import { Button, Space } from '@sensoro-design/react';
import PlusOutlined from '@sensoro-design/icons/PlusOutlined';

export default () => {
  return (
    <Space size="large">
      <Button type="primary" icon={<PlusOutlined />} />
      <Button shape="circle" type="primary" icon={<PlusOutlined />} />
      <Button shape="round" type="primary">
        Primary
      </Button>
      <Button type="primary">Primary</Button>
    </Space>
  )
}
