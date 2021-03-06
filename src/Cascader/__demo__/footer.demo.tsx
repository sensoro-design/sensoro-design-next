
/**
 * title: 自定义footer
 * desc: 通过 `renderFooter` 可以自定义每一层级的footer。
 */
import { Cascader, Message, Link, Space } from '@sensoro-design/react';

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
  {
    value: 'guangzhou',
    label: 'guangzhou'
  },
  {
    value: 'shenzhen',
    label: 'Shenzhen'
  },
  {
    value: 'hangzhou',
    label: 'Hangzhou'
  },
];

export default () => {
  return (
    <Space size="large">
      <Cascader
        placeholder="Please select ..."
        style={{ maxWidth: 300 }}
        options={options}
        defaultValue={['shanghai', 'shanghaishi', 'huangpu']}
        showSearch
        allowClear
        renderFooter={(level, activeNode) => {
          console.log(level, activeNode)
          if (level < 2) {
            return <Link type="text" onClick={() => { Message.info('Click me') }}>Click me</Link>
          }
          return null
        }}
      />
      <Cascader
        mode="multiple"
        placeholder="Please select ..."
        style={{ maxWidth: 300 }}
        options={options}
        defaultValue={[['beijing', 'Beijing', 'chaoyang', 'datunli']]}
        showSearch
        allowClear
        renderFooter={(level, activeNode) => {
          console.log(level, activeNode)
          if (level < 2) {
            return <Link type="text" onClick={() => { Message.info('Click me') }}>Click me</Link>
          }
          return null
        }}
      />
  </Space>
  )
}
