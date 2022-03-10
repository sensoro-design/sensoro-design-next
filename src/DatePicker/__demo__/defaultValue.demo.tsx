/**
 * title: 默认值
 * desc: 日期输入器有默认值的情况。
 */
import { DatePicker } from '@sensoro-design/react';
import dayjs from 'dayjs';

const { YearPicker, MonthPicker, WeekPicker, RangePicker } = DatePicker;

function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}

function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}

const style = { width: 220, marginBottom: 24, marginRight: 24 };

export default () => {
  return (
    <div>
      <DatePicker defaultValue="2019-06-03" onSelect={onSelect} onChange={onChange} style={style} />
      <DatePicker
        defaultValue="2019-06-03"
        format={(value) => `custom format: ${value.format('YYYY-MM-DD')}`}
        onSelect={onSelect}
        onChange={onChange}
        style={{ ...style, width: 240 }}
      />
      <DatePicker showTime defaultValue="2019-06-03 08:00:00" onSelect={onSelect} onChange={onChange} style={style} />
      <YearPicker defaultValue="2019" onSelect={onSelect} onChange={onChange} style={style} />
      <MonthPicker defaultValue="2019-06" onSelect={onSelect} onChange={onChange} style={style} />
      <WeekPicker defaultValue={dayjs('2019-08-02')} onSelect={onSelect} onChange={onChange} style={style} />
      <RangePicker
        showTime
        defaultValue={['2019-08-08 00:00:00', '2019-08-18 09:09:06']}
        onSelect={onSelect}
        onChange={onChange}
        style={{ ...style, width: 360 }}
      />
      <RangePicker
        mode="month"
        defaultValue={['2019-08', '2020-06']}
        onSelect={onSelect}
        onChange={onChange}
        style={{ width: 300, marginBottom: 24 }}
      />
    </div>
  )
}
