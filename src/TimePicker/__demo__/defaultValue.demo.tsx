/**
 * title: 默认值
 * desc: 时间输入器的有默认值的情况。
 */
import { TimePicker } from '@sensoro-design/react';

const { RangePicker } = TimePicker;

export default () => {
  return (
    <div>
      <TimePicker
        defaultValue="18:24:23"
        style={{ width: 194, marginRight: 24, marginBottom: 24 }}
      />
      <RangePicker
        defaultValue={['09:24:53', '18:44:33']}
        style={{ width: 252, marginBottom: 24 }}
      />
    </div>
  )
}
