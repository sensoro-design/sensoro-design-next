/**
 * title: 附有文案
 * desc: 含有文案的评分组件。
 */
import React, { useState } from 'react';
import { Rate, Typography } from '@sensoro-design/react';

export default () => {
  const [rate, setRate] = useState(5);
  const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent'];

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Rate value={rate} onChange={(value) => setRate(value)} />
      <Typography.Text style={{ marginLeft: 16 }}>{desc[rate - 1]}</Typography.Text>
    </div>
  );
};
