---
nav:
  title: 组件
  path: /components
---

# 描述列表 Descriptions

一般用于详情页的信息展示。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 单列样式

<code src="./__demo__/single.demo.tsx" />

### 标签文本对齐

<code src="./__demo__/align.demo.tsx" />

### 带边框展示

<code src="./__demo__/border.demo.tsx" />

### 不同排列模式

<code src="./__demo__/layout.demo.tsx" />

### 不同尺寸

<code src="./__demo__/size.demo.tsx" />

### 响应式排列

<code src="./__demo__/responsive.demo.tsx" />

## API

### Descriptions

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|-|
|className|节点类名|`string \| string[]`|`-`|-|
|labelStyle|显示标签的单元格的样式|`CSSProperties`|`-`|-|
|valueStyle|显示值的单元格的样式|`CSSProperties`|`-`|-|
|data|描述列表的数据|`DataType`|`-`|-|
|column|一行放置几列数据，一个数据为一列。支持配置 `column` 为数字或者对象，配置对象格式时，支持配置为 `{ xs: 1, md: 2, lg: 3 }` 这种形式来支持响应式排列|`\| number\| { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }`|`3`|-|
|title|标题|`ReactNode`|`-`|-|
|colon|标签文字后显示的内容，一般配置为 ` :`|`ReactNode`|`-`|-|
|border|是否显示边框|`boolean`|`-`|-|
|layout|排列方式|`'horizontal' \| 'vertical' \| 'inline-horizontal' \| 'inline-vertical'`|`horizontal`|-|
|size|描述列表的尺寸，如不指定默认为 `default`|`'mini' \| 'small' \| 'medium' \| 'default' \| 'large'`|`-`|-|
|tableLayout|描述中表格样式的 `layout-fixed`，当设置成 `fixed` 时，宽度会均分。|`'auto' \| 'fixed'`|`auto`|2.6.0|
