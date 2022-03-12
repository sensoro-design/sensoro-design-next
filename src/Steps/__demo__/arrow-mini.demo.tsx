
/**
 * title: 迷你箭头步骤条
 * desc: 指定 `type: 'arrow', size: 'small'`， 可以使用迷你箭头类型的步骤条。仅支持水平步骤条。`description` 会被忽略。
 */
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <div>
      <Steps type="arrow" size="small" current={2} style={{ maxWidth: 780, marginBottom: 20 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
      <Steps type="arrow" size="small" status="error" current={2} style={{ maxWidth: 780 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
    </div>
  )
}
