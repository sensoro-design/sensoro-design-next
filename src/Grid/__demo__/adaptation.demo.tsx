
/**
 * title: 响应式布局
 * desc: 预置六种响应尺寸, 分别为 `xs`, `sm`, `md`, `lg`, `xl`, `xxl`。
 */
import { Grid } from '@sensoro-design/react';
import './styles.less';

const Row = Grid.Row;
const Col = Grid.Col;

export default () => {
  return (
    <Row className="grid-demo">
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        Col
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={8}>
        Col
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        Col
      </Col>
    </Row>
  )
}
