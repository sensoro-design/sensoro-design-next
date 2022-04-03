/**
 * title: 精度和步长
 * desc: 通过 `precision` 来设置数字精度。当 `precision` 小于 `step` 的小数位时，精度取 `step` 的小数个数。
 */
import { InputNumber } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <InputNumber
        min={0}
        max={40}
        defaultValue={3.5}
        step={0.1}
        precision={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        min={0}
        max={40}
        defaultValue={1.11}
        step={0.01}
        precision={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  )
}
