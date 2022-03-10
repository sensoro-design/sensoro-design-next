
/**
 * title: 自定义选项
 * desc: 可以传入 `AutoComplete.Option` 作为组件的 `children`，而非使用 `data`。
 */
import { useState } from 'react';
import { AutoComplete } from '@sensoro-design/react';

const { Option } = AutoComplete;

export default () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (inputValue) => {
    setOptions(
      inputValue ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`) : []
    );
  };

  return (
    <AutoComplete placeholder="Please Enter" style={{ width: 154 }} onSearch={handleSearch}>
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </AutoComplete>
  );
}
