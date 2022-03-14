/**
 * title: 不同尺寸
 * desc: 使用 `size` 属性设置不同尺寸的页签。
 */
import { useState } from 'react';
import { Tabs, Radio, Typography } from '@sensoro-design/react';

const TabPane = Tabs.TabPane;

const style = { textAlign: 'center', marginTop: 20 };

export default () => {
  const [type, setType] = useState('line');
  const [size, setSize] = useState('default');

  return (
    <div>
      <span style={{ marginRight: 20 }}>Size:</span>
        <Radio.Group
          type="button"
          options={['small', 'default', 'large']}
          name="size"
          value={size}
          onChange={setSize}
          style={{ marginBottom: 24 }}
        />
      <br/>
      <span style={{ marginRight: 20 }}>Type:</span>

      <Radio.Group
        type="button"
        options={['line', 'card', 'card-gutter', 'text', 'rounded', 'capsule']}
        name="type"
        value={type}
        onChange={setType}
        style={{ marginBottom: 24 }}
      />

      <Tabs type={type} size={size}>
        <TabPane key="1" title="Tab 1" >
          <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="Tab 2" disabled>
          <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="Tab 3">
          <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
        </TabPane>
        <TabPane key="4" title="Tab 4">
          <Typography.Paragraph style={style}>Content of Tab Panel 4</Typography.Paragraph>
        </TabPane>
      </Tabs>
    </div>
  );
}
