/**
 * title: 含有标题
 * desc: 通过设置 `title` 可以给添加标题，将 `content` 变为辅助性介绍文字。
 */
import { Alert, Grid } from '@sensoro-design/react';

const { Row, Col } = Grid;

export default () => {
  return (
    <Row gutter={40}>
      <Col span={12}>
        <Alert
          style={{ marginBottom: 20 }}
          type="info"
          title="Info"
          content="Here is an info text"
        />
        <Alert type="warning" title="Warning" content="Here is a warning text" />
      </Col>
      <Col span={12}>
        <Alert
          style={{ marginBottom: 20 }}
          type="success"
          title="Success"
          content="Here is a success text"
        />
        <Alert type="error" title="Error" content="Here is an error text" />
      </Col>
    </Row>
  )
}
