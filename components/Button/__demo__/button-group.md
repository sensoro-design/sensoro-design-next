---
order: 7
title: 
  zh-CN: 组合按钮
  en-US: Button group
---

## zh-CN

可用在同级多项操作，以按钮组合方式出现。

## en-US

Button group can be used to group together operation buttons at the same level.

```js
import { Button, Space } from '@sensoro-design/react';
import { IconLeft, IconRight, IconMore, IconStar, IconSettings, IconMessage, IconDown } from '@sensoro-design/react/icon';

const ButtonGroup = Button.Group;

ReactDOM.render(
  <Space size="large" direction="vertical">
    <Space size="large">
      <ButtonGroup>
        <Button>Publish</Button>
        <Button icon={<IconDown />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="secondary">Publish</Button>
        <Button type="secondary" icon={<IconMore />} />
      </ButtonGroup>
    </Space>
    <ButtonGroup>
      <Button type="primary">Publish</Button>
      <Button type="primary" icon={<IconDown />} />
    </ButtonGroup>
    <Space size="large">
      <ButtonGroup>
        <Button type="primary" icon={<IconLeft />} style={{ padding: '0 8px' }}>Prev</Button>
        <Button type="primary" style={{ padding: '0 8px' }}>Next<IconRight /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon={<IconStar />} />
        <Button type="primary" icon={<IconMessage />} />
        <Button type="primary" icon={<IconSettings />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon={<IconStar />}>Favorite</Button>
        <Button type="primary" icon={<IconSettings />}>Setting</Button>
      </ButtonGroup>
    </Space>
  </Space>,
  CONTAINER
);
```
