/**
 * title: 鼠标悬浮样式
 * desc: 指定 `hoverable` 来为卡片添加鼠标悬浮样式，同时你可以通过样式覆盖来自定义悬浮样式。
* background: var(--color-fill-2)
 */
import { Card, Link } from '@sensoro-design/react';

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <Card
        style={{ width: 360 }}
        title="Arco Card"
        hoverable
        extra={<Link>More</Link>}
      >
        Card content
        <br />
        Card content
      </Card>
      <Card
        style={{ width: 360, marginLeft: 24 }}
        className="card-custom-hover-style"
        title="Custom hover style"
        hoverable
        extra={<Link>More</Link>}
      >
        Card content <br /> Card content
      </Card>
    </div>
  )
}
