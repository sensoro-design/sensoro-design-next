/**
 * title: 禁用
 * desc: 禁用所有
 */
import React from 'react';
import { Operations, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space direction="vertical">
      <Operations
        options={[
          { label: '主操作' },
          { label: '次要操作1' },
          { label: '次要操作2' },
        ]}
        disabled
      />
      <Operations
        options={[
          { label: '主操作', value: 'option1' },
          { label: '次要操作1', value: 'option2' },
          { label: '次要操作2', value: 'option3' },
          { label: '次要操作3', value: 'option4' },
        ]}
        disabled
      />
      <Operations
        options={[
          { label: '主操作' },
          { label: '次要操作1' },
          { label: '次要操作2' },
        ]}
        type="link"
        disabled
      />
      <Operations
        options={[
          { label: '主操作', value: 'option1' },
          { label: '次要操作1', value: 'option2' },
          { label: '次要操作2', value: 'option3' },
          { label: '次要操作3', value: 'option4' },
        ]}
        type="link"
        disabled
      />
    </Space>
  )
}
