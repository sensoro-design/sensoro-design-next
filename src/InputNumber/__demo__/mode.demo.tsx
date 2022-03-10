
/**
 * title: 按钮模式
 * desc: 指定 `mode` 为 `button` 来使用带按钮的数字输入框。
 */
import { InputNumber } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <InputNumber
        mode="button"
        defaultValue={500}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        mode="button"
        disabled
        defaultValue={500}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  )
}
