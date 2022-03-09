---
order: 3
title:
  zh-CN: 时间格式
  en-US: DateFormat
---

## zh-CN

时间显示。通过 [dayjs](https://github.com/iamkun/dayjs) 来进行时间格式化，`format` 即 dayjs 的 format。

## en-US

Time display. Use [dayjs](https://github.com/iamkun/dayjs) to format the time, `format` is the format of dayjs.

```js
import { Statistic, Grid } from '@sensoro-design/react';

const Row = Grid.Row;
const Col = Grid.Col;

ReactDOM.render(
  <Statistic title="CreatedTime" value={1554869813383} format="YYYY/MM/DD HH:mm:ss" />,
  CONTAINER
);
```
