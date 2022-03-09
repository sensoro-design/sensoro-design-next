---
order: 2
title:
  zh-CN: 底部固定
  en-US: Fixed Bottom
---

## zh-CN

元素向下滚动到距底部一定距离时固定。

## en-US

The element will be fixed when it scrolls down to a certain distance from the bottom of the viewport.

```js
import { Affix, Button } from '@sensoro-design/react';

ReactDOM.render(
  <Affix offsetBottom={120}>
    <Button type="primary">120px to affix bottom</Button>
  </Affix>,
  CONTAINER
);
```