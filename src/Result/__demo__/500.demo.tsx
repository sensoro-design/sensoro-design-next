
/**
 * title:
 * desc:
 */
---
order: 6
title: _500
---

## zh-CN

通常表示服务器错误

## en-US

Something went wrong on server.

```js
import { Result, Button } from '@sensoro-design/react';

ReactDOM.render(
  <div >
    <Result
      status="500"
      subTitle="This page isn’t working."
      extra={<Button type='primary'>Back</Button>}
    >
    </Result>
  </div>,
  CONTAINER
);
```

