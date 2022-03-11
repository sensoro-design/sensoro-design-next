/**
 * title: 尺寸
 * desc: 通过指定 `size` 字段，可以使用不同尺寸的分页器。
 */
import { useState } from 'react';
import { Pagination, Radio } from '@sensoro-design/react';

const RadioGroup = Radio.Group;

export default () => {
  const [size, setSize] = useState('default');

  return <div>
    <RadioGroup
      value={size}
      options={['large', 'default', 'small', 'mini' ]}
      onChange={(value) => setSize(value)}
      type="button"
      style={{ marginBottom: 20 }}
    />
    <Pagination size={size} total={50} showTotal showJumper sizeCanChange />
  </div>
}
