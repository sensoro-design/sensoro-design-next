---
nav:
  title: 组件
  path: /components
---

# 标签 Tag

用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。

## 代码演示

### 动态编辑标签

<code src="./__demo__/active.demo.tsx" />

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 带边框的标签

<code src="./__demo__/bordered.demo.tsx" />

### 可选中

<code src="./__demo__/check.demo.tsx" />

### 异步关闭

<code src="./__demo__/close-async.demo.tsx" />

### 可关闭标签

<code src="./__demo__/close.demo.tsx" />

### 多色标签

<code src="./__demo__/color.demo.tsx" />

### 带图标的标签

<code src="./__demo__/icon.demo.tsx" />

### 不同尺寸

<code src="./__demo__/size.demo.tsx" />

## API

### Tag

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|-|
|className|节点类名|`string \| string[]`|`-`|-|
|color|设置标签背景颜色|`string`|`-`|-|
|bordered|是否显示边框|`Boolean`|`-`|2.26.0|
|size|标签尺寸|`'small' \| 'default' \| 'medium' \| 'large'`|`default`|-|
|visible|设置标签显示隐藏|`boolean`|`-`|-|
|closable|是否可关闭标签|`boolean`|`-`|-|
|checkable|是否支持选中|`boolean`|`-`|-|
|defaultChecked|是否默认选中|`boolean`|`-`|-|
|checked|是否选中（受控模式）|`boolean`|`-`|-|
|icon|设置图标|`ReactNode`|`-`|-|
|closeIcon|自定义关闭图标|`ReactNode`|`-`|-|
|onClose|关闭标签回调函数|`(e) => Promise<any> \| void`|`-`|-|
|onCheck|选中的回调|`(checked: boolean) => void`|`-`|-|
