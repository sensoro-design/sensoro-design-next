/**
 * title: 前置、后置标签
 * desc: 指定`addBefore`和`addAfter`在输入框前后添加元素。
 */
import { Input, Select, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Input
          style={{ width: 350 }}
          addAfter="RMB"
          placeholder="Please enter"
        />
        <Input style={{ width: 350 }} addBefore="+86" placeholder="Please enter" />
      </Space>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          addBefore="http://"
          addAfter={
            <Select defaultValue=".com" showSearch style={{ width: 80 }}>
              <Select.Option value=".com">.com</Select.Option>
              <Select.Option value=".cn">.cn</Select.Option>
              <Select.Option value=".net">.net</Select.Option>
              <Select.Option value=".org">.org</Select.Option>
            </Select>
          }
          allowClear
          placeholder="Please enter"
        />
        <Input
          style={{ width: 350 }}
          addBefore="www."
          addAfter=".com"
          placeholder="Please enter"
        />
      </Space>
    </Space>
  )
}
