---
order: 7
title:
  zh-CN: 设置弹窗位置偏移量
  en-US: popupAlign
---

## zh-CN

通过 `popupAlign` 属性，可以设置弹窗在原本位置的基础上进行额外的位置调整。

例如 `position=top`时， 设置 `popupAlign={top: 20}`，弹窗会向上移动 `20px`。设置 `popupAlign={ top: [100, 20] }`，弹窗将会在水平方向移动 `100px`，并向上移动 `20px`。

## en-US

Specify moving a few pixels in some directions.

For example, when `position` is `'top'`, set popupAlign to `{ top: 20}`, the popup will move up by `20px`, and set popupAlign to `{top: [100, 20]}`, the popup will move horizontally `100px` right and `20px` up.


```js
import { Trigger, Button, Input, Skeleton } from '@sensoro-design/react';

function Popup () {
  return  <Skeleton className="demo-trigger-popup" style={{width: 300}} />;
}

function Demo () {

  return <div style={{ background: 'var(--color-fill-2)', padding: 40 }}>
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
}

ReactDOM.render(<Demo />, CONTAINER);

```

```css:silent
.demo-trigger-popup {
  padding: 10px;
  width: 300px;
  text-align: center;
  background-color: var(--color-bg-popup);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
```
