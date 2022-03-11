/**
 * title: 允许清除
 * desc: 支持清除按钮。
 */
import { Select } from '@sensoro-design/react';

const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];

export default () => {
  return (
    <Select
      placeholder="Please select"
      style={{ width: 154 }}
      allowClear
    >
      {options.map((option, index) => (
        <Option key={option} disabled={index === 3} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  )
}
