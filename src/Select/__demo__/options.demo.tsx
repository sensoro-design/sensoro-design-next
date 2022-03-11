/**
 * title: 指定可选项
 * desc: 通过传入`options`指定可选项。
 */
import { Select, Space } from '@sensoro-design/react';

const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'];

export default () => {
  return (
    <Space size="large">
      <Select
        options={options}
        defaultValue="Beijing"
        placeholder="Select city"
        style={{ width: 154 }}
      />

      <Select
        mode="multiple"
        options={options}
        defaultValue={['Beijing', 'Shanghai']}
        placeholder="Please select"
        style={{ width: 345 }}
      />
    </Space>
  )
}
