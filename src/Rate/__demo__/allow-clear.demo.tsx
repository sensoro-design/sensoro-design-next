/**
 * title: 支持清除
 * desc: 指定 `allowClear` 来允许清除评分。
 */
import { Rate, Typography } from '@sensoro-design/react';

export default () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
        <Rate defaultValue={5} allowClear />
        <Typography.Text style={{ marginLeft: 16 }}>allowClear: true</Typography.Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Rate defaultValue={5} />
        <Typography.Text style={{ marginLeft: 16 }}>allowClear: false</Typography.Text>
      </div>
    </>
  )
}
