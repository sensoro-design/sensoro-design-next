---
order: 4
title:
  zh-CN: 最大值
  en-US: Max Count
---

## zh-CN

设置 `maxCount`，可以限制最大显示的徽标数值，超过将会加 `+` 后缀。`maxCount` 默认为 `99`。

## en-US

If the count is larger than `maxCount`, `${maxCount}+` will be displayed. The default value of `maxCount` is `99`.

```js
import { Badge, Avatar, Space } from '@sensoro-design/react';
import { IconUser } from '@sensoro-design/react/icon';

ReactDOM.render(
  <Space size={40}>
    <Badge count={100} maxCount={10}>
      <Avatar shape="square">
        <span>
          <IconUser />
        </span>
      </Avatar>
    </Badge>
    <Badge count={100}>
      <Avatar shape="square">
        <span>
          <IconUser />
        </span>
      </Avatar>
    </Badge>
    <Badge count={1000} maxCount={999}>
      <Avatar shape="square">
        <span>
          <IconUser />
        </span>
      </Avatar>
    </Badge>
  </Space>,
  CONTAINER
);
```
