/**
 * title: 基础
 * desc:
 * 最基础的用法。
 * 默认通过点击展开下一级，可以设置`expandTrigger='hover'`来控制`hover`展开下一级
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
      <Cascader placeholder="Please select ..." style={{ width: 300, marginBottom: 20 }} options={options} />
      <Cascader placeholder="Hover to expand" expandTrigger="hover" style={{ width: 300, marginBottom: 20 }} options={options} />
    </Space>
  )
}
