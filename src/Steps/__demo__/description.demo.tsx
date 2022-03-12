
/**
 * title: 展示描述信息
 * desc: 使用 `description` 可以添加描述信息。
 */
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <Steps current={2} style={{ maxWidth: 780, marginBottom: 40 }}>
      <Step title="Succeeded" description="This is a description" />
      <Step title="Processing" description="This is a description" />
      <Step title="Pending" description="This is a description" />
    </Steps>
  )
}
