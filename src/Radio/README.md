---
nav:
  title: 组件
  path: /components
---

# 单选框 Radio

在一组相关且互斥数据中，用户仅能选择一个选项。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 单选框组

<code src="./__demo__/radio-group.demo.tsx" />

### 竖直单选组

<code src="./__demo__/direction.demo.tsx" />

### 带图标的单选框

<code src="./__demo__/icon.demo.tsx" />

### 按钮类型

<code src="./__demo__/radio-button.demo.tsx" />

### 不同尺寸

<code src="./__demo__/size.demo.tsx" />

### 自定义节点内容

<code src="./__demo__/custom-render.demo.tsx" />

## API

### Radio

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|disabled|是否禁用|`boolean`|`-`|
|value|控件的 `value`|`T`|`-`|
|checked|是否选中（受控模式）|`boolean`|`-`|
|defaultChecked|初始是否选中|`boolean`|`-`|
|onChange|值变化的回调|`(checked: boolean, event: ChangeEvent) => void`|`-`|

### Radio.Group

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|name|`Radio` 的 name|`string`|`-`|
|type|单选的类型，是单选还是按钮|`'radio' \| 'button'`|`radio`|
|direction|方向|`'vertical' \| 'horizontal'`|`horizontal`|
|size|按钮类型的单选框尺寸（只在按钮类型下生效）|`'small' \| 'default' \| 'large' \| 'mini'`|`-`|
|onChange|点击单选的回调|`(value: any, event: ChangeEvent) => void`|`-`|
|defaultValue|默认选中的值|`any`|`-`|
|value|选中的值（受控模式）|`any`|`-`|
|options|以数组配置的形式来设置单选组|`(string \| number \| { label: ReactNode; value: any; disabled?: boolean })[]`|`-`|
