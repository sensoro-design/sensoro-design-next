---
nav:
  title: 组件
  path: /components
---

# 折叠面板 Collapse

可以折叠 / 展开的内容区域。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 手风琴模式

<code src="./__demo__/accordion.demo.tsx" />

### 嵌套面板

<code src="./__demo__/inline.demo.tsx" />

### 简洁面板

<code src="./__demo__/borderless.demo.tsx" />

### 自定义面板样式

<code src="./__demo__/custom-style.demo.tsx" />

### 额外节点

<code src="./__demo__/extra.demo.tsx" />

### 展开图标位置

<code src="./__demo__/icon-position.demo.tsx" />

### Lazyload

<code src="./__demo__/lazyload.demo.tsx" />

### 隐藏时销毁

<code src="./__demo__/destory-on-hide.demo.tsx" />

## API

### Collapse

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|activeKey|当前面板选中值|`string \| string[]`|`-`|
|defaultActiveKey|默认展开的面板|`string \| string[]`|`-`|
|accordion|是否是手风琴模式|`boolean`|`-`|
|expandIcon|自定义展开图标|`ReactNode`|`-`|
|expandIconPosition|展开图标的位置|`'left' \| 'right'`|`left`|
|bordered|无边框样式|`boolean`|`true`|
|lazyload|设置为 `true` 时，挂载时不会渲染被隐藏的面板。|`boolean`|`true`|
|destroyOnHide|是否销毁被折叠的面板|`boolean`|`-`|
|onChange|展开面板改变时触发|`(key: string, keys: string[], e) => void`|`-`|

### Collapse.Item

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|-|
|className|节点类名|`string \| string[]`|`-`|-|
|contentStyle|内容区域的附加样式。|`CSSProperties`|`-`|2.15.0|
|header|折叠面板头部内容，允许自定义|`React.ReactNode`|`-`|-|
|name|对应 activeKey，当前面板组件的的唯一标识|`string` **(必填)**|`-`|-|
|disabled|是否禁用|`boolean`|`-`|-|
|expandIcon|自定义展开图标|`ReactNode`|`-`|-|
|showExpandIcon|是否展示展开按钮|`boolean`|`true`|-|
|extra|额外节点|`ReactNode`|`-`|-|
|destroyOnHide|面板被折叠时是否销毁节点，优先级高于 `Collapse` 的 `destroyOnHide`|`boolean`|`-`|-|
