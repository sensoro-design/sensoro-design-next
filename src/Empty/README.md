---
nav:
  title: 组件
  path: /components
---

# 空状态 Empty

指当前场景没有对应的数据内容，呈现出的一种状态。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 不同大小

<code src="./__demo__/size.demo.tsx" />

### 自定义图标和文案

<code src="./__demo__/custom-icon.demo.tsx" />

### 自定义图片

<code src="./__demo__/image.demo.tsx" />

## API

### Empty

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|description|显示文案|`ReactNode`|`-`|
|icon|自定义显示图案|`ReactNode`|`-`|
|imgSrc|将图标替换为图片|`string`|`-`|
|size|大小|`'small' \| 'default' \| 'large'`|`default`|
