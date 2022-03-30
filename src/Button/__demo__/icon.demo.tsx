/**
 * title: 图标按钮
 * desc: Button 可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等。
 */
import { Button, Space } from '@sensoro-design/react';
import PlusOutlined from '@sensoro-design/icons/PlusOutlined';
import DeleteOutlined from '@sensoro-design/icons/DeleteOutlined';

export default () => {
  return (
    <Space size="large">
      <Button type="primary" icon={<PlusOutlined />} />
      <Button type="primary" icon={<PlusOutlined />}> Primary </Button>
      <Button type="secondary" icon={<DeleteOutlined />}> Secondary </Button>
      <Button type="dashed" bordered={false} icon={<DeleteOutlined />}> Dashed </Button>
      <Button type="dashed" icon={<DeleteOutlined />}> Dashed </Button>
    </Space>
  )
}
