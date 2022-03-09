/**
 * title: 单选框组
 * desc: 单选组的用法。有两种用法，可以通过 `children` 的方式或者 `options` 数组的方式。
 */
import { Radio } from '@sensoro-design/react';

const RadioGroup = Radio.Group;

export default () => {
  return (
    <div>
      <RadioGroup defaultValue="a" style={{ marginBottom: 20 }}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio disabled value="d">
          D
        </Radio>
      </RadioGroup>
      <br />
      <RadioGroup options={['A', 'B', 'C', 'D']} style={{ marginBottom: 20 }} />
      <br />
      <RadioGroup
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
          { label: 'D', value: 'd', disabled: true },
        ]}
      />
    </div>
  )
}
