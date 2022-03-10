---
nav:
  title: 组件
  path: /components
---

# 开关 Switch

互斥性的操作控件，用户可打开或关闭某个功能。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 不同类型

<code src="./__demo__/type.demo.tsx" />

### 禁用状态

<code src="./__demo__/disabled.demo.tsx" />

### 不同尺寸的开关

<code src="./__demo__/size.demo.tsx" />

### 自定义文案

<code src="./__demo__/checked_text.demo.tsx" />

### 带图标的开关

<code src="./__demo__/icon.demo.tsx" />

### 加载中

<code src="./__demo__/loading.demo.tsx" />

## API

### Switch

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|disabled|是否禁用|`boolean`|`-`|
|onChange|点击开关的回调|`(value: boolean, event) => void`|`-`|
|size|开关的尺寸，有 `small` 和 `default` 可供选择。|`'small' \| 'default'`|`-`|
|type|三种样式类型|`'circle' \| 'round' \| 'line'`|`circle`|
|checkedText|开关打开时的文案，small 尺寸不生效。|`ReactNode`|`-`|
|uncheckedText|开关关闭时的文案，small 尺寸不生效。|`ReactNode`|`-`|
|uncheckedIcon|开关关闭时，按钮上显示的图标|`ReactNode`|`-`|
|checkedIcon|开关打开时，按钮上显示的图标|`ReactNode`|`-`|
|defaultChecked|默认是否选中|`boolean`|`-`|
|checked|开关是否打开|`boolean`|`-`|
|loading|加载中状态|`boolean`|`-`|
