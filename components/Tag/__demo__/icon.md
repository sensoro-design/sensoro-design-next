---
order: 7
title: 
  zh-CN: 带图标的标签
  en-US: Icon
---

## zh-CN

可通过设置 `icon` 在标签中加入图标。

## en-US

An icon can be added to the label by setting `icon`.

```js
import { Tag, Space } from '@sensoro-design/react';
import { IconGitlab, IconTwitter, IconGithub, IconFacebook } from '@sensoro-design/react/icon';

ReactDOM.render(
  <Space size="large">
    <Tag color="gray" icon={<IconGithub />}>Github</Tag>
    <Tag color="orangered" icon={<IconGitlab />}>Gitlab</Tag>
    <Tag color="blue" icon={<IconTwitter />}>Twitter</Tag>
    <Tag color="arcoblue" icon={<IconFacebook />}>Facebook</Tag>
  </Space>,
  CONTAINER
);
```
