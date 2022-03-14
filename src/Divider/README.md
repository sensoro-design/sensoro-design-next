---
nav:
  title: 组件
  path: /components
---

# 分割线 Divider

划分内容区域，对模块做分隔。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 虚线

<code src="./__demo__/dashed.demo.tsx" />

### 带有文字的分割线

<code src="./__demo__/with-text.demo.tsx" />

### 竖直分割线

<code src="./__demo__/vertical.demo.tsx" />

## API

### Divider

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|dashed|是否虚线|`boolean`|`false`|
|type|分割线的类型，是水平还是竖直，分别对应 `horizontal` 和 `vertical`|`'horizontal' \| 'vertical'`|`horizontal`|
|orientation|分割线文字的位置|`'left' \| 'right' \| 'center'`|`center`|
