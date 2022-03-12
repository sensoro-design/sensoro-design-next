
/**
 * title: 竖直步骤条
 * desc: 竖直方向的步骤条。
 */
import { useState } from 'react';
import { Steps, Button } from '@sensoro-design/react';
import { IconLeft, IconRight } from '@sensoro-design/react/icon';

const Step = Steps.Step;

export default () => {
  const [current, setCurrent] = useState(1);

  function renderContent(step) {
    return (
      <div
        style={{
          width: '100%',
          height: 272,
          textAlign: 'center',
          background: 'var(--color-bg-2)',
          color: '#C2C7CC',
        }}
      >
        <div style={{ lineHeight: '200px' }}>Step{step} Content</div>

        <div>
          <Button type="secondary" disabled={current <= 1} onClick={() => setCurrent(current - 1)} style={{ paddingLeft: 8 }}>
            <IconLeft />Back
          </Button>
          <Button disabled={current >= 3} onClick={() => setCurrent(current + 1)} style={{ marginLeft: 20, paddingRight: 8 }} type="primary">
            Next<IconRight />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', maxWidth: 780, padding: 40, background: 'var(--color-fill-2)' }}>
      <div
        style={{ background: 'var(--color-bg-2)', padding: 24, height: 272, borderRight: '1px solid var(--color-border)', boxSizing: 'border-box' }}
      >
        <Steps direction="vertical" lineless current={current} style={{ width: 170 }}>
          <Step title="Succeeded" description="This is a description" />
          <Step title="Processing" description="This is a description" />
          <Step title="Pending" description="This is a description" />
        </Steps>
      </div>
      {renderContent(current)}
    </div>
  );
}
