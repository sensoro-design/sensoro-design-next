---
nav:
  title: 组件
  path: /components
---

# 结果 Result

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示

### 403

<code src="./__demo__/403.demo.tsx" />

### 404

<code src="./__demo__/404.demo.tsx" />

### 500

<code src="./__demo__/500.demo.tsx" />

### 完整功能

<code src="./__demo__/all.demo.tsx" />

### Success

<code src="./__demo__/basic.demo.tsx" />

### Error

<code src="./__demo__/error.demo.tsx" />

### 自定义icon

<code src="./__demo__/icon.demo.tsx" />

### Info

<code src="./__demo__/info.demo.tsx" />

### warning

<code src="./__demo__/warning.demo.tsx" />

## API

### Result

|参数名|描述|类型|默认值|
|---|---|---|---|
|className|节点类名|`string \| string[]`|`-`|
|style|节点样式|`CSSProperties`|`-`|
|title|标题文字|`ReactNode`|`-`|
|subTitle|子标题文字|`ReactNode`|`-`|
|status|不同状态，传入 null 时，需要通过 `icon` 属性设置图标，并且默认没有背景色以及图标颜色|`'success' \| 'error' \| 'info' \| 'warning' \| '404' \| '403' \| '500' \| null`|`info`|
|icon|自定义图标|`ReactNode`|`-`|
|extra|额外内容|`ReactNode`|`-`|
