/**
 * title: 基础用法
 * desc: 这个例子展示了触发器的最基础的使用。`Trigger` 组件默认是没有弹出框的样式的。以下示例均为官网添加的样式。
 */
import { Trigger, Button, Tooltip, Input, Skeleton, Typography } from '@sensoro-design/react';
import './styles.less';

function Element(props) {
  return (
    <Typography.Text {...props} style={{ marginRight: 20 }}>
      Hover me
    </Typography.Text>
  );
}

function Popup() {
  return (
    <div className="demo-trigger-popup" style={{ width: 300 }}>
      <Tooltip content="123" defaultPopupVisible>
        <span>123123</span>
      </Tooltip>
      <Skeleton />
    </div>
  );
}

export default () => {
  return (
    <div style={{ width: 1000, overflow: 'auto' }}>
      <Trigger
        popup={() => <Popup />}
        mouseEnterDelay={400}
        mouseLeaveDelay={400}
        position="bottom"
      >
        <Element />
      </Trigger>
      <Trigger popup={() => <Popup />} trigger="click" position="bottom" classNames="zoomInTop">
        <Button style={{ marginRight: 40 }}>Click me</Button>
      </Trigger>
      <Trigger popup={() => <Popup />} trigger="focus" position="top" classNames="zoomInBottom">
        <Input style={{ width: 200 }} placeholder="Focus on me" />
      </Trigger>
    </div>
  )
}
