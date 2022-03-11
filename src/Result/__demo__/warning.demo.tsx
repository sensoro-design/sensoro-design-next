
/**
 * title: warning
 * desc: 警告状态。
 */
import { Result, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Result
      status="warning"
      title="There is a problem with your operation."
      extra={<Button type="primary">Back</Button>}
    />
  )
}
