
/**
 * title:
 * desc:
 */
---
order: 4
title: '_403'
---
## zh-CN

没有当前页面的访问权限。
## en-US

You are not authorized to access this page.


```js
import { Result, Button } from '@sensoro-design/react';

ReactDOM.render(
  <div >
    <Result
      status="403"
      subTitle="Access to this resource on the server is denied."
      extra={ <Button type="primary">Back</Button>}
    >
    </Result>
  </div>,
  CONTAINER
);
```

