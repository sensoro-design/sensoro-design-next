/**
 * title: 允许创建
 * desc: 指定 `allowCreate` 为 `true`，即可创建选项中不存在的条目。
 */
import { Select, Space } from '@sensoro-design/react';

const Option = Select.Option;
const options = [];
for (let i = 10; i < 24; i++) {
  options.push(i.toString(36) + i);
}

export default () => {
  return (
    <Space size="large">
      <Select allowCreate placeholder="Create an item" allowClear style={{ width: 345 }}>
        {options.map((option) => (
          <Option key={option} value={option} disabled={option === 'b11' ? true : false}>
            {option}
          </Option>
        ))}
      </Select>

      <Select
        allowCreate
        mode="multiple"
        placeholder="Create an item"
        defaultValue={['a10', 'b11']}
        allowClear
        style={{ width: 345 }}
      >
        {options.map((option) => (
          <Option key={option} value={option} disabled={option === 'b11' ? true : false}>
            {option}
          </Option>
        ))}
      </Select>
    </Space>
  );
}
