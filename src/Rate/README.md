---
nav:
  title: 组件
  path: /components
---

# 评分 Rate

评分打星组件。

## API

### 支持清除

<code src="./__demo__/allow-clear.demo.tsx" />

### 半选

<code src="./__demo__/allowHalf.demo.tsx" />

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 其他评分字符

<code src="./__demo__/character.demo.tsx" />

### 任意长度的评分

<code src="./__demo__/count.demo.tsx" />

### 笑脸分级

<code src="./__demo__/grading.demo.tsx" />

### 只读

<code src="./__demo__/readonly.demo.tsx" />

### 显示提示信息

<code src="./__demo__/tooltips.demo.tsx" />

### 附有文案

<code src="./__demo__/with-description.demo.tsx" />

### Rate

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|defaultValue|默认值|`number`|`-`|
|character|自定义字符|`ReactNode \| ((index: number) => ReactNode)`|`<IconStarFill />`|
|count|星的总数|`number`|`5`|
|value|星的个数，受控值|`number`|`-`|
|tooltips|自定义每一项的提示信息|`string[]`|`-`|
|allowHalf|是否允许半选|`boolean`|`-`|
|allowClear|是否允许清除|`boolean`|`-`|
|readonly|是否只读，不能选择|`boolean`|`-`|
|disabled|是否禁用|`boolean`|`-`|
|grading|笑脸分级|`boolean`|`-`|
|onChange|选择时的回调|`(value: number) => void`|`-`|
|onHoverChange|鼠标经过时数值变化的回调|`(value: number) => void`|`-`|
