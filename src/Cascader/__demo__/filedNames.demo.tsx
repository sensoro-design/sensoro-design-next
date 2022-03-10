
/**
 * title: 自定义字段名
 * desc: 通过`fieldNames`属性指定 `label`，`value`，`isLeaf`，`disabled`，`children` 对应的字段。
 */
import { Cascader } from '@sensoro-design/react';

const options = [
  {
    id: 'beijing',
    name: 'Beijing',
    child: [
      {
        id: 'Beijing',
        name: 'Beijing',
        child: [
          {
            id: 'chaoyang',
            name: 'Chaoyang',
            child: [
              {
                id: 'datunli',
                name: 'Datunli',
              },
            ],
          },
          {
            id: 'dongcheng',
            name: 'Dongcheng',
          },
          {
            id: 'xicheng',
            name: 'Xicheng',
          },
          {
            id: 'haidian',
            name: 'Haidian',
          },
          {
            id: 'fengtai',
            name: 'fengtai',
          },
          {
            id: 'shijingshan',
            name: 'Shijingshan',
          },
          {
            id: 'mentougou',
            name: 'Mentougou',
          },
          {
            id: 'fangshan',
            name: 'Fangshan',
          },
          {
            id: 'tongzhou',
            name: 'Tongzhou',
          },
          {
            id: 'shunyi',
            name: 'Shunyi',
          },
        ],
      },
    ],
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    child: [
      {
        id: 'shanghaishi',
        name: 'Shanghai',
        child: [
          {
            id: 'huangpu',
            name: 'Huangpu',
          },
        ],
      },
    ],
  },
];

export default () => {
  return (
    <Cascader
      mode="multiple"
      placeholder="Please select ..."
      style={{ width: 300 }}
      onChange={(x, y) => {
        console.log(x, y)
      }}
      options={options}
      defaultValue={[['beijing', 'Beijing', 'chaoyang', 'datunli']]}
      showSearch
      allowClear
      fieldNames={{
        children: 'child',
        label: 'name',
        value: 'id'
      }}
    />
  )
}
