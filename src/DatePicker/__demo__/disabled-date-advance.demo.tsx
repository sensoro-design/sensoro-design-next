/**
 * title: 动态控制选取范围
 * desc: 根据选择的值来控制选取的范围，使用 `onSelect` 配合 `disabledDate` 来实现。
 */
import { useState } from 'react';
import { DatePicker } from '@sensoro-design/react';

const { RangePicker } = DatePicker;

export default () => {
  const [dates, setDates] = useState([]);
  return (
    <RangePicker
      style={{ width: 300 }}
      onSelect={(valueString, value) => {
        setDates(value);
      }}
      onVisibleChange={(visible) => {
        if (!visible) {
          setDates([]);
        }
      }}
      disabledDate={(current) => {
        if (dates && dates.length) {
          const tooLate = dates[0] && Math.abs(current.diff(dates[0], 'day')) > 7;
          const tooEarly = dates[1] && Math.abs(dates[1].diff(current, 'day')) > 7;
          return tooEarly || tooLate;
        }
        return false;
      }}
      clearRangeOnReselect
    />
  );
}
