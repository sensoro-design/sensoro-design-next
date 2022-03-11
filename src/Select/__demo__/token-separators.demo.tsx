/**
 * title: 自动分词
 * desc: 设置 `tokenSeparators` 可以使用自动分词功能。试试复制 `Beijing,Shanghai,Shenzhen|Nanjing/Xi'an|Hangzhou` 到输入框里。只在 `multiple` 模式下可用。
 */
import { Select } from '@sensoro-design/react';

const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Wuhan'];

export default () => {
  return (
    <Select
      mode="multiple"
      placeholder="Please select"
      tokenSeparators={[',', '|', '/']}
      allowCreate
      allowClear
      style={{ width: 345 }}
    >
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  )
}
