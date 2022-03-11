/**
 * title: 分组
 * desc: 使用 `Select.Group` 对下拉菜单选项进行编组。
 */
import { Select } from '@sensoro-design/react';

const Option = Select.Option;
const groups = [
  ['Black tea latte', 'Green tea latte'],
  ['Vanilla Frappuccino', 'Matcha Frappuccino'],
  ['Chocolate milk', 'Banana milk'],
];

export default () => {
  return (
    <div>
      <Select
        showSearch
        allowClear
        placeholder="Select drink"
        style={{ width: 154 }}
      >
        {groups.map((options, index) => {
          return (
            <Select.OptGroup label={`Group-${index}`} key={index}>
              {options.map((option, index) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select.OptGroup>
          );
        })}
      </Select>
    </div>
  )
}
