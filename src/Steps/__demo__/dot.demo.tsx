
/**
 * title: 点状步骤条
 * desc:
 * 指定 `type: 'dot'`， 可以使用点状的步骤条。
 * **注意**：水平步骤条的标签只可位于其下方，竖直步骤条的标签只可位于其右侧；
 */
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <div>
      <Steps type="dot" current={2} style={{ maxWidth: 780, marginBottom: 40 }}>
        <Step title="Succeeded" description="This is a description" />
        <Step title="Processing" description="This is a description" />
        <Step title="Pending" description="This is a description" />
      </Steps>
      <Steps type="dot" direction="vertical" current={2} style={{ maxWidth: 780 }}>
        <Step title="Succeeded" description="This is a description" />
        <Step title="Processing" description="This is a description" />
        <Step title="Pending" description="This is a description" />
      </Steps>
    </div>
  )
}
