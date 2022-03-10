
/**
 * title:
 * desc:
 */
---
order: 1
title:
  zh-CN: 国际化
  en-US: Internationalization
---

## zh-CN

自定义按钮文字。

## en-US

Custom button text.

```js
import { Popconfirm, Message, Button } from '@sensoro-design/react';

ReactDOM.render(
  <div>
    <Popconfirm
      title="Do you want to discard the draft?"
      okText="Discard"
      cancelText="Cancel"
      onOk={() => {
        Message.info({ content: 'ok' });
      }}
      onCancel={() => {
        Message.error({ content: 'cancel' });
      }}
    >
      <Button>Discard</Button>
    </Popconfirm>
  </div>,
  CONTAINER
);
```

