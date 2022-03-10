
/**
 * title: UTC 时间
 * desc: 通过 `utcOffset` 字段设置 UTC 时间。
 */
import { useState } from 'react';
import { DatePicker, Space, Select, Typography, Alert } from '@sensoro-design/react';

const utcList = [];
let uo = -12;
for (let i = 0; i < 25; i++) {
  utcList[i] = {
    label: `UTC ${uo ? (uo > 0 ? `+${uo}` : uo): ''}`,
    value: uo++
  };
}

const defaultValue = new Date('2022-02-22');

export default () => {
  const [utcOffset, setUtcOffset] = useState(0);
  const [value, setValue] = useState(defaultValue);

  return <Space direction="vertical">
    <Space>
      <Select
        defaultValue={utcOffset}
        options={utcList}
        onChange={(offset) => setUtcOffset(offset)}
        triggerProps={{
          autoAlignPopupWidth: false,
          position: 'bl',
        }}
      />
      <DatePicker
        showTime
        utcOffset={utcOffset}
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
