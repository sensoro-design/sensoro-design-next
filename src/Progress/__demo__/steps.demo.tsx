/**
 * title: 步骤进度条
 * desc: 可以通过设置 `steps` 展示步骤进度条
 */
import { Progress } from '@sensoro-design/react';

export default () => {
  return (
    <div style={{ display: 'inline-block', width: '40%', marginRight: '10%' }}>
      <Progress steps={3} percent={30} style={{ marginBottom: 20 }} />
      <Progress steps={5} percent={100} status="warning" style={{ marginBottom: 20 }} />
      <Progress steps={5} size="small" percent={50} status="success" />
    </div>
  );
}
