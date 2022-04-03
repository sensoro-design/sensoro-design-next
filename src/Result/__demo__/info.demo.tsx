/**
 * title: Info
 * desc: 展示处理结果
 */
import { Result, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div >
      <Result
        title="Your operation has been performed."
        extra={<Button type="primary">Back</Button>}
      >
      </Result>
    </div>
  )
}
