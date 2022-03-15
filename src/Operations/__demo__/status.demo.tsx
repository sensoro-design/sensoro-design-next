/**
 * title: 状态
 * desc: 状态分为 警告，危险，成功 三种
 */
import React from 'react';
import { Operations, Space } from '@sensoro-design/react';

const options = [
  { label: '主操作',value: 'option1' },
  { label: '次要操作1', value: 'option2', status: 'error' },
  { label: '次要操作2', value: 'option3', status: 'warning' },
  { label: '次要操作3', value: 'option4' },
]

export default () => {
  return (
    <Space direction="vertical">
      <Operations
        options={options.slice(0, 3)}
      />
      <Operations
        options={options}
      />
      <Operations
        options={options.slice(0, 3)}
        type="link"
      />
      <Operations
        options={options}
        type="link"
      />
    </Space>
  )
}
