/**
 * title: 带页签的卡片
 * desc: 举例来说，可以在卡片组件里面使用 `Tabs` 标签页组件。
 * background: var(--color-fill-2)
 */
import { Card, Tabs, Link } from '@sensoro-design/react';

const TabPane = Tabs.TabPane;

export default () => {
  return (
    <Card title="Card with Tab" extra={<Link>More</Link>} style={{ width: '100%' }}>
      <Tabs style={{ maxWidth: 350, margin: -15 }}>
        {new Array(4).fill(null).map((_, index) => {
          return (
            <TabPane destroyOnHide key={index} title={`Tab ${index}`}>
              <div style={{ margin: '0px 16px 16px 16px' }}>
                {`Content ${index}`}
                <br />
                {`Content ${index}`}
                <br />
                {`Content ${index}`}
              </div>
            </TabPane>
          );
        })}
      </Tabs>
    </Card>
  )
}
