---
nav:
  title: 组件
  path: /components
---

# 链接 Link

链接的基本样式。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 其他状态

<code src="./__demo__/status.demo.tsx" />

### 图标

<code src="./__demo__/icon.demo.tsx" />

### 悬浮状态样式

<code src="./__demo__/hoverable.demo.tsx" />

### 配合dropdown使用

<code src="./__demo__/dropdown.demo.tsx" />

## API

### Link

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|className|节点类名|`string \| string[]`|`-`|-|
|style|节点样式|`CSSProperties`|`-`|-|
|icon|显示图标，设置为 `true` 时展示默认图标。|`ReactNode \| boolean`|`-`|-|
|status|不同状态|`'error' \| 'success' \| 'warning'`|`-`|-|
|disabled|是否禁用|`boolean`|`-`|-|
|hoverable|悬浮状态是否有底色|`false`|`true`|-|
