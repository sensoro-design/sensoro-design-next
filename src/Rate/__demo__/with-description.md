---
order: 2
title:
  zh-CN: 附有文案
  en-US: With Text
---

## zh-CN

含有文案的评分组件。

## en-US

Use `Rate` with text description.

```js
import { Rate, Typography } from '@sensoro-design/react';
import { useState } from 'react';

function Demo() {
  const [rate, setRate] = useState(5);
  const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent'];
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Rate value={rate} onChange={(value) => setRate(value)} />
      <Typography.Text style={{ marginLeft: 16 }}>{desc[rate - 1]}</Typography.Text>
    </div>
  );
}

ReactDOM.render(<Demo />, CONTAINER);
```
