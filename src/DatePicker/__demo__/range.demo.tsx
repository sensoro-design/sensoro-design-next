
/**
 * title: 范围选择器
 * desc: 范围输入器的基础使用。
 */
import { useState } from 'react';
import { DatePicker, Radio, Space } from '@sensoro-design/react';

const { RangePicker } = DatePicker;

function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}

function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}

export default () => {
  const [value, setValue] = useState('date');
  const mode = value === 'date time' ? 'date' : value;
  const style = value === 'date time' ? { width: 380 } : { width: 254, marginBottom: 20 };

  return <Space direction="vertical">
    <Radio.Group
      options={['date', 'week', 'month', 'year', 'quarter', 'date time']}
      value={value}
      onChange={(v) => setValue(v)}
      type="button"
    />
    <RangePicker
      mode={mode}
      onChange={onChange}
      onSelect={onSelect}
      style={style}
      showTime={value === 'date time'}
    />
  </Space>;
}
