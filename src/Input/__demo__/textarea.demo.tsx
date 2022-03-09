/**
 * title: 文本域
 * desc: 可以用于多行输入。
 */
import { Input, Space } from '@sensoro-design/react';

const TextArea = Input.TextArea;

export default () => {
  return (
    <Space wrap>
      <TextArea
        placeholder="Please enter ..."
        style={{ minHeight: 64, width: 350 }}
      />
      <TextArea defaultValue="Disabled" style={{ minHeight: 64, width: 350 }} disabled />
    </Space>
  )
}
