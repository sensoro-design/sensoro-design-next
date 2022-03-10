
/**
 * title:
 * desc:
 */
---
order: 6
title:
  zh-CN: 手动控制关闭
  en-US: Manual close
---

## zh-CN

`Message.xxx()` 会返回一个函数，调用此函数能手动关闭通知。

## en-US

`Message.xxx()` will return a function, use this function to close the notification.

```js
import { Message, Button } from '@sensoro-design/react';

function updateMessage() {
  const close = Message.info({ content: 'Close after 2 seconds...', duration: 0 });
  setTimeout(() => {
    close();
  }, 2000);
}

ReactDOM.render(
  <Button onClick={updateMessage} type="primary">
    Close after 2 seconds
  </Button>,
  CONTAINER
);
```

