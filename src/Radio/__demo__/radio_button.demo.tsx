/**
 * title: 按钮类型
 * desc: 指定 `type=button`，单选框会展示为按钮样式。
 */
import { Radio } from '@sensoro-design/react';

const RadioGroup = Radio.Group;

export default () => {
  return (
    <div>
      <RadioGroup
        type="button"
        name="lang"
        defaultValue="Guangzhou"
        style={{ marginRight: 20, marginBottom: 20 }}
      >
        <Radio value="Beijing">Beijing</Radio>
        <Radio value="Shanghai">Shanghai</Radio>
        <Radio disabled value="Guangzhou">
          Guangzhou
        </Radio>
        <Radio value="Shenzhen">Shenzhen</Radio>
      </RadioGroup>
    </div>
  )
}
