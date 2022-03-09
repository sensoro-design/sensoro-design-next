---
order: 1
title: 
  zh-CN: 自定义图标和文案
  en-US: Customize Icon and Description
---

## zh-CN

可以通过 `icon` 参数传入自定义图标，`description` 修改显示文案。

## en-US

You can pass in custom icons through the `icon` parameter, and `description` to modify the description.

```js
import { Empty } from '@sensoro-design/react';
import { IconExclamation } from '@sensoro-design/react/icon';

ReactDOM.render(
  <Empty
    icon={<div
      style={{
        background: '#f2994b',
        display: 'inline-flex',
        borderRadius: '50%',
        width: 50,
        height: 50,
        fontSize: 30,
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center'
      }}
    >
      <IconExclamation  />
    </div>}
    description="No data, please reload!"
  />,
  CONTAINER
);
```
