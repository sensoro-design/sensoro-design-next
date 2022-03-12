
/**
 * title: 步骤错误
 * desc: 通过指定参数 `status` 来指定错误状态。
 */
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <Steps current={2} status="error" style={{ maxWidth: 780, marginBottom: 40 }}>
      <Step title="Succeeded" description="This is a description" />
      <Step title="Processing" description="This is a description" />
      <Step title="Pending" description="This is a description" />
    </Steps>
  )
}
