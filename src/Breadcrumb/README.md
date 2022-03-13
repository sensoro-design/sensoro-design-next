---
nav:
  title: 组件
  path: /components
---

# 面包屑 Breadcrumb

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

## API

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 显示省略

<code src="./__demo__/max-count.demo.tsx" />

### 自定义分隔符

<code src="./__demo__/separator.demo.tsx" />

### 自定义尺寸

<code src="./__demo__/size.demo.tsx" />

### 带有下拉菜单

<code src="./__demo__/with-dropdown.demo.tsx" />

### 自定义图标

<code src="./__demo__/with-icon.demo.tsx" />

### Breadcrumb

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|separator|指定分割符|`string \| ReactNode`|`<IconObliqueLine />`|
|routes|直接设置下拉菜单|`RouteProps[]`|`-`|
|maxCount|最多渲染的面包屑数量|`number`|`-`|
|itemRender|routes 时生效，自定义渲染面包屑|`(route: RouteProps, routes: RouteProps[], paths: string[]) => ReactNode`|`-`|

### Breadcrumb.Item

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|droplist|下拉菜单的内容，等同于下拉菜单组件的 droplist 属性|`DropdownProps['droplist']`|`-`|
|dropdownProps|下拉菜单的属性 [DropdownProps](/react/components/dropdown)|`DropdownProps`|`-`|
