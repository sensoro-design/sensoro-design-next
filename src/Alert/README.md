---
nav:
  title: 组件
  path: /components
---

# 警告提示 Alert

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 不同类型

<code src="./__demo__/type.demo.tsx" />

### 可关闭

<code src="./__demo__/closable.demo.tsx" />

### 自定义关闭元素

<code src="./__demo__/close-element.demo.tsx" />

### 含有标题

<code src="./__demo__/with-title.demo.tsx" />

### 不含图标

<code src="./__demo__/without-icon.demo.tsx" />

### 顶部公告

<code src="./__demo__/banner.demo.tsx" />

### 操作项

<code src="./__demo__/action.demo.tsx" />

## API

### Alert

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|action|自定义操作项|`ReactNode`|`-`|
|closable|是否可关闭|`boolean`|`-`|
|onClose|关闭的回调|`(e) => void`|`-`|
|afterClose|关闭动画结束后执行的回调|`() => void`|`-`|
|type|警告的类型|`'info' \| 'success' \| 'warning' \| 'error'`|`info`|
|title|标题|`ReactNode`|`-`|
|content|内容|`ReactNode`|`-`|
|icon|可以指定自定义图标，`showIcon` 为 `true` 时生效。|`ReactNode`|`-`|
|closeElement|自定义关闭按钮|`ReactNode`|`-`|
|showIcon|是否显示图标|`boolean`|`true`|
|banner|是否用作顶部公告|`boolean`|`-`|
