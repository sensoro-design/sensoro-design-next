/**
 * title: Flex 用法
 * desc: 通过设置 `Col` 组件的 `flex` 属性，可以任意配置 flex 布局。
 */
import { Grid } from '@sensoro-design/react';
import './styles.less';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col flex="100px">
          <div>100px</div>
        </Col>
        <Col flex="auto">
          <div>auto</div>
        </Col>
      </Row>
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col flex="100px">
          <div>100px</div>
        </Col>
        <Col flex="auto">
          <div>auto</div>
        </Col>
        <Col flex="100px">
          <div>100px</div>
        </Col>
      </Row>
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col flex={3}>
          <div>3 / 12</div>
        </Col>
        <Col flex={4}>
          <div>4 / 12</div>
        </Col>
        <Col flex={5}>
          <div>5 / 12</div>
        </Col>
      </Row>
    </div>
  )
}
