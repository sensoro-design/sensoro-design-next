/**
 * title: 不同尺寸
 * desc: 按钮类型的单选框分为 4 个尺寸，分别为 `mini`, `small`, `default`, `large`。
 */
import { Radio } from '@sensoro-design/react';

const RadioGroup = Radio.Group;
const options = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
    disabled: true
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen'
  },
];

export default () => {
  return (
    <div>
      <RadioGroup
        options={options}
        size="mini"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      >
      </RadioGroup>
      <br/>
      <RadioGroup
        options={options}
        size="small"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      >
      </RadioGroup>
      <br/>
      <RadioGroup
        options={options}
        size="default"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      >
      </RadioGroup>
      <br/>
      <RadioGroup
        options={options}
        size="large"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      >
      </RadioGroup>
    </div>
  )
}
