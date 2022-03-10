
/**
 * title: 自定义触发元素
 * desc: 自定义触发元素。
 */
import { useState } from 'react';
import { DatePicker, Button, Space } from '@sensoro-design/react';

export default () => {
  const [value, setValue] = useState();
  const [rangeValue, setRangeValue] = useState();
  return <Space>
    <DatePicker
      triggerElement={<Button>{value || '请选择日期'}</Button>}
      style={{ width: 268 }}
      value={value}
      onChange={(v) => setValue(v)}
    />
    <DatePicker.RangePicker
      triggerElement={<Button>{rangeValue && rangeValue.join(' - ') || '请选择日期范围'}</Button>}
      style={{ width: 268 }}
      value={rangeValue}
      onChange={(v) => setRangeValue(v)}
    />
  </Space>;
}
