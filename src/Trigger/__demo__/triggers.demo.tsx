/**
 * title: 多个触发方式
 * desc: 通过`trigger`传入数组，可以设置多个触发方式。
 */
import { Trigger, Button, Input, Skeleton, Typography } from '@sensoro-design/react';

function Popup() {
  return <div className="demo-trigger-popup" style={{ width: 300 }}>
    <Skeleton />
  </div>;
}

export default () => {
  return <div>
    <Trigger popup={() => <Popup />} trigger={['click', 'hover']} clickToClose={false} classNames="zoomInTop">
      <Button style={{ marginRight: 40 }}>Click/Hover Me</Button>
    </Trigger>
    <Trigger
      popup={() => <Typography.Paragraph className="demo-trigger-popup" >
        This popup will be hidden when Input triggers the blur or click. If you don't want to hide it when blur, you can set blurToHide=false. If you don't want to hide when you click, you can set clickToClose=false.
      </Typography.Paragraph>}
      trigger={['hover', 'click', 'focus']}
    >
      <Input style={{ width: 200, marginRight: 40 }} placeholder="Click/Hover/Focus Me" />
    </Trigger>
    <Trigger popup={() => <Popup />}  trigger={['hover', 'focus']}  blurToHide={false} >
      <Input style={{ width: 200 }} placeholder="Hover/Focus Me" />
    </Trigger>
  </div>;
}
