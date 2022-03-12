
/**
 * title: 十二小时制
 * desc: 通过设置 `use12Hours`，可以定制需要显示的时、分、秒。
 */
import { TimePicker } from '@sensoro-design/react';
import dayjs from 'dayjs';

const style = { width: 194, margin: '0 24px 24px 0' };

export default () => {
  return (
    <div>
    <TimePicker
      use12Hours
      format="hh:mm:ss A"
      defaultValue={dayjs('12:20:20 AM', 'hh:mm:ss A')}
      placeholder="请选择时间"
      style={style}
    />
    <TimePicker
      use12Hours
      format="hh:mm:ss a"
      defaultValue={dayjs('09:20:20 pm', 'hh:mm:ss a')}
      placeholder="请选择时间"
      style={style}
    />
    <TimePicker
      use12Hours
      format="h:mm A"
      defaultValue={dayjs('2:20 AM', 'h:mm A')}
      placeholder="请选择时间"
      style={style}
    />
    <TimePicker.RangePicker
      use12Hours
      format="hh:mm:ss A"
      defaultValue={[dayjs('12:20:20 AM', 'hh:mm:ss A'), dayjs('08:30:30 PM', 'hh:mm:ss A')]}
      placeholder="请选择时间"
      style={{ ...style, width: 300 }}
    />
  </div>
  )
}
