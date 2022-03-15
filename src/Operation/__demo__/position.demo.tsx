/**
 * title: 主操作位置
 * desc: 可通过设置`position=right`将主操作放置在右边
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
        position="right"
        onClick={(value) => {
          console.log(value)
        }}
      />

      <Operation
        options={[
          { label: '主操作', value: 'option1' },
          { label: '次要操作1', value: 'option2' },
          { label: '次要操作2', value: 'option3' },
          { label: '次要操作3', value: 'option4' },
        ]}
        position="right"
        onClick={(value) => {
          console.log(value)
        }}
      />
    </Space>
  )
}
