/**
 * title: 边框卡片
 * desc: 设置 `bordered` 为 `true` 来使用边框卡片。
 */
import { Card, Link } from '@sensoro-design/react';

export default () => {
  return (
    <Card style={{ width: 360 }} title="Sensoro Card" extra={<Link>More</Link>} bordered>
      Card content
      <br />
      Card content
    </Card>
  )
}
