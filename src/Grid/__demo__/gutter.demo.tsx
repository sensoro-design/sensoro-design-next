
/**
 * title: 区块间隔
 * desc: 通过在 `Row` 上指定 `gutter` 可以增加栅格的区域间隔。
 */
import { Grid, Divider } from '@sensoro-design/react';
import './styles.less';

const Row = Grid.Row;
const Col = Grid.Col;

export default () => {
  return (
    <div style={{ width: '100%' }}>
    <Divider orientation="left">Horizontal</Divider>
    <Row className="grid-gutter-demo" gutter={24}>
      <Col span={12}>
        <div>col - 12</div>
      </Col>
      <Col span={12}>
        <div>col - 12</div>
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row className="grid-gutter-demo" gutter={{ md: 8, lg: 24, xl: 32 }}>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
    </Row>
    <Divider orientation="left">Horizontal and Vertical</Divider>
    <Row className="grid-gutter-demo" gutter={[24, 12]}>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
      <Col span={6}>
        <div>col - 6</div>
      </Col>
    </Row>
  </div>
  )
}
