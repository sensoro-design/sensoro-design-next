
/**
 * title:
 * desc:
 */
---
order: 1
title:
  zh-CN: 更多页码
  en-US: More
---

## zh-CN

页码数较大时，使用多页码的分页样式。

## en-US

More pages.

```js
import { Pagination } from '@sensoro-design/react';

ReactDOM.render(
  <Pagination defaultCurrent={5} total={200} sizeCanChange />,
  CONTAINER
);
```

