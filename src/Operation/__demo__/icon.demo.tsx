/**
 * title: 图标
 * desc: 通过在操作项配置 icon 字段
 */
import React from 'react';
import { Operation, Space } from '@sensoro-design/react';

import PlusOutlined from '@sensoro-design/icons/PlusOutlined';
import EditOutlined from '@sensoro-design/icons/EditOutlined';

const options = [
  { label: '主操作', icon: <PlusOutlined />,value: 'option1' },
  { label: '次要操作1', icon: <EditOutlined />, value: 'option2' },
  { label: '次要操作2', value: 'option3' },
  { label: '次要操作3', value: 'option4' },
]

export default () => {
  return (
    <Space direction="vertical">
      <Operation
        options={options.slice(0, 3)}
      />
      <Operation
        options={options}
      />
      <Operation
        options={options.slice(0, 3)}
        type="link"
      />
      <Operation
        options={options}
        type="link"
      />
    </Space>
  )
}
