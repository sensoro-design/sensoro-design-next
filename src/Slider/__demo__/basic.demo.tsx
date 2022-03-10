
/**
 * title:
 * desc:
 */
---
order: 0
title: 
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

基本用法展示。

## en-US

Basic usage of Slider.

```js
import { useState } from 'react';
import { Slider } from '@sensoro-design/react';

function Demo () {
  const [value, setValue] = useState(30);
  return <Slider value={value} onChange={setValue} style={{ width: 200 }}/>
}

ReactDOM.render(<Demo />, CONTAINER);
```

