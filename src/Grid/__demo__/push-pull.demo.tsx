/**
 * title: 栅格排序
 * desc: 指定 `push` 或者 `pull` 可以对栅格进行排序。
 */
import { Grid } from '@sensoro-design/react';
import './styles.less';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className="grid-demo" style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}>
        <Col span={8} push={16}>
          col - 8 | push - 16
        </Col>
        <Col span={16} pull={8}>
          col - 16 | pull - 8
        </Col>
      </Row>
    </div>
  )
}
