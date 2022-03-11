/**
 * title: 无边框
 * desc: 使用 `bordered = false`，可以使用无边框的选择器。
 */
import { Select, Message, Space } from '@sensoro-design/react';

const Option = Select.Option;

const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'];

export default () => {
  return (
    <Space size="large">
      <Select
        placeholder="Please select"
        bordered={false}
        style={{ width: 154 }}
        onChange={(value) => Message.info({ content: `You select ${value}.`, showIcon: true })}
      >
        {options.map((option, index) => (
          <Option key={option} disabled={index === 3} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select
        placeholder="Please select"
        bordered={false}
        style={{ width: 154 }}
        defaultValue="Beijing"
        disabled
      >
        {options.map((option, index) => (
          <Option key={option} disabled={index === 4} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Space>
  )
}
