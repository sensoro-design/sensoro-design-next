/**
 * title: 基础用法
 * desc: 最简单的使用。
 */
import React from 'react';
import { Tabs, Typography } from '@sensoro-design/react';

const TabPane = Tabs.TabPane;

const style: React.CSSProperties = {
  textAlign: 'center',
  marginTop: 20
};

export default () => {
  return (
    <Tabs defaultActiveTab="1" >
      <TabPane key="1" title="Tab 1">
        <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title="Tab 2" disabled>
        <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title="Tab 3">
        <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  )
}
