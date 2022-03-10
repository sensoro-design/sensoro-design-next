
/**
 * title: 基础用法
 * desc: 根据当前输入展示输入建议（下拉选择）。
 */
import { useState } from 'react';
import { AutoComplete } from '@sensoro-design/react';

export default () => {
  const [data, setData] = useState([]);
  const handleSearch = (inputValue) => {
    setData(inputValue ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`) : []);
  };

  return (
    <AutoComplete
      placeholder="Please Enter"
      onSearch={handleSearch}
      data={data}
      style={{ width: 154, marginRight: 20 }}
    />
  );
}
