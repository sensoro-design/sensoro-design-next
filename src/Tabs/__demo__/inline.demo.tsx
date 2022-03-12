
/**
 * title: 嵌套使用
 * desc: 组件可以嵌套使用。
 */
import { Tabs, Typography } from '@sensoro-design/react';

const TabPane = Tabs.TabPane;

const style = { textAlign: 'center', marginTop: 20 };

export default () => {
  return (
    <Tabs tabPosition="left">
      <TabPane key="tab1" title="Tab 1">
        <div>
          <Tabs>
            <TabPane key="tab1" title="Tab 1">
              <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
            </TabPane>
            <TabPane key="tab2" title="Tab 2">
              <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
            </TabPane>
            <TabPane key="tab3" title="Tab 3">
              <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
            </TabPane>
          </Tabs>
        </div>
      </TabPane>
      <TabPane key="tab2" title="Tab 2">
        <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="tab3" title="Tab 3">
        <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  )
}
