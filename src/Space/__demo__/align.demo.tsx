/**
 * title: 对齐
 * desc: 内置 4 种对齐方式，分别为 `start` `center` `end` `baseline`，在水平模式下默认为 `center`。
 */
import { useState } from 'react';
import { Space, Button, Radio, Typography, Card } from '@sensoro-design/react';

export default () => {
  const [align, setAlign] = useState('center' as const);

  return <div>
    <div style={{ marginBottom: 20 }}>
      <Radio.Group
        options={['start', 'center', 'end', 'baseline']}
        value={align}
        onChange={(value) => setAlign(value)}
        type="button"
      />
    </div>
    <Space align={align} style={{ backgroundColor: 'var(--color-fill-2)', padding: 10 }}>
      <Typography.Text>Space:</Typography.Text>
      <Button type="primary">Item2</Button>
      <Card title='Card'>
        Card content
      </Card>
    </Space>
  </div>;
}
