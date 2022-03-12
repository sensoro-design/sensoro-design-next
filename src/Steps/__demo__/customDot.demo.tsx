
/**
 * title: 自定义节点
 * desc: 通过设置 `customDot` 可以自定义节点，可以给节点添加弹出或任意自定义操作。
 */
import { useState } from 'react';
import { Button, Steps, Popover } from '@sensoro-design/react';
import { IconLeft, IconRight } from '@sensoro-design/react/icon';

const Step = Steps.Step;

export default () => {
  const [current, setCurrent] = useState(2);

  const customDot = (dot, { status, index, title, description }) => {
    const visible = index === current;
    return (
      <Popover
        popupVisible={visible}
        content={<span>Step: {index}</span>}
      >
        {dot}
      </Popover>
    );
    return dot;
  };
  return (
    <div style={{ overflow: 'hidden', textAlign: 'center' }}>
      <Steps type="dot" current={current} customDot={customDot} style={{ marginTop: 20 }}>
        <Step title="Succeeded" description="This is a description" />
        <Step title="Processing" description="This is a description" />
        <Step title="Pending" description="This is a description" />
      </Steps>
      <div style={{ marginTop: 40 }}>
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
