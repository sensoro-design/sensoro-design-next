/**
 * title: 不同尺寸
 * desc: 通过指定 `size` 字段，可以使用不同尺寸的分页器。
 */
import { useState } from 'react';
import { Pagination, Radio, Space } from '@sensoro-design/react';

export default () => {
  const [size, setSize] = useState('default');

  return (
    <Space direction="vertical" size={24}>
      <Radio.Group
        value={size}
        options={['small', 'default', 'large']}
        onChange={(value) => setSize(value)}
        type="button"
      />
      <Pagination size={size} total={50} showTotal showJumper sizeCanChange />
    </Space>
  )
}
