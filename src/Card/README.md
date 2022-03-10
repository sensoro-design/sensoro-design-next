---
nav:
  title: 组件
  path: /components
---

# 卡片 Card

将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 鼠标悬浮样式

<code src="./__demo__/hoverable.demo.tsx" />

### 鼠标悬浮样式

<code src="./__demo__/hoverable.demo.tsx" />

### 无边框卡片

<code src="./__demo__/no-border.demo.tsx" />

### 简洁卡片

<code src="./__demo__/only-content.demo.tsx" />

### 更灵活的内容展示

<code src="./__demo__/meta.demo.tsx" />

### 栅格卡片

<code src="./__demo__/with-row.demo.tsx" />

### 预加载的卡片

<code src="./__demo__/with-skeleton.demo.tsx" />

### 网络型内嵌卡片

<code src="./__demo__/card-grid.demo.tsx" />

### 内部卡片

<code src="./__demo__/inner-card.demo.tsx" />

### 带页签的卡片

<code src="./__demo__/with-tab.demo.tsx" />

### 支持更多内容配置

<code src="./__demo__/with-actions.demo.tsx" />

## API

### Card

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|bordered|是否有边框|`boolean`|`true`|
|loading|是否为加载中|`boolean`|`-`|
|hoverable|是否可悬浮|`boolean`|`-`|
|size|卡片尺寸|`'default' \| 'small'`|`default`|
|title|卡片标题|`string \| ReactNode`|`-`|
|extra|卡片右上角的操作区域|`string \| ReactNode`|`-`|
|cover|卡片封面|`ReactNode`|`-`|
|actions|卡片底部的操作组|`ReactNode[]`|`-`|
|headerStyle|自定义标题区域样式|`CSSProperties`|`-`|
|bodyStyle|内容区域自定义样式|`CSSProperties`|`-`|

### Card.Meta

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|avatar|头像|`ReactNode`|`-`|
|title|标题|`string \| ReactNode`|`-`|
|description|描述|`string \| ReactNode`|`-`|

### Card.Grid

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|hoverable|是否可以悬浮|`boolean`|`-`|
