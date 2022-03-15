/**
 * title: 其他状态
 * desc: 失败、警告、成功等其他状态下操作，可出现不同样式的链接。
 */
import { Link, Button, Space } from '@sensoro-design/react';
import { useBoolean } from '@pansy/react-hooks';

export default () => {
  const [disabled, disabledAction] = useBoolean(false);

  const handleClick = () => {
    disabledAction.toggle();
  }

  return (
    <Space direction="vertical">
      <Button onClick={handleClick}>
        Toggle Disabled
      </Button>
      <Space>
        <Link href="#" status="warning" disabled={disabled}>
          Warning Link
        </Link>
        <Link href="#" status="error" disabled={disabled}>
          Error Link
        </Link>
        <Link href="#" status="success" disabled={disabled}>
          Success Link
        </Link>
      </Space>
    </Space>
  )
}
