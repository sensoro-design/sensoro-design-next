/**
 * title: 受控模式
 * desc: 通过 `activeTab` 开启受控模式。
 */
import React from 'react';
import { useState } from 'react';
import { Tabs, Typography } from '@sensoro-design/react';

const TabPane = Tabs.TabPane;

const style: React.CSSProperties = { textAlign: 'center', marginTop: 20 };

export default () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <Tabs activeTab={activeTab} onChange={setActiveTab}>
      <TabPane key="1" title="Tab 1">
        <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title="Tab 2">
        <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title="Tab 3">
        <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  );
}
