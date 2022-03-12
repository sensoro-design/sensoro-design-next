/**
 * title: 标签放置位置
 * desc: 标签描述文字放置的位置，默认 `horizontal` 水平放在图标右侧，可选 `vertical` 放在图标下方。
 */
import { Steps, Divider } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <div>
      <Steps labelPlacement="vertical" current={2} style={{ maxWidth: 780, margin: '0 auto' }}>
        <Step title="Succeeded" description="This is a description" />
        <Step title="Processing" description="This is a description" />
        <Step title="Pending" description="This is a description" />
      </Steps>
      <Divider/>
      <div style={{ lineHeight: '140px', textAlign: 'center', color: '#C9CDD4' }}>
        Step 2 Content
      </div>
    </div>
  )
}
