/**
 * title: 顶部公告
 * desc: 设置 `banner = true`，可以当作顶部公告使用。
 */
import { Alert } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Alert
        banner
        type="info"
        showIcon
        content="General text"
        style={{ marginTop: 4, marginBottom: 20 }}
      />
      <Alert
        banner
        type="info"
        showIcon
        closable
        content="General text"
        style={{ marginBottom: 20 }}
      />
      <Alert
        banner
        type="info"
        showIcon
        title="General text"
        content="Here is an example text"
        style={{ marginBottom: 20 }}
      />
      <Alert banner type="success" showIcon title="Success text" style={{ marginBottom: 20 }} />
    </div>
  )
}
