
/**
 * title: 其他属性的响应式
 * desc: `span`, `offset`, `order`, `pull`, `push` 属性可以内嵌到 `xs`, `sm`, `md`, `lg`, `xl`, `xxl` 对象中使用。
比如 `xs={8}` 相当于 `xs={{ span: 8 }}`。
 */
import { Grid } from '@sensoro-design/react';
import './styles.less';

const Row = Grid.Row;
const Col = Grid.Col;

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className="grid-demo">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
      </Row>
    </div>
  )
}
