
/**
 * title: 格式化展示选中值
 * desc: 利用`renderFormat`对显示的内容进行自定义处理。
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
      defaultValue={['shanghai', 'shanghaishi', 'huangpu']}
      renderFormat={(valueShow) => `${valueShow.join(' > ')}`}
      allowClear
    />
  )
}
