
/**
 * title: 范围选择器
 * desc: 时间输入器的范围选择器。
 */
import { TimePicker } from '@sensoro-design/react';

export default () => {
  return (
    <TimePicker.RangePicker
      style={{ width: 252 }}
      onSelect={(valueString, value) => console.log('onSelect:', valueString, value)}
      onChange={(valueString, value) => console.log('onChange:', valueString, value)}
    />
  )
}
