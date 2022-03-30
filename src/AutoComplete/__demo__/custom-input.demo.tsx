/**
 * title: 自定义输入组件
 * desc: 支持自定义输入组件。
 */
import { useState } from 'react';
import { AutoComplete, Input } from '@sensoro-design/react';

const { TextArea } = Input;

export default () => {
  const [data, setData] = useState([]);
  const handleSearch = (inputValue) => {
    setData(
      inputValue && inputValue.trim()
        ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`)
        : []
    );
  };

  return (
    <AutoComplete
      style={{ width: 320, height: 80 }}
      data={data}
      triggerElement={<TextArea />}
      placeholder="Customize this with your words"
      onSearch={handleSearch}
    />
  );
}
