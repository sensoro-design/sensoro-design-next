/**
 * title: 步骤切换
 * desc: 通过改变 `current` 参数，可以跳转到不同的步骤。
 */
import { useState } from 'react';
import { Steps, Button } from '@sensoro-design/react';

import RightOutlined from '@sensoro-design/icons/RightOutlined';
import LeftOutlined from '@sensoro-design/icons/LeftOutlined';

const Step = Steps.Step;

export default () => {
  const [current, setCurrent] = useState(1);

  function renderContent(step) {
    return (
      <div
        style={{
          width: '100%',
          height: 200,
          textAlign: 'center',
          background: 'var(--color-bg-2)',
          color: '#C2C7CC',
        }}
      >
        <div style={{ lineHeight: '160px' }}>Step{step} Content</div>

        <div>
          <Button type="secondary" disabled={current <= 1} onClick={() => setCurrent(current - 1)} style={{ paddingLeft: 8 }}>
            <LeftOutlined />Back
          </Button>
          <Button disabled={current >= 3} onClick={() => setCurrent(current + 1)} style={{ marginLeft: 20, paddingRight: 8 }} type="primary">
            Next<RightOutlined />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 780 }}>
      <Steps current={current}>
          <Step title="Succeeded" />
          <Step title="Processing" />
          <Step title="Pending" />
        </Steps>
      {renderContent(current)}
    </div>
  );
}
