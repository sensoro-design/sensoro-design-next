/**
 * title: 自定义关闭元素
 * desc: Custom close element
 */
import { Alert, Grid } from '@sensoro-design/react';
import CheckOutlined from '@sensoro-design/icons/CheckOutlined'

const { Row, Col } = Grid;

export default () => {
  return (
    <Row gutter={40}>
      <Col span={12}>
        <Alert
          closable
          style={{ marginBottom: 20 }}
          type="success"
          content="Here is a success text"
          closeElement={<CheckOutlined />}
        />
      </Col>
      <Col span={12}>
        <Alert
          closable
          style={{ marginBottom: 20 }}
          type="success"
          content="Here is a success text"
          closeElement="Close"
        />
      </Col>
    </Row>
  )
}
