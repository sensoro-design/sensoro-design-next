/**
 * title: 禁用
 * desc: 禁用状态。
 */
import { TimePicker } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <TimePicker disabled style={{ margin: '0 24px 24px 0' }} />
      <TimePicker.RangePicker disabled style={{ width: 252, margin: '0 24px 24px 0' }} />
    </div>
  )
}
