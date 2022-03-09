/**
 * title: 基础用法
 * desc: 与按钮相比，链接不太突出，因此通常将其用作可选操作。
 */
import { Link, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Link href="#"> Link </Link>
      <Link href="#" disabled> Link </Link>
    </Space>
  )
}
