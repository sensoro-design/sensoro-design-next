/**
 * title: 其他状态
 * desc: 失败、警告、成功等其他状态下操作，可出现不同样式的链接。
 */
import { Link, Button, Space, Divider } from '@sensoro-design/react';
import { useBoolean } from '@pansy/react-hooks';

import EditOutlined from '@sensoro-design/icons/EditOutlined';

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
      <Space direction="vertical">
        <span>
          <Link href="#" status="warning" disabled={disabled}>
            Warning Link
          </Link>
          <Divider type="vertical" />
          <Link href="#" status="warning" icon={<EditOutlined />} disabled={disabled}>
            Warning Link
          </Link>
        </span>
        <span>
          <Link href="#" status="error" disabled={disabled}>
            Error Link
          </Link>
          <Divider type="vertical" />
          <Link href="#" status="error" icon={<EditOutlined />} disabled={disabled}>
            Error Link
          </Link>
        </span>
        <span>
          <Link href="#" status="success" disabled={disabled}>
            Success Link
          </Link>
          <Divider type="vertical" />
          <Link href="#" status="success" icon={<EditOutlined />} disabled={disabled}>
            Success Link
          </Link>
        </span>
      </Space>
    </Space>
  )
}
