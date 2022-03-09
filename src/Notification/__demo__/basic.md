---
order: 0
title:
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

最简单的例子。

## en-US

The simplest usage.

```js
import { Notification, Button } from '@sensoro-design/react';

ReactDOM.render(
  <Button
    onClick={() => Notification.info({ closable: false, title: 'Notification', content: 'This is a notification!' })}
    type="primary"
  >
    Open Notification
  </Button>,
  CONTAINER
);
```