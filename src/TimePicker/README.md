---
nav:
  title: 组件
  path: /components
---

# 时间选择器 TimePicker

在弹出面板上选择时间，以便捷完成时间输入的控件。

## 代码演示

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 受控组件

<code src="./__demo__/control.demo.tsx" />

### 默认值

<code src="./__demo__/default-value.demo.tsx" />

### 禁用确认

<code src="./__demo__/disable-confirm.demo.tsx" />

### 禁用

<code src="./__demo__/disabled.demo.tsx" />

### 禁用部分时间选项

<code src="./__demo__/disabled-time.demo.tsx" />

### 附加内容

<code src="./__demo__/extra.demo.tsx" />

### 定制时分

<code src="./__demo__/format.demo.tsx" />

### 范围选择器

<code src="./__demo__/rangepicker.demo.tsx" />

### 尺寸

<code src="./__demo__/size.demo.tsx" />

### 定制步长

<code src="./__demo__/step.demo.tsx" />

### 时区

<code src="./__demo__/timezone.demo.tsx" />

### 十二小时制

<code src="./__demo__/use-12-hours.demo.tsx" />

### UTC 时间

<code src="./__demo__/utc-offset.demo.tsx" />

## API

### Picker

`TimePicker` 和 `RangePicker` 的通用属性

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|-|
|className|节点类名|`string \| string[]`|`-`|-|
|disabled|是否禁用|`boolean`|`-`|-|
|error|报错样式|`boolean`|`-`|-|
|allowClear|允许清除|`boolean`|`true`|-|
|disableConfirm|禁用确认步骤，开启后直接点选时间不需要点击确认按钮。|`boolean`|`-`|2.12.0|
|position|弹出的框的位置|`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'`|`bl`|-|
|getPopupContainer|弹出框挂载的父节点|`(node: HTMLElement) => Element`|`-`|-|
|placeholder|提示文案|`string \| string[]`|`-`|-|
|format|展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)|`string`|`HH:mm:ss`|-|
|use12Hours|12 小时制|`boolean`|`-`|-|
|onClear|点击清除按钮的回调|`() => void`|`-`|-|
|popupVisible|控制弹出框打开或者关闭|`boolean`|`-`|-|
|triggerProps|可以传入 `Trigger` 组件的参数|`Partial<TriggerProps>`|`-`|-|
|step|设置 时 / 分 / 秒 的选择间隔|`{ hour?: number; minute?: number; second?: number }`|`-`|-|
|disabledHours|禁用的部分小时选项|`() => number[]`|`-`|-|
|disabledMinutes|禁用的部分分钟选项|`(selectedHour) => number[]`|`-`|-|
|disabledSeconds|禁用的部分秒数选项|`(selectedHour, selectedMinute) => number[]`|`-`|-|
|hideDisabledOptions|隐藏禁止选择的选项|`boolean`|`-`|-|
|size|输入框尺寸|`'mini' \| 'small' \| 'default' \| 'large'`|`-`|-|
|scrollSticky|时间列在滚动的时候自动吸附和选中|`boolean`|`true`|2.23.0|
|editable|是否可手动输入|`boolean`|`true`|-|
|icons|用于配置图标|`{ inputSuffix?: ReactNode }`|`-`|-|
|extra|底部附加内容|`ReactNode`|`-`|-|
|unmountOnExit|是否在关闭后销毁 dom 结构|`boolean`|`-`|-|
|utcOffset|设置时区偏移，如果需要 utc 时间则设置为 0。|`number`|`-`|-|
|timezone|设置时区, 如果设置了 `utcOffset`，则以 `utcOffset` 为准。|`string`|`-`|-|

### TimePicker

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|onSelect|组件值发生改变时的回调|`(valueString: string, value: Dayjs) => void`|`-`|-|
|onChange|选择时间时的回调|`(valueString: string, value: Dayjs) => void`|`-`|-|
|defaultValue|默认时间|`CalendarValue`|`-`|-|
|value|组件的值，受控模式|`CalendarValue`|`-`|-|
|showNowBtn|是否显示选择当前时间的按钮|`boolean`|`true`|2.21.0|

### TimePicker.RangePicker

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|onChange|日历组件值发生改变时的回调|`(valueString: string[], value: Dayjs[]) => void`|`-`|-|
|onSelect|选择日期是的回调|`(valueString: string[], value: Dayjs[]) => void`|`-`|-|
|defaultValue|默认时间|`CalendarValue[]`|`-`|-|
|value|日历组件的值|`CalendarValue[]`|`-`|-|
|placeholder|提示文案|`string[]`|`-`|-|
|order|起止时间是否自动排序|`boolean`|`true`|2.21.0|
