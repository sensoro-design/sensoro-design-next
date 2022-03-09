---
order: 1
title: 
  zh-CN: 图标按钮
  en-US: Icon
---

## zh-CN

Button 可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等。

## en-US

Icons can be used in buttons. When `icon` is set and there are no children, the height and width of the button are equal.

```js
import { Button, Space } from '@sensoro-design/react';
import { IconPlus, IconDelete } from '@sensoro-design/react/icon';

ReactDOM.render(
  <Space size="large">
    <Button type="primary" icon={<IconPlus />} />
    <Button type="primary" icon={<IconDelete />}> Delete</Button>
  </Space>,
  CONTAINER
);
```
