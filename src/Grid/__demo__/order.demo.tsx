/**
 * title: 排序
 * desc: 通过 `order` 来进行元素排序。
 */
import { Grid } from '@sensoro-design/react';
import './styles.less';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className="grid-demo">
        <Col span={6} order={4}>
          <div>1 col-order-4</div>
        </Col>
        <Col span={6} order={3}>
          <div>2 col-order-3</div>
        </Col>
        <Col span={6} order={2}>
          <div>3 col-order-2</div>
        </Col>
        <Col span={6} order={1}>
          <div>4 col-order-1</div>
        </Col>
      </Row>
    </div>
  )
}
