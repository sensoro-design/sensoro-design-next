/**
 * title: 无边框卡片
 * desc: 设置 `bordered` 为 `false` 来使用无边框卡片。
 */
import { Card, Link } from '@sensoro-design/react';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        padding: 40,
        backgroundColor: 'var(--color-fill-2)',
      }}
    >
      <Card style={{ width: 360 }} title="Arco Card" extra={<Link>More</Link>} bordered={false}>
        Card content
        <br />
        Card content
      </Card>
      <Card
        style={{ width: 360, marginLeft: 24 }}
        title="Hover me"
        hoverable
        extra={<Link>More</Link>}
        bordered={false}
      >
        Card content
        <br />
        Card content
      </Card>
    </div>
  )
}
