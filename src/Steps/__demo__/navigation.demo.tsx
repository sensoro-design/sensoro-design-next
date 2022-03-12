/**
 * title: 导航步骤条
 * desc: 导航类型的步骤条。
 */
import { useState } from 'react';
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  const [current, setCurrent] = useState(1);

  return (
    <div>
      <Steps type="navigation" current={current} onChange={setCurrent} style={{ width: 780, marginBottom: 60 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
      <Steps type="navigation" size="small" current={current} onChange={setCurrent} style={{ width: 780, marginBottom: 60 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
      <Steps type="navigation" current={current} onChange={setCurrent} style={{ width: 780 }}>
        <Step title="Succeeded" description="This is a description" />
        <Step title="Processing" description="This is a description" />
        <Step title="Pending" description="This is a description" />
      </Steps>
    </div>
  );
}
