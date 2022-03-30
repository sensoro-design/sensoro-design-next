/**
 * title: 不同大小
 * desc: 通过设置 size 属性
 */
import React, { useState } from 'react';
import { Empty, Radio } from '@sensoro-design/react';

import { EmptyProps } from '@sensoro-design/react/es/Empty';

export default () => {
  const [size, setSize] = useState<EmptyProps['size']>('small');

  return (
    <>
      <Radio.Group
        value={size}
        type="button"
        options={['small', 'default']}
        onChange={(value) => {
          setSize(value);
        }}
      />

      <Empty size={size} />
    </>
  )
}
