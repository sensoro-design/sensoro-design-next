---
nav:
  title: 组件
  path: /components
---

# 徽标数 Badge

一般出现在图标或文字的右上角。提供及时、重要的信息提示。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 独立使用

<code src="./__demo__/no-children.demo.tsx" />

### 小红点

<code src="./__demo__/dot.demo.tsx" />

### 文本内容

<code src="./__demo__/text.demo.tsx" />

### 文本内容

<code src="./__demo__/max-count.demo.tsx" />

### 状态值

<code src="./__demo__/status.demo.tsx" />

### 颜色

<code src="./__demo__/color.demo.tsx" />

### 动画效果

<code src="./__demo__/animate.demo.tsx" />

## API

### Badge

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|count|徽标显示的数字|`number \| ReactNode`|`0`|
|text|自定义提示内容|`string`|`-`|
|dot|显示为小红点|`boolean`|`-`|
|dotStyle|徽标的样式|`CSSProperties`|`-`|
|dotClassName|徽标的类名|`string \| string[]`|`-`|
|maxCount|徽标最大显示数值，如果 count 超过这个数值会显示为 `${maxCount}+`|`number`|`99`|
|offset|设置徽标位置的偏移|`[number, number]`|`-`|
|color|内置的一些颜色|`\| 'red'\| 'orangered'\| 'orange'\| 'gold'\| 'lime'\| 'green'\| 'cyan'\| 'arcoblue'\| 'purple'\| 'pinkpurple'\| 'magenta'\| 'gray'\| string`|`-`|
|status|徽标的状态类型|`'default' \| 'processing' \| 'success' \| 'warning' \| 'error'`|`-`|

## 常见问题

1. 如何在 `dot=true` 时设置不显示小红点？
  可以设置`count=0`。`count > 0` 的时候才会展示徽标。
