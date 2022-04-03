/**
 * title: Success
 * desc: 展示成功状态。
 */
import { Result, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div >
      <Result
        status="success"
        title="Success message"
        subTitle="This is a success description."
        extra={[
          <Button key="again" type="secondary" style={{marginRight: 16 }}>Again</Button>,
          <Button key="back"  type="primary">Back</Button>,
        ]}
      >
      </Result>
    </div>
  )
}
