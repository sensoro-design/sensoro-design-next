/**
 * title: 链接
 * desc: 链接示例
 */
import React from 'react';
import { Operation, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space direction="vertical">
      <Operation
        options={[
          { label: '主操作' },
          { label: '次要操作1' },
          { label: '次要操作2' },
        ]}
        type="link"
      />

      <Operation
        options={[
          { label: '主操作', value: 'option1' },
          { label: '次要操作1', value: 'option2' },
          { label: '次要操作2', value: 'option3' },
          { label: '次要操作3', value: 'option4' },
        ]}
        type="link"
      />
    </Space>
  )
}
