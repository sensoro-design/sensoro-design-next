
/**
 * title: 分隔符
 * desc: 为相邻子元素设置分隔符。
 */
import { Space, Link, Divider } from '@sensoro-design/react';

export default () => {
  return (
    <Space split={<Divider type="vertical" />}>
      <Link>Link 1</Link>
      <Link>Link 2</Link>
      <Link>Link 3</Link>
    </Space>
  )
}
