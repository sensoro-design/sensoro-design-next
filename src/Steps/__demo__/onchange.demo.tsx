
/**
 * title: 可点击切换步骤
 * desc: 设置 `onChange` 之后，步骤条支持点击切换步骤。
 */
import { useState } from 'react';
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

export default () => {
  const [current, setCurrent] = useState(1);

  return <div>
    <Steps arrow current={current} onChange={setCurrent} style={{ marginBottom: 20 }}>
      <Step title="Succeeded" description="This is a description" />
      <Step title="Processing" description="This is a description" />
      <Step title="Pending" description="This is a description" />
    </Steps>
    <Steps
      current={current}
      onChange={setCurrent}
      direction='vertical'
    >
      <Step title="Succeeded" description="This is a description" />
      <Step title="Processing" description="This is a description" />
      <Step title="Pending" description="This is a description" />
    </Steps>
  </div>;
}
