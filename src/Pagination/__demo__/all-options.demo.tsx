
/**
 * title:
 * desc:
 */
---
order: 8
title:
  zh-CN: 全部展示
  en-US: Show all
---

## zh-CN

展示全部配置项。

## en-US

Show all configuration items.

```js
import { Pagination } from '@sensoro-design/react';

ReactDOM.render(
  <div>
    <Pagination showTotal total={200} showJumper sizeCanChange style={{ width: 800, marginBottom: 20 }} />
    <Pagination disabled showTotal total={200} showJumper sizeCanChange style={{ width: 800 }} />
  </div>,
  CONTAINER
);
```

