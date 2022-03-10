
/**
 * title:
 * desc:
 */
---
order: 5
title: _404
---

## zh-CN

页面未找到

## en-US

The page does not exist.

```js
import { Result, Button } from '@sensoro-design/react';

ReactDOM.render(
  <div >
    <Result
      status="404"
      subTitle="Whoops, that page is gone. "
      extra={[
        <Button key="again" style={{marginRight: 16}}>Again</Button>,
        <Button key="back" type="primary">Back</Button>,
      ]}
    >
    </Result>
  </div>,
  CONTAINER
);
```
