
/**
 * title: 箭头步骤条
 * desc: 指定 `type: 'arrow'`， 可以使用箭头类型的步骤条。**注意**：仅支持水平步骤条。
 */
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <Steps type="arrow" current={2} style={{ maxWidth: 780 }}>
      <Step title="Succeeded" description="This is a description" />
      <Step title="Processing" description="This is a description" />
      <Step title="Pending" description="This is a description" />
    </Steps>
  )
}
