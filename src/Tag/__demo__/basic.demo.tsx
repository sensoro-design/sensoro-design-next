
/**
 * title: 基础用法
 * desc: 标签的基础用法。
 */
import { Tag, Space } from '@sensoro-design/react';
import { IconCheckCircleFill } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Space size="large">
      <Tag>Default</Tag>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag icon={<IconCheckCircleFill />}>Complete</Tag>
    </Space>
  )
}
