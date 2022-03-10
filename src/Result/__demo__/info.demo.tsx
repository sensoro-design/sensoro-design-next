
/**
 * title:
 * desc:
 */
---
order: 1
title: Info
---

## zh-CN

展示处理结果

## en-US

Show processing results.

```js
import { Result, Button } from '@sensoro-design/react';

ReactDOM.render(
  <div >
    <Result
      title="Your operation has been performed."
      extra={<Button type="primary">Back</Button>}
    >
    </Result>
  </div>,
  CONTAINER
);
```

