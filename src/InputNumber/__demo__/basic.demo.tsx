/**
 * title: 基础用法
 * desc: 通过鼠标或者键盘输入范围内的标准数值。
 */
import { InputNumber } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <InputNumber
        placeholder="Please enter"
        min={0}
        max={15}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber disabled defaultValue={500} style={{ width: 160, margin: '10px 24px 10px 0' }} />
    </div>
  )
}

