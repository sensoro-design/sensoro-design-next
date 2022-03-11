
/**
 * title: 隐藏已选择项
 * desc: 在下拉列表中隐藏已选择的项。
 */
import { useState } from 'react';
import { Select } from '@sensoro-design/react';

const Option = Select.Option;

const OPTIONS = new Array(10).fill(null).map((_, index) => `Option ${index + 1}`);

export default () => {
  const [options, setOptions] = useState(OPTIONS);
  return (
    <>
      <Select
        placeholder="Please select"
        style={{ width: 345, marginRight: 20 }}
        mode="multiple"
        onChange={(value) => setOptions(OPTIONS.filter((option) => value.indexOf(option) === -1))}
      >
        {options.map((option, index) => (
          <Option wrapperClassName="select-demo-hide-option-checkbox" key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </>
  );
}
