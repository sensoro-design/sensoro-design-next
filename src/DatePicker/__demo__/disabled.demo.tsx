/**
 * title: 禁用
 * desc: 禁用状态。
 */
import { DatePicker } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <DatePicker defaultValue="2020-08-08" disabled style={{ width: 200, marginBottom: 20 }} />
      <br />
      <DatePicker.RangePicker defaultValue={['2020-08-08', '2020-08-18']} disabled style={{ width: 300, marginBottom: 20 }} />
      <br />
      <DatePicker.RangePicker
        defaultValue={[undefined, '2020-08-08']}
        disabled={[false, true]}
        style={{ width: 300, marginBottom: 20 }}
      />
      <br />
      <DatePicker.RangePicker
        showTime
        defaultValue={['2020-08-08 02:02:02']}
        disabled={[true, false]}
        style={{ width: 380 }}
      />
    </div>
  )
}
