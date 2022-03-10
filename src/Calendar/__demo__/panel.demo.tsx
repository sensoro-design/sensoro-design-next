
/**
 * title: 卡片日历
 * desc: 设置 `panel=true`，可以使用卡片日历。
 */
import { Calendar } from '@sensoro-design/react';
import dayjs from 'dayjs';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'start' }}>
      <Calendar panel defaultValue={dayjs('2020-04-01')} panelTodayBtn style={{ marginRight: 50 }} onChange={(a) => console.log(a)} />
      <Calendar panel defaultValue="2020-03" mode="year" />
    </div>
  )
}
