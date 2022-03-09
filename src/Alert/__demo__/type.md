---
order: 1
title:
  zh-CN: 不同类型
  en-US: Different type
---

## zh-CN

警告提示的类型有 `info`, `success`, `warning`, `error` 四种。

## en-US

There are four types of warnings: `info`, `success`, `warning`, and `error`.

```js
import { Alert, Grid } from '@sensoro-design/react';

const { Row, Col } = Grid;

ReactDOM.render(
  <div>
    <Row gutter={40}>
      <Col span={12}>
        <Alert style={{ marginBottom: 20 }} type="info" content="Here is an info text" />
        <Alert type="warning" content="Here is a warning text" />
      </Col>
      <Col span={12}>
        <Alert style={{ marginBottom: 20 }} type="success" content="Here is a success text" />
        <Alert type="error" content="Here is an error text" />
      </Col>
    </Row>
  </div>,
  CONTAINER
);
```