/**
 * title: 设置弹窗位置偏移量
 * desc:
 * 通过 `popupAlign` 属性，可以设置弹窗在原本位置的基础上进行额外的位置调整。
 * 例如 `position=top`时， 设置 `popupAlign={top: 20}`，弹窗会向上移动 `20px`。设置 `popupAlign={ top: [100, 20] }`，弹窗将会在水平方向移动 `100px`，并向上移动 `20px`。
 */
import { Trigger, Button, Skeleton } from '@sensoro-design/react';
import './styles.less';

function Popup () {
  return  <Skeleton className="demo-trigger-popup" style={{width: 300}} />;
}

export default () => {
  return (
    <div style={{ background: 'var(--color-fill-2)', padding: 40 }}>
      <Trigger
        trigger="click"
        position="top"
        popupAlign={{ top: 20 }}
        popup={() => <Popup/>}
      >
        <Button type="primary" style={{marginRight: 40}}>Top</Button>
      </Trigger>
      <Trigger
        trigger="click"
        position="top"
        popupAlign={{ top: [100, 20] }}
        popup={() => <Popup/>}
      >
        <Button type="primary" style={{marginRight: 40}}>Top offset [100, 20]</Button>
      </Trigger>
      <Trigger
        trigger="click"
        position="top"
        popupAlign={{ top: [-100, 20] }}
        popup={() => <Popup/>}
      >
        <Button type="primary" style={{marginRight: 40}}>Top offset [-100, 20]</Button>
      </Trigger>
      <Trigger
        trigger="click"
        position="right"
        popupAlign={{ right: 30 }}
        popup={() => <Popup/>}
      >
        <Button type="primary" style={{marginRight: 40}}>Right</Button>
      </Trigger>
      <Trigger
        trigger="click"
        position="right"
        popupAlign={{ right: [30, 50] }}
        popup={() => <Popup/>}
      >
        <Button type="primary" style={{marginRight: 40}}>Right offset [30, 50]</Button>
      </Trigger>
      <Trigger
        trigger="click"
        position="right"
        popupAlign={{ right: [30, -50] }}
        popup={() => <Popup/>}
      >
        <Button type="primary" style={{marginRight: 40}}>Right offset [30, -50]</Button>
      </Trigger>
    </div>
  )
}
