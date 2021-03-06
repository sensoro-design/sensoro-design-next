
/**
 * title: 自定义Option
 * desc: 使用 `renderOption`，可以自定义渲染选项。
 */
import { Cascader, Space } from '@sensoro-design/react';

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'Beijing',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
          {
            value: 'dongcheng',
            label: 'Dongcheng',
          },
          {
            value: 'xicheng',
            label: 'Xicheng',
          },
          {
            value: 'haidian',
            label: 'Haidian',
          },
          {
            value: 'fengtai',
            label: 'fengtai',
          },
          {
            value: 'shijingshan',
            label: 'Shijingshan',
          },
          {
            value: 'mentougou',
            label: 'Mentougou',
          },
          {
            value: 'fangshan',
            label: 'Fangshan',
          },
          {
            value: 'tongzhou',
            label: 'Tongzhou',
          },
          {
            value: 'shunyi',
            label: 'Shunyi',
          },
        ],
      },
    ],
  },
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
        renderOption={(node, level) => {
          console.log(node, level)
          return <span>{node.label}({node.value})</span>
        }}
      />
      <Cascader
        placeholder="Please select ..."
        style={{ width: 300, marginBottom: 20 }}
        options={options}
        defaultValue={[['beijing', 'Beijing', 'chaoyang', 'datunli']]}
        showSearch
        mode="multiple"
        renderOption={(node, level) => {
          return <span>{node.label}({node.value})</span>
        }}
      />
    </Space>
  )
}
