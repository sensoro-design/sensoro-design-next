
/**
 * title: 允许清除
 * desc: 支持清除。
 */
import { Cascader } from '@sensoro-design/react';

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
    <Cascader
      placeholder="Please select ..."
      style={{ width: 300 }}
      options={options}
      onChange={(value, option) => {
        console.log(value, option)
      }}
      defaultValue={['shanghai', 'shanghaishi', 'huangpu']}
      allowClear
    />
  )
}
