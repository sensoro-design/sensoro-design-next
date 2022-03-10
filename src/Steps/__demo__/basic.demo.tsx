
/**
 * title:
 * desc:
 */
---
order: 0
title: 
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

这是步骤条组件的基础用法。

## en-US

Basic usage of the step bar component.

```js
import { Steps, Divider } from '@sensoro-design/react';

const Step = Steps.Step;

ReactDOM.render(
  <div>
    <Steps current={2} style={{ maxWidth: 780, margin: '0 auto'}}>
      <Step title="Succeeded" />
      <Step title="Processing" />
      <Step title="Pending" />
    </Steps>
    <Divider/>
    <div style={{ lineHeight: '140px', textAlign: 'center', color: '#C9CDD4' }}>
      Step 2 Content
    </div>
  </div>,
  CONTAINER
);
```
