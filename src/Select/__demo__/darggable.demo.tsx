/**
 * title: 拖拽排序
 * desc: 多选时，指定 `dragToSort` 属性以允许对已输入的值进行拖拽排序。
 */

import { Select } from '@sensoro-design/react';

const Option = Select.Option;

const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'];

export default () => {
  return (
    <Select
      placeholder="Please select"
      style={{ width: 345 }}
      mode="multiple"
      dragToSort
      defaultValue={options.slice(0, 3)}
    >
      {options.map((option, index) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  )
}
