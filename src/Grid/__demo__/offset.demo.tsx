
/**
 * title: 栅格偏移
 * desc: 指定 `offset` 可以对栅格进行平移操作。
 */
import { Grid } from '@sensoro-design/react';
import './styles.less';

const Row = Grid.Row;
const Col = Grid.Col;

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className="grid-demo" style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}>
        <Col span={8}>col - 8</Col>
        <Col span={8} offset={8}>
          col - 8 | offset - 8
        </Col>
      </Row>
      <Row className="grid-demo" style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}>
        <Col span={6} offset={8}>
          col - 6 | offset - 8
        </Col>
        <Col span={6} offset={4}>
          col - 6 | offset - 4
        </Col>
      </Row>
      <Row className="grid-demo" style={{ backgroundColor: 'var(--color-fill-2)' }}>
        <Col span={12} offset={8}>
          col - 12 | offset - 8
        </Col>
      </Row>
    </div>
  )
}
