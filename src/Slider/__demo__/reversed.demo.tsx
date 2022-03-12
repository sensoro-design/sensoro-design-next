
/**
 * title: 反向
 * desc: 设置 `reverse={true}` ，可以交换滑动条的起点和终点。
 */
import { useState } from 'react';
import { Slider, Switch, Typography } from '@sensoro-design/react';

export default () => {
  const [reverse, setReverse] = useState(true);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Switch checked={reverse} onChange={setReverse} />{' '}
        <Typography.Text>Reversed</Typography.Text>
      </div>
      <Slider
        reverse={reverse}
        showTicks
        max={15}
        defaultValue={10}
        marks={{
          0: '0km',
          5: '5km',
          10: '10km',
          15: '15km',
        }}
        style={{ width: 200 }}
      />
    </div>
  );
}
