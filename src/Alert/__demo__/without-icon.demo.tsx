/**
 * title: 不含图标
 * desc: 通过指定 `showIcon=false` 来不显示图标。
 */
import { Alert, Grid } from '@sensoro-design/react';

const { Row, Col } = Grid;

export default () => {
  return (
    <Row gutter={40}>
      <Col span={12}>
        <Alert
          style={{ marginBottom: 20 }}
          showIcon={false}
          type="info"
          content="Here is an info text"
        />
        <Alert
          style={{ marginBottom: 20 }}
          showIcon={false}
          type="warning"
          title="Warning"
          content="Here is a warning text"
        />
      </Col>
      <Col span={12}>
        <Alert
          style={{ marginBottom: 20 }}
          showIcon={false}
          type="success"
          content="Here is a success text"
        />
        <Alert
          style={{ marginBottom: 20, color: 'red' }}
          showIcon={false}
          type="error"
          title="Error"
          content="Here is an error text"
        />
      </Col>
    </Row>
  )
}
