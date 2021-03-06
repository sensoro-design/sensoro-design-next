
/**
 * title: 允许搜索
 * desc: 指定`showSearch=true`，可以输入文本对选项进行搜索。
 */
import { Cascader, Space } from '@sensoro-design/react';

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
    <Space size="large">
      <Cascader
        placeholder="Please select ..."
        style={{ width: 300, marginBottom: 20 }}
        options={options}
        defaultValue={['shanghai', 'shanghaishi', 'huangpu']}
        showSearch
        allowClear
        fieldNames={{
          children: 'child',
          label: 'name',
          value: 'id'
        }}
      />
      <Cascader
        mode="multiple"
        placeholder="Please select ..."
        style={{ width: 300, marginBottom: 20 }}
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
    </Space>
  )
}
