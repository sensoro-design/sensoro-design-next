/**
 * title: 栅格卡片
 * desc: 在系统概览页面常常和栅格进行配合。
 * background: var(--color-fill-2)
 */
import { Card, Grid, Link } from '@sensoro-design/react';

const { Row, Col } = Grid;

const extra = <Link>More</Link>;

export default () => {
  return (
    <div style={{ boxSizing: 'border-box', width: '100%', padding: 40, backgroundColor: 'var(--color-fill-2)' }}>
      <Row gutter={20} style={{ marginBottom: 20 }}>
        <Col span={8}>
          <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
            Card content
          </Card>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={16}>
          <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  )
}
