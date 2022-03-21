/**
 * title: 基本用法
 * desc: 按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种
 */
import React from 'react';
import { Button, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
      <Button type="primary">
        Primary
      </Button>
      <Button type="secondary">
        Secondary
      </Button>
      <Button type="dashed" bordered={false}>
        Dashed Hide Bordered
      </Button>
      <Button type="dashed">
        Dashed
      </Button>
      <Button type="outline">Outline</Button>
      <Button type="text">
        Text
      </Button>
    </Space>
  )
}
