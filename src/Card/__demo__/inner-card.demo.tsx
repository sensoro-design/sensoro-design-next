/**
 * title: 内部卡片
 * desc: 卡片中可以嵌套其他卡片组件。
 * background: var(--color-fill-2)
 */
import { Card, Link } from '@sensoro-design/react';

export default () => {
  return (
    <Card title="Arco Card">
      <Card style={{ marginBottom: 20 }} title="Inner Card Title" extra={<Link>More</Link>}>
        Inner Card Content
      </Card>
      <Card title="Inner Card Title" extra={<Link>More</Link>}>
        Inner Card Content
      </Card>
    </Card>
  )
}
