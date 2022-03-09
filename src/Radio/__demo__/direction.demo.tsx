/**
 * title: 竖直单选组
 * desc: 设置 `direction="vertical"` 可以展示竖直的单选组。
 */
import { Radio } from '@sensoro-design/react';

const RadioGroup = Radio.Group;

export default () => {
  return (
    <div>
      <RadioGroup
        direction="vertical"
        defaultValue="a"
      >
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio disabled value="d">
          D
        </Radio>
      </RadioGroup>
  </div>
  )
}
