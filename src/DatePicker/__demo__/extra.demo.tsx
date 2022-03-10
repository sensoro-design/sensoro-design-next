
/**
 * title: 额外的页脚
 * desc: 在浮层中加入额外的页脚，以满足某些定制信息的需求。
 */
import { DatePicker } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <DatePicker extra="Extra footer" style={{ width: 200, marginBottom: 20 }} />
      <br />
      <DatePicker.RangePicker showTime extra="Extra footer" style={{ width: 380 }} />
    </div>
  )
}
