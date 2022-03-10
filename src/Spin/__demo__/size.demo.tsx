
/**
 * title: 不同尺寸
 * desc: 设置 `size` 可以得到不同尺寸的加载图标。
 */
import { Spin, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Spin size={20} />
      <Spin size={30} />
      <Spin size={40} />
    </Space>
  )
}
