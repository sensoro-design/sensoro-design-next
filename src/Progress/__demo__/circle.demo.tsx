/**
 * title: 环形进度条
 * desc: `type = circle` 时候，将会展示环形进度条。
 */
import React from 'react';
import { Progress, Slider } from '@sensoro-design/react';

export default () => {
  const [value, setValue] = React.useState(20);

  return (
    <div>
      <Progress type="circle" percent={value} style={{ marginRight: 80 }} />
      <Progress type="circle" percent={value} status="warning" style={{ marginRight: 80 }} />
      <Progress type="circle" percent={value} status="error" style={{ marginRight: 80 }} />
      <Progress type="circle" percent={value} status="success" style={{ marginRight: 80 }} />
      <div style={{ marginTop: 40 }}>
        <Slider value={value} onChange={setValue} style={{ width: 100 }}></Slider>
      </div>
    </div>
  );
}
