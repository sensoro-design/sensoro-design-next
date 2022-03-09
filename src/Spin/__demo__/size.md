---
order: 6
title:
  zh-CN: 不同尺寸
  en-US: Size
---

## zh-CN

设置 `size` 可以得到不同尺寸的加载图标。

## en-US

Set `size` to get different sizes of loading icons.

```js
import { Spin, Space } from '@sensoro-design/react';

ReactDOM.render(
  <Space size={40}>
    <Spin size={20} />
    <Spin size={30} />
    <Spin size={40} />
  </Space>,
  CONTAINER
);
```
