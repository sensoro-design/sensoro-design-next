
/**
 * title: 带时间的日期选择
 * desc: 使用 `showTime` 可以使用带时间的日期选择。
 */
import { DatePicker } from '@sensoro-design/react';

const { RangePicker } = DatePicker;
const style = { width: 220, margin: '0 24px 24px 0' };

function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}

function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}

function onOk(dateString, date) {
  console.log('onOk: ', dateString, date);
}

export default () => {
  return (
    <div>
      <DatePicker
        style={style}
        showTime={{ defaultValue: '04:05:06'}}
        format="YYYY-MM-DD HH:mm:ss"
        onChange={onChange}
        onSelect={onSelect}
        onOk={onOk}
      />
      <DatePicker
        style={style}
        showTime
        format="YYYY-MM-DD hh:mm A"
        onChange={onChange}
        onSelect={onSelect}
        onOk={onOk}
      />
      <RangePicker
        style={{ ...style, width: 360 }}
        showTime={{ defaultValue: ['00:00', '04:05'], format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        onSelect={onSelect}
        onOk={onOk}
      />
    </div>
  )
}
