
/**
 * title: 展示箭头元素
 * desc: 通过 `showArrow` 属性，可以展示默认的箭头元素。也可以通过 arrowProps 进行定制。
 */
import { Trigger, Button, Skeleton } from '@sensoro-design/react';

export default () => {
  return <div style={{ background: 'var(--color-fill-2)', padding: 40 }}>
    <Trigger
      showArrow
      trigger="click"
      position="bl"
      popup={() => <div className="demo-trigger-popup" style={{width: 300}}> <Skeleton/> </div> }
    >
      <Button type="primary" style={{marginRight: 40}}>Click Me</Button>
    </Trigger>
    <Trigger
      showArrow
      arrowProps={{
        style: { background: 'red'},
      }}
      trigger="click"
      position="bl"
      popup={() => <div className="demo-trigger-popup"> <Skeleton/> </div> }
    >
      <Button type="primary">Click Me（arrowProps）</Button>
    </Trigger>
  </div>
}
