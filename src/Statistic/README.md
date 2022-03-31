---
nav:
  title: 组件
  path: /components
---

# 数值显示 Statistic

突出展示某个或某组数字、带描述的统计类数据。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 前缀后缀/自定义样式

<code src="./__demo__/prefix-suffix.demo.tsx" />

### 数值动效

<code src="./__demo__/count-up.demo.tsx" />

### 计时组件

<code src="./__demo__/countdown.demo.tsx" />

### 计时组件

<code src="./__demo__/time.demo.tsx" />

### 加载中

<code src="./__demo__/loading.demo.tsx" />

## API

### Statistic

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|-|
|className|节点类名|`string \| string[]`|`-`|-|
|styleValue|数值的样式|`CSSProperties`|`-`|-|
|title|数值的标题|`string \| ReactNode`|`-`|-|
|value|数值|`string \| number \| Dayjs`|`-`|-|
|precision|数字精度|`number`|`-`|-|
|groupSeparator|显示千位分割符|`boolean`|`-`|-|
|prefix|前缀|`string \| ReactNode`|`-`|-|
|suffix|后缀|`string \| ReactNode`|`-`|-|
|extra|在数值下展示额外内容|`ReactNode`|`-`|-|
|countUp|数字动态变大|`boolean`|`-`|-|
|countFrom|从什么数字开始动态变大|`number`|`0`|-|
|countDuration|动态变大的过渡时间 (ms)|`number`|`2000`|-|
|format|[dayjs](https://github.com/iamkun/dayjs)'s format|`string`|`-`|-|
|loading|数字是否加载中|`boolean`|`-`|2.20.0|

### Statistic.Countdown

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|styleValue|数值的样式|`CSSProperties`|`-`|
|title|数值的标题|`string \| ReactNode`|`-`|
|value|倒计时的时间|`number \| string \| Date \| Dayjs`|`-`|
|format|[dayjs](https://github.com/iamkun/dayjs)'s format|`string`|`HH:mm:ss`|
|onFinish|倒计时完成后触发的回调|`() => void`|`-`|
|start|是否开始倒计时，默认为 `true`，可以通过设置该值控制倒计时的时机|`boolean`|`true`|
|now|用于修正初始化时间显示不正确|`number \| string \| Date \| Dayjs`|`-`|
