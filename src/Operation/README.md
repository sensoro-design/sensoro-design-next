---
nav:
  title: 组件
  path: /components
---

# 操作项 Operation

操作区命令过多时，可将部分操作收敛到向下展开的浮层容器中。

## 代码演示

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 链接

<code src="./__demo__/link.demo.tsx" />

### 主操作位置

<code src="./__demo__/position.demo.tsx" />

### 图标

<code src="./__demo__/icon.demo.tsx" />

### 禁用

<code src="./__demo__/disabled.demo.tsx" />

### 状态

<code src="./__demo__/status.demo.tsx" />

## API

### Operations

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|position|主操作按钮位置|`'left' \| 'right'`|`left`|-|
|disabled|是否禁用|`boolean`|-|-|
|space|操作项之间的间距|`number`|`12`|-|
|type|操作箱类型|`'button' \| 'link'`|`button`|-|
|maxCount|最大的显示数量|`number`|`3`|-|
|options|操作箱配置|`Option[]`|`[]`|-|
|onClick|点击回调|`(key: string \| number) => void`|-|-|

### Option

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|type|按钮类型|`string`|-|
|icon|操作项前面显示的Icon|`ReactNode`|-|
|status|操作项状态|`'warning' \| 'error' \| 'success'`|-|
|label|操作项文案|`string`|-|
|value|点击回调的参数|`string \| number`|-|
|disabled|禁用操作项|`boolean`|-|
