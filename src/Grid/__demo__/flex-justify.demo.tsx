
/**
 * title: 水平布局
 * desc: 通过 `justify` 来进行水平布局。
 */
import { Grid, Typography } from '@sensoro-design/react';
import './styles.less';

const Row = Grid.Row;
const Col = Grid.Col;

const rowStyle = { marginBottom: 40, background: 'var(--color-fill-2)' };
const titleStyle = { fontSize: 12, color: '#141f33' };

export default () => {
  return (
    <div style={{ width: '100%' }}>
    <p style={titleStyle}>
      <Typography.Text>容器左排列</Typography.Text>
    </p>
    <Row className="grid-demo" justify="start" style={rowStyle}>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
    </Row>
    <p style={titleStyle}>
      <Typography.Text>容器居中排列</Typography.Text>
    </p>
    <Row className="grid-demo" justify="center" style={rowStyle}>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
    </Row>
    <p style={titleStyle}>
      <Typography.Text>容器右排列</Typography.Text>
    </p>
    <Row className="grid-demo" justify="end" style={rowStyle}>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
    </Row>
    <p style={titleStyle}>
      <Typography.Text>容器分散排列</Typography.Text>
    </p>
    <Row className="grid-demo" justify="space-around" style={rowStyle}>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
    </Row>
    <p style={titleStyle}>
      <Typography.Text>容器等距排列</Typography.Text>
    </p>
    <Row className="grid-demo" justify="space-between" style={rowStyle}>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
      <Col span={4}>
        <div>col - 4</div>
      </Col>
    </Row>
  </div>
  )
}
