/**
 * title: 基本用法
 * desc: 展示了最基本的 24 等分应用。
 */
import { Grid } from '@sensoro-design/react';
import './styles.less';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={{ width: '100%' }} className="grid-demo-background">
    <Row className="grid-demo" style={{ marginBottom: 16 }}>
      <Col span={24}>
        <div>24 - 100%</div>
      </Col>
    </Row>
    <Row className="grid-demo" style={{ marginBottom: 16 }}>
      <Col span={12}>
        <div>12 - 50%</div>
      </Col>
      <Col span={12}>
        <div>12 - 50%</div>
      </Col>
    </Row>
    <Row className="grid-demo" style={{ marginBottom: 16 }}>
      <Col span={8}>
        <div>8 - 33.33%</div>
      </Col>
      <Col span={8}>
        <div>8 - 33.33%</div>
      </Col>
      <Col span={8}>
        <div>8 - 33.33%</div>
      </Col>
    </Row>
    <Row className="grid-demo" style={{ marginBottom: 16 }}>
      <Col span={6}>
        <div>6 - 25%</div>
      </Col>
      <Col span={6}>
        <div>6 - 25%</div>
      </Col>
      <Col span={6}>
        <div>6 - 25%</div>
      </Col>
      <Col span={6}>
        <div>6 - 25%</div>
      </Col>
    </Row>
    <Row className="grid-demo">
      <Col span={4}>
        <div>4 - 16.66%</div>
      </Col>
      <Col span={4}>
        <div>4 - 16.66%</div>
      </Col>
      <Col span={4}>
        <div>4 - 16.66%</div>
      </Col>
      <Col span={4}>
        <div>4 - 16.66%</div>
      </Col>
      <Col span={4}>
        <div>4 - 16.66%</div>
      </Col>
      <Col span={4}>
        <div>4 - 16.66%</div>
      </Col>
    </Row>
  </div>
  )
  }
