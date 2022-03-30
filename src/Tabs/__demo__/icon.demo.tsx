
/**
 * title: 带图标的页签
 * desc: 通过自定义的 title, 可以给页签加 icon。
 */
import React from 'react';
import { Tabs, Typography } from '@sensoro-design/react';

import CalendarOutlined from '@sensoro-design/icons/CalendarOutlined';
import UserOutlined from '@sensoro-design/icons/UserOutlined';
import ClockCircleOutlined from '@sensoro-design/icons/ClockCircleOutlined';

const TabPane = Tabs.TabPane;

const style: React.CSSProperties = {
  textAlign: 'center',
  marginTop: 20
};

export default () => {
  return (
    <Tabs defaultActiveTab="1" >
      <TabPane key="1" title={<span><CalendarOutlined style={{marginRight: 6}} /> Tab 1</span>}>
        <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title={<span><ClockCircleOutlined style={{marginRight: 6}} /> Tab 2</span>} disabled>
        <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title={<span><UserOutlined style={{marginRight: 6}} /> Tab 3</span>}>
        <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  )
}
