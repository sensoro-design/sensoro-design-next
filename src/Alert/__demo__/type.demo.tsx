/**
 * title: 不同类型
 * desc: 警告提示的类型有 `info`, `success`, `warning`, `error` 四种。
 */
import { Alert, Grid } from '@sensoro-design/react';

const { Row, Col } = Grid;

export default () => {
  return (
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
  )
}
