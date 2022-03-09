---
order: 1
title: 
  zh-CN: 自定义分隔符
  en-US: Separator
---

## zh-CN

自定义分隔符。

## en-US

Custom separator.

```js
import { Breadcrumb, Space } from '@sensoro-design/react';
import { IconRight } from '@sensoro-design/react/icon';

const BreadcrumbItem = Breadcrumb.Item;

ReactDOM.render(
  <Space size={40}>
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator={<IconRight />}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator={<span>・</span>}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  </Space>,
  CONTAINER
);
```
