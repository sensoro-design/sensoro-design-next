/**
 * title: 图标
 * desc: 通过 `Icon` 属性设置带图标的链接，设置为 `true`时候显示默认图标。
 */
import { Link, Space } from '@sensoro-design/react';
import FormOutlined from '@sensoro-design/icons/FormOutlined';

export default () => {
  return (
    <Space direction="vertical">
      <Space size="large">
        <Link href="#" icon>
          Hyperlinks
        </Link>
        <Link href="#" icon disabled>
          Hyperlinks
        </Link>
      </Space>
      <Space size="large">
        <Link href="#" icon={<FormOutlined />}>
          Hyperlinks
        </Link>
        <Link href="#"  icon={<FormOutlined />} disabled>
          Hyperlinks
        </Link>
      </Space>
    </Space>
  )
}
