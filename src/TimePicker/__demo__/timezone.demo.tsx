
/**
 * title: 时区
 * desc:
 * 通过 `timezone` 字段设置时区，如果设置了 `utcOffset`，以 `utcOffset` 为准。
 * **注意：使用 UTC 或者时区时间，传值的时候要用 timestamp 或者 Date 对象，使用字符串不能表示唯一时间，会造成困扰。**
 */
import { useState } from 'react';
import { TimePicker, Space, Select, Typography, Alert } from '@sensoro-design/react';

const zoneList = ['America/Los_Angeles', 'Europe/London', 'Africa/Cairo', 'Asia/Shanghai'];

const defaultValue = new Date('2022-02-22');

export default () => {
  const [timezone, setTimezone] = useState('Asia/Shanghai');
  const [value, setValue] = useState(defaultValue);

  return <Space direction="vertical">
    <Space>
      <Select
        defaultValue={timezone}
        options={zoneList}
        onChange={(tz) => setTimezone(tz)}
        triggerProps={{
          autoAlignPopupWidth: false,
          position: 'bl',
        }}
      />
      <TimePicker
        showTime
        timezone={timezone}
        defaultValue={defaultValue}
        onChange={(v, vd) => setValue(vd && vd.toDate())}
      />
    </Space>
    <Alert
      showIcon={false}
      content={
        <Space direction="vertical">
          <div><Typography.Text bold>Locale String:</Typography.Text> {value.toLocaleString('en-US')}</div>
          <div><Typography.Text bold>ISO String:</Typography.Text> {value.toISOString()}</div>
          <div><Typography.Text bold>Timestamp:</Typography.Text> {value.valueOf()}</div>
        </Space>
      }
    />
  </Space>;
}
