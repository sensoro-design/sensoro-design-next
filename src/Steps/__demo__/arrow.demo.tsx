
/**
 * title:
 * desc:
 */
---
order: 6
title: 
  zh-CN: 箭头步骤条
  en-US: Arrow Step Bar
---

## zh-CN

指定 `type: 'arrow'`， 可以使用箭头类型的步骤条。**注意**：仅支持水平步骤条。

## en-US

By specifying `type:'arrow'`, you can use arrow type step bar. **Note**: Only horizontal step bar are supported.

```js
import { Steps } from '@sensoro-design/react';

const Step = Steps.Step;

ReactDOM.render(
  <Steps type="arrow" current={2} style={{ maxWidth: 780 }}>
    <Step title="Succeeded" description="This is a description" />
    <Step title="Processing" description="This is a description" />
    <Step title="Pending" description="This is a description" />
  </Steps>,
  CONTAINER
);
```
