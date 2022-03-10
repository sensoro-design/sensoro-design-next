
/**
 * title:
 * desc:
 */
---
order: 0
title: 
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

标签的基础用法。

## en-US

Basic usage of tags.

```js
import { Tag, Space } from '@sensoro-design/react';
import { IconCheckCircleFill } from '@sensoro-design/react/icon';

ReactDOM.render(
  <Space size="large">
    <Tag>Default</Tag>
    <Tag>Tag 1</Tag>
    <Tag>Tag 2</Tag>
    <Tag icon={<IconCheckCircleFill />}>Complete</Tag>
  </Space>,
  CONTAINER
);
```

