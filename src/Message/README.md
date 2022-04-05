---
nav:
  title: 组件
  path: /components
---
# 全局提示 Message

由用户的操作触发的轻量级全局反馈。

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 不同类型

<code src="./__demo__/type.demo.tsx" />

### 自定义图标

<code src="./__demo__/icon.demo.tsx" />

### 更新全局提醒内容

<code src="./__demo__/update-message.demo.tsx" />

### 更新延时

<code src="./__demo__/update-duration.demo.tsx" />

### 手动控制关闭

<code src="./__demo__/hide.demo.tsx" />

### 显示关闭按钮

<code src="./__demo__/closable.demo.tsx" />

## API

### Message

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|transitionClassNames|消息弹出动画的类名，见 react-transition-group 的 `classNames`|`string`|`-`|
|content|消息内容|`ReactNode \| string` **(必填)**|`-`|
|showIcon|是否显示图标|`boolean`|`true`|
|icon|自定义图标|`ReactNode`|`-`|
|duration|自动关闭的时间，单位为 `ms`|`number`|`3000`|
|onClose|关闭时的回调|`() => void`|`-`|
|id|当前消息的唯一标识，可以用来更新消息|`string`|`-`|
|position|消息的位置，分为 `top` 上方和 `bottom` 下方|`'top' \| 'bottom'`|`-`|
|closable|是否显示关闭按钮|`boolean`|`-`|

### 使用方法

- `Message.info(content: String)` / `Message.info(config: Object)`
- `Message.success(content: String)` / `Message.success(config: Object)`
- `Message.warning(content: String)` / `Message.warning(config: Object)`
- `Message.error(content: String)` / `Message.error(config: Object)`
- `Message.normal(content: String)` / `Message.normal(config: Object)`
- `Message.loading(content: String)` / `Message.loading(config: Object)`
- `Message.clear()`

### 全局设置

`Message.config(options)`

|参数名|描述|类型|默认值|
|---|:---:|:---:|---:|
|maxCount|最大通知数量|`number`|`-`|
|getContainer|放置通知的容器|`() => HTMLElement`|`() => document.body`|
|duration|通知自动关闭的时间|`number`|`3000`|
|prefixCls|类名前缀|`string`|`sen`|

