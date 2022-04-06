/**
 * title: 可关闭
 * desc: 指定 `closable = true`，可开启关闭按钮。
 */
import { Alert, Grid } from '@sensoro-design/react';

const { Row, Col } = Grid;

export default () => {
  return (
    <>
      <Row gutter={40}>
        <Col span={12}>
          <Alert closable style={{ marginBottom: 20 }} type="info" content="Here is an info text" />
          <Alert
            closable
            style={{ marginBottom: 20 }}
            type="warning"
            title="Warning"
            content="Here is a warning text"
          />
        </Col>
        <Col span={12}>
          <Alert closable style={{ marginBottom: 20 }} type="success" content="Here is a success text" />
          <Alert closable style={{ marginBottom: 20 }} type="error" title="Error" content="Here is an error text" />
        </Col>
      </Row>
    </>
  );
};
