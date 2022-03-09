/**
 * title: 复选框组
 * desc: 生成复选框组。设置 `direction="vertical"` 可以展示竖向的复选框组
 */
import { Checkbox } from '@sensoro-design/react';

const CheckboxGroup = Checkbox.Group;

const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
    disabled: true,
  },
  {
    label: 'Option 3',
    value: '3',
  },
  {
    label: 'Option 4',
    value: '4',
  },
];

export default () => {
  return (
    <div>
      <CheckboxGroup
        options={['Option A', 'Option B', 'Option C']}
        style={{ display: 'block', marginBottom: 16 }}
      />

      <CheckboxGroup
        options={options}
        defaultValue={['1', '3']}
        style={{ display: 'block', marginBottom: 20 }}
      />

      <CheckboxGroup
        direction="vertical"
        options={['Option A', 'Option B', 'Option C']}
      />
    </div>
  )
}
