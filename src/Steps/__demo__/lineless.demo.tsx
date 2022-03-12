
/**
 * title: 隐藏连接线
 * desc: 使用 `lineless` 可以使用无连接线模式。
 */
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <Steps lineless current={2} style={{ maxWidth: 780, marginBottom: 40 }}>
      <Step title="Succeeded" description="This is a description" />
      <Step title="Processing" description="This is a description" />
      <Step title="Pending" description="This is a description" />
    </Steps>
  )
}
