/**
 * title: 图标
 * desc: 通过在操作项配置 icon 字段
 */
import React from 'react';
import { Operations, Space } from '@sensoro-design/react';
import { IconPlus, IconUpload } from '@sensoro-design/react/icon';

const options = [
  { label: '主操作', icon: <IconPlus />,value: 'option1' },
  { label: '次要操作1', icon: <IconUpload />, value: 'option2' },
  { label: '次要操作2', value: 'option3' },
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
