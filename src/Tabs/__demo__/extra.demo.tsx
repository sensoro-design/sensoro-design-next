
/**
 * title: 附加
 * desc: 通过 `extra` 可以在页签的右侧添加额外内容。
 */
import { Tabs, Button, Typography } from '@sensoro-design/react';

const TabPane = Tabs.TabPane;

const style = { textAlign: 'center', marginTop: 20 };

export default () => {
  return (
    <Tabs
      defaultActiveTab="1"
      extra={
        <Button size="small" type="secondary">
          Action
        </Button>
      }
    >
      <TabPane key="1" title="Tab 1">
        <Typography.Paragraph style={style}>Content of Tab Panel  1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title="Tab 2" disabled>
        <Typography.Paragraph style={style}>Content of Tab Panel  2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title="Tab 3">
        <Typography.Paragraph style={style}>Content of Tab Panel  3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  )
}
