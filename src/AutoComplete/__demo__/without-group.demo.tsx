
/**
 * title: 查询模式 不确定类目
 * desc: 根据查询结果补全输入内容（不确定类目）。
 */
import { useState } from 'react';
import { AutoComplete, Input } from '@sensoro-design/react';

const { Option } = AutoComplete;

export default () => {
  const [data, setData] = useState([]);
  const handleSearch = (inputValue) => {
    if (inputValue) {
      setData(
        new Array(3).fill(null).map((_, index) => {
          const value = `${inputValue}-${index + 1}`;
          return (
            <Option key={index} value={value}>
              <span>{value}</span>
              <span style={{ float: 'right' }}>{`${~~(Math.random() * 1000)} results`}</span>
            </Option>
          );
        })
      );
    } else {
      setData([]);
    }
  };

  return (
    <div>
      <AutoComplete
        style={{ width: 320 }}
        data={data}
        placeholder="Please Enter"
        triggerElement={<Input.Search />}
        onSearch={handleSearch}
      />
    </div>
  );
}
