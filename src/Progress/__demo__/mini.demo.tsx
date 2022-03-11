/**
 * title: 微型进度条
 * desc: `size = mini` 时，将会展示微型进度条。
 */
import { Progress } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <div>
        <Progress size="mini" percent={0} style={{ marginRight: 80 }} />
        <Progress size="mini" percent={40} style={{ marginRight: 80 }} />
        <Progress size="mini" percent={70} status="error" style={{ marginRight: 80 }} />
        <Progress size="mini" percent={100} status="success" style={{ marginRight: 80 }} />
      </div>
      <div style={{marginTop: 20}}>
        <Progress size="mini" type="circle" percent={0} style={{ marginRight: 80 }} />
        <Progress size="mini" type="circle" percent={40} style={{ marginRight: 80 }} />
        <Progress size="mini" type="circle" percent={70} status="error" style={{ marginRight: 80 }} />
        <Progress size="mini" type="circle" percent={100} status="success" style={{ marginRight: 80 }} />
      </div>
    </div>
  );
}
