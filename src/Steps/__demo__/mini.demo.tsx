
/**
 * title: 小型步骤条
 * desc: 通过`size`属性可以设置展示小型步骤条
 */
import { Steps, Divider } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  return (
    <div>
      <Steps current={2} style={{ maxWidth: 780, margin: '0 auto'}} size="small">
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
      <Divider/>
      <div style={{ lineHeight: '140px', textAlign: 'center', color: '#C9CDD4'  }}>Step 2 Content</div>
    </div>
  )
}
