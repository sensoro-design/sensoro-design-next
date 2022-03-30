/**
 * title: 查询模式 确定类目
 * desc: 根据查询结果补全输入内容（确定类目）。
 */
import { useState } from 'react';
import { AutoComplete, Input } from '@sensoro-design/react';

const { OptGroup, Option } = AutoComplete;

export default () => {
  const [data, setData] = useState([]);
  const handleSearch = (inputValue) => {
    if (inputValue) {
      setData(
        ['Group-1', 'Group-2', 'Group-3'].map((groupName, outerIndex) => (
          <OptGroup key={outerIndex} label={groupName}>
            {new Array(3).fill(null).map((_, innerIndex) => {
              const value = `${inputValue}-${outerIndex + 1}-${innerIndex + 1}`;
              return (
                <Option key={`${outerIndex}_${innerIndex}`} value={value}>
                  {value}
                </Option>
              );
            })}
          </OptGroup>
        ))
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
