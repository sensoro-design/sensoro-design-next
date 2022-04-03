---
nav:
  title: 组件
  path: /components
---

# 复选框 Checkbox

在一组数据中，用户可通过复选框选择一个或多个数据。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 禁用

<code src="./__demo__/disabled.demo.tsx" />

### 受控

<code src="./__demo__/control.demo.tsx" />

### 复选框组

<code src="./__demo__/group.demo.tsx" />

### 全选

<code src="./__demo__/check-all.demo.tsx" />

### 布局

<code src="./__demo__/group-jsx.demo.tsx" />

### 自定义节点内容

<code src="./__demo__/custom-render.demo.tsx" />

### useCheckbox

<code src="./__demo__/use-checkbox.demo.tsx" />

## API

### Checkbox

`T = string | number`

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|disabled|是否禁用|`boolean`|`-`|
|error|错误样式|`boolean`|`-`|
|checked|是否选中|`boolean`|`-`|
|defaultChecked|默认是否选中|`boolean`|`-`|
|indeterminate|半选状态|`boolean`|`-`|
|onChange|点击复选框的回调|`(checked: boolean, e: Event) => void`|`-`|
|value|复选框的 value 属性|`T`|`-`|

### Checkbox.Group

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|disabled|整组失效|`boolean`|`-`|
|direction|方向|`'horizontal' \| 'vertical'`|`horizontal`|
|defaultValue|默认选中的选项|`T[]`|`-`|
|options|可选项|`(T \| { label: ReactNode; value: T; disabled?: boolean })[]`|`-`|
|value|选中的选项（受控模式）|`T[]`|`-`|
|onChange|变化时的回调函数|`(value: T[], e: Event) => void`|`-`|

### `Checkbox.useCheckbox`

```js
/** T = string | number */
const result: ResultType = Checkbox.useCheckbox<T>(values: T[], defaultSelected?: T[]);
```

**ResultType**

|参数名|描述|类型|
|---|:---:|:---:|
| selected | 当前选中项 | `T[]` |
| setSelected | 只选中传入参数的选项 | `(value: T[]) => void;` |
| setValueSelected | 设置选项的选中状态，第二个参数为要设置的选中状态。 | `(value: T \| T[], selected?: boolean) => void;` |
| selectAll | 选中全部 | `() => void;` |
| unSelectAll | 取消全部选中 | `() => void;` |
| isSelected | 是否选项被选中 | `(value: T) => boolean;` |
| toggle | 切换选项选中状态。不传参数时，会切换所有选项的选中状态 | `(value?: T \| T[]) => void;` |
| isAllSelected | 是否全部选项被选中 | `() => boolean;` |
| isPartialSelected | 是否只有部分选项选中 | `() => boolean;` |
