---
nav:
  title: 组件
  path: /components
---

# 骨架屏 Skeleton

将加载中的数据用灰色占位。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 文本行数和宽度

<code src="./__demo__/rows.demo.tsx" />

### 动画

<code src="./__demo__/animate.demo.tsx" />

## API

### Skeleton

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|animation|是否显示动画效果|`boolean`|`-`|
|loading|是否显示子组件。为 `true` 时候显示占位符|`boolean`|`true`|
|image|是否显示图片占位|`SkeletonImageProps \| boolean`|`-`|
|text|是否显示文本占位|`SkeletonTextProps \| boolean`|`true`|
