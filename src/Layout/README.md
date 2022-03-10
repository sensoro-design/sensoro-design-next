---
nav:
  title: 组件
  path: /components
---

# 布局 Layout

页面的基础布局框架，常与组件嵌套使用，构建页面整体布局。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 自定义按钮 Icon

<code src="./__demo__/customIcon.demo.tsx" />

### 自定义收起按钮

<code src="./__demo__/collapsed.demo.tsx" />

### 响应式侧边栏

<code src="./__demo__/breakpoint.demo.tsx" />

### 可伸缩侧边栏

<code src="./__demo__/resize.demo.tsx" />

## API

### Layout

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|hasSider|表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动|`boolean`|`-`|

### Layout.Header

|参数名|描述|类型|默认值|
|---|---|---|---|
|className|节点类名|`string \| string[]`|`-`|
|style|节点样式|`CSSProperties`|`-`|

### Layout.Footer

|参数名|描述|类型|默认值|
|---|---|---|---|
|className|节点类名|`string \| string[]`|`-`|
|style|节点样式|`CSSProperties`|`-`|

### Layout.Content

|参数名|描述|类型|默认值|
|---|---|---|---|
|className|节点类名|`string \| string[]`|`-`|
|style|节点样式|`CSSProperties`|`-`|

### Layout.Sider

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|theme|主题颜色|`'dark' \| 'light'`|`light`|
|collapsed|当前收起状态|`boolean`|`-`|
|collapsible|是否可收起|`boolean`|`-`|
|collapsedWidth|收缩宽度，设置为 0 会出现特殊 trigger|`number`|`48`|
|defaultCollapsed|是否默认收起|`boolean`|`-`|
|reverseArrow|翻转折叠提示箭头的方向，当 Sider 在右边时可以使用|`boolean`|`-`|
|trigger|自定义底部折叠触发器，设置为 null 时隐藏 trigger|`string \| React.ReactNode`|`-`|
|width|宽度|`number \| string`|`200`|
|breakpoint|触发响应式布局的断点, 详见[响应式栅格](/react/components/Grid)|`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'`|`-`|
|onBreakpoint|触发响应式布局断点时的回调|`(broken: boolean) => void`|`-`|
|onCollapse|展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发|`(collapse: boolean, type: 'clickTrigger' \| 'responsive') => void`|`-`|
|resizeDirections|可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。详情请看 [ResizeBox](/react/components/resize-box)。|`string[]`|`-`|
