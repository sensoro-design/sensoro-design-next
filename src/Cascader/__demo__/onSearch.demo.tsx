
/**
 * title: 远程搜索
 * desc: 使用 `onSearch` 自定义搜索逻辑
 */
import React from 'react';
import { Cascader, Spin, Space } from '@sensoro-design/react';

const genOptions = (keyword) => {
  return !keyword ? [] : [
    {
      label: keyword,
      value: keyword + '-value',
      children: [
        {
          label: `${keyword}-1`,
          value: `${keyword}-value-1`,
        },
        {
          label: `${keyword}-2`,
          value: `${keyword}-value-2`,
        },
      ],
    },
  ];
};

export default () => {
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleSearch = (inputValue) => {
    setLoading(true)
    setTimeout(() => {
      setOptions(genOptions(inputValue));
      setLoading(false)
    }, 200);
  };

  return (
    <Space size="large">
      <Cascader
        placeholder="Please enter ..."
        mode="multiple"
        style={{ width: 300 }}
        options={options}
        onSearch={handleSearch}
        onChange={(_, a) => {
          console.log(a);
        }}
        loading={loading}
        dropdownRender={(menu) => {
          return loading ? <div style={{height: 100, width: 300, textAlign: 'center', lineHeight: '100px'}}><Spin /></div> : menu
        }}
      />
    </Space>
  );
}
