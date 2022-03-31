/**
 * title: 加载中
 * desc: 通过 `loading` 可以控制是否显示加载中状态。
 */
import { useState } from 'react';
import { Statistic, Switch, Typography } from '@sensoro-design/react';

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Switch checked={loading} onChange={setLoading} />{' '}
        <Typography.Text>Loading</Typography.Text>
      </div>
      <Statistic title="Downloads" value={125670} groupSeparator loading={loading} />
    </div>
  );
}
