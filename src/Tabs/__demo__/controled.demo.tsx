
/**
 * title:
 * desc:
 */
---
order: 5
title: 
  zh-CN: 受控模式
  en-US: Controlled
---

## zh-CN

通过 `activeTab` 开启受控模式。

## en-US

Open the controlled mode through `activeTab`.

```js
import { useState } from 'react';
import { Tabs, Typography } from '@sensoro-design/react';

const TabPane = Tabs.TabPane;

const style = { textAlign: 'center', marginTop: 20 };

function Demo() {
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

ReactDOM.render(<Demo />, CONTAINER);
```

