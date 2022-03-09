/**
 * title: 输入框状态
 * desc: 不同的输入框状态
 */
import { Input, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space wrap>
      <Input
        style={{ width: 350 }}
        error
        placeholder="error status"
      />
      <Input style={{ width: 350 }} disabled placeholder="disabled input" />
    </Space>
  )
}
