/**
 * title: 密码输入
 * desc: 用于密码的输入。
 */
import { Input, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space wrap>
      <Input.Password
        defaultValue="password"
        style={{ width: 350 }}
      />
      <Input.Password
        defaultValue="password"
        defaultVisibility={true}
        placeholder="Please enter ..."
        style={{ width: 350 }}
      />
    </Space>
  )
}
