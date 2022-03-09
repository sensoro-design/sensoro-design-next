/**
 * title: 基础用法
 * desc: 基础单选框。
 */
import { Radio, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Radio>Radio</Radio>
      <Radio checked disabled>Disabled Radio</Radio>
    </Space>
  )
}
