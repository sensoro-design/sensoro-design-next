/**
 * title: 悬浮状态样式
 * desc: 可以通过 `hoverable` 属性设置是否在悬浮状态时显示底色。
 */
import { Link, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Link hoverable> Link </Link>
      <Link hoverable status="error"> Link </Link>
    </Space>
  )
}
