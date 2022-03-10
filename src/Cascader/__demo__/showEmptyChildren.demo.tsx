/**
 * title: 展示空数据
 * desc: `showEmptyChildren=true`时，当`children`为`[]`也会展示下一级空菜单。
 */
import React from 'react';
import { Cascader, Checkbox } from '@sensoro-design/react';

const options = [
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
            children: []
          },
          {
            value: 'jingan',
            label: 'Jingan'
          },
        ],
      },
    ],
  },
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'Beijing',
        label: 'Beijing',
        children: []
      },
    ],
  },
];

export default  () => {
  const [checked, setChecked] = React.useState(false)
  const [value, setValue] = React.useState()

  return <div>
    <div style={{marginBottom: 20}}>
      <Checkbox onChange={(v) => {
        setChecked(v)
        setValue()
      }}>
        showEmptyChildren
      </Checkbox>
    </div>
    <Cascader
      showSearch
      allowClear
      value={value}
      onChange={setValue}
      placeholder="Please select ..."
      showEmptyChildren={checked}
      style={{ width: 300 }}
      options={options}
    />
  </div>
}
