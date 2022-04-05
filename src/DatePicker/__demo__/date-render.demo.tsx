
/**
 * title: 定制日期单元格
 * desc: 利用 `dateRender` 可以定制日期单元格。
 */
import { DatePicker } from '@sensoro-design/react';

const highlightStyle = {
  border: '1px solid rgb(var(--arcoblue-6))',
};

export default () => {
  return (
    <DatePicker
      dateRender={(current) => {
        const date = current.date();
        const highlightDates = [6, 14, 22];

        return (
          <div className="arco-picker-date">
            <div
              className="arco-picker-date-value"
              style={highlightDates.indexOf(date) > -1 ? highlightStyle : {}}
            >
              {current.date()}
            </div>
          </div>
        );
      }}
      style={{ width: 200 }}
    />
  )
}
