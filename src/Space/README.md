---
nav:
  title: 组件
  path: /components
---
# 间距 Space

设置组件之间的间距。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 垂直间距

<code src="./__demo__/vertical.demo.tsx" />

### 尺寸

<code src="./__demo__/size.demo.tsx" />

### 对齐

<code src="./__demo__/align.demo.tsx" />

### 环绕间距

<code src="./__demo__/wrap.demo.tsx" />

### 分隔符

<code src="./__demo__/split.demo.tsx" />

## API

### Space

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|-|
|className|节点类名|`string \| string[]`|`-`|-|
|align|对齐方式|`'start' \| 'end' \| 'center' \| 'baseline'`|`-`|-|
|direction|间距方向|`'vertical' \| 'horizontal'`|`horizontal`|-|
|size|尺寸|`SpaceSize \| SpaceSize[]`|`small`|-|
|wrap|环绕类型的间距，用于折行的场景。|`boolean`|`-`|-|
|split|设置分隔符|`ReactNode`|`-`|2.22.0|
