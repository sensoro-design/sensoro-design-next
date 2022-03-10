
/**
 * title: 垂直布局
 * desc: 通过 `align` 来进行垂直布局。
 */
import { Grid, Typography } from '@sensoro-design/react';
import './styles.less';

const Row = Grid.Row;
const Col = Grid.Col;

const rowStyle = { marginBottom: 40, backgroundColor: 'var(--color-fill-2)' };
const titleStyle = { fontSize: 12, color: '#141f33' };

export default () => {
  return (
    <div style={{ width: '100%' }}>
    <p style={titleStyle}>
      <Typography.Text>垂直顶部对齐</Typography.Text>
    </p>
    <Row className="grid-demo" align="start" style={rowStyle}>
      <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
        <div>col - 6</div>
      </Col>
    </Row>
    <p style={titleStyle}>
      <Typography.Text>垂直居中对齐</Typography.Text>
    </p>
    <Row className="grid-demo" align="center" style={rowStyle}>
      <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
        <div>col - 6</div>
      </Col>
    </Row>
    <p style={titleStyle}>
      <Typography.Text>垂直底部对齐</Typography.Text>
    </p>
    <Row className="grid-demo" align="end" style={rowStyle}>
      <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
        <div>col - 6</div>
      </Col>
      <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
        <div>col - 6</div>
      </Col>
    </Row>
  </div>
  )
}
