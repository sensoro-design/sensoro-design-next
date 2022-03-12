
/**
 * title: 定制时分
 * desc: 通过设置 `format`，可以定制需要显示的时、分、秒。
 */
import { TimePicker } from '@sensoro-design/react';
import dayjs from 'dayjs';

export default () => {
  return (
    <TimePicker
      format="HH:mm"
      defaultValue={dayjs('09:24', 'HH:mm')}
      style={{ width: 130 }}
    />
  )
}
