---
nav:
  title: 组件
  path: /components
---

# 数据穿梭框 Transfer

两栏布局的多选组件，将元素从一栏即时移到另一栏。

## 代码演示

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 关闭分页

<code src="./__demo__/close-pagination.demo.tsx" />

### 分组

<code src="./__demo__/group.demo.tsx" />

### 禁用

<code src="./__demo__/disabled.demo.tsx" />

### 拖拽排序

<code src="./__demo__/draggable.demo.tsx" />

## API

### Transfer

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|className|节点类名|`string`|`-`|-|
|style|节点样式|`CSSProperties`|`-`|-|
|disabled|是否禁用|`boolean`|`false`|-|
|draggable|是否开启拖拽排序|`boolean`|`false`|-|
|dataSource|数据源|`DataSource[]`|-|-|
|defaultValue|默认已选中值|`(string \| number)[]`|-|-|
|value|已选中值|`(string \| number)[]`|-|-|
|type|Transfer 类型|`'list' \| 'groupList' \| 'treeList'`|`list`|-|
|emptyContent|自定义空状态|`EmptyContent`|-|-|
|filter|自定义筛选逻辑|`boolean | ((input: string, item: D) => boolean)`|-|-|
|inputProps|自定义搜索框|`InputProps`|-|-|
|loading|是否正在加载左侧选项|`boolean`|-|-|
|showPath| 当 type 为treeList时，控制右侧选中项是否显示选择路径|`boolean`|-|-|
|pagination|分页配置|`boolean \| { pageSize?: number; }`|`true`|-|
