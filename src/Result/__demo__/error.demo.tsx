
/**
 * title: Error
 * desc: 错误状态。
 */
import { Result, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div >
      <Result
        status="error"
        title="Error message"
        subTitle="Something went wrong. Please try again. "
        extra={[
          <Button key="again"  style={{marginRight: 16}}>Again</Button>,
          <Button key="back"  type="primary">Back</Button>,
        ]}
      >
      </Result>
    </div>
  )
}
