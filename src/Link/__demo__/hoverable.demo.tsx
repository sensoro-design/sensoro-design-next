/**
 * title: 悬浮状态样式
 * desc: 可以通过 `hoverable` 属性设置是否在悬浮状态时隐藏底色。
 */
import { Link, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Link hoverable={false}> Link </Link>
      <Link hoverable={false} status="error"> Link </Link>
    </Space>
  )
}
