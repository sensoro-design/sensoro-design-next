
/**
 * title:
 * desc:
 */
---
order: 9
title:
  zh-CN: 范围选择器
  en-US: RangePicker
---

## zh-CN

时间输入器的范围选择器。

## en-US

Select time range.

```js
import { TimePicker } from '@sensoro-design/react';

ReactDOM.render(
  <TimePicker.RangePicker
    style={{ width: 252 }}
    onSelect={(valueString, value) => console.log('onSelect:', valueString, value)}
    onChange={(valueString, value) => console.log('onChange:', valueString, value)}
  />,
  CONTAINER
);
```

