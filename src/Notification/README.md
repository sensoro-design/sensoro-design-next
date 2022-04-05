---
nav:
  title: 组件
  path: /components
---

# 通知提醒框 Notification

全局展示通知提醒，将信息及时有效的传达给用户。

## API

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 自定义操作按钮

<code src="./__demo__/btn.demo.tsx" />

### 自定义图标

<code src="./__demo__/icon.demo.tsx" />

### 通知提醒位置

<code src="./__demo__/position.demo.tsx" />

### 自定义样式

<code src="./__demo__/style.demo.tsx" />

### 不同类型的通知

<code src="./__demo__/type.demo.tsx" />

### 更新延迟

<code src="./__demo__/update-duration.demo.tsx" />

### 更新通知内容

<code src="./__demo__/update-notification.demo.tsx" />

### Notification

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|title|通知标题|`ReactNode \| string`|`-`|
|content|通知内容|`ReactNode \| string` **(必填)**|`-`|
|showIcon|是否显示图标|`boolean`|`true`|
|icon|自定义图标|`ReactNode`|`-`|
|duration|自动关闭的时间，单位为 `ms`|`number`|`3000`|
|onClose|关闭时的回调|`() => void`|`-`|
|id|当前通知的唯一标识，可以用来更新消息|`string`|`-`|
|position|消息的位置，分为 `topLeft` 左上方、`topRight` 右上方、`bottomLeft` 左下方和 `bottomRight` 右下方|`'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'`|`-`|
|btn|添加操作按钮|`ReactNode`|`-`|
|closable|是否显示关闭按钮|`boolean`|`-`|

### 使用方法

- `Notification.info(config)`
- `Notification.success(config)`
- `Notification.warning(config)`
- `Notification.error(config)`
- `Notification.normal(config)`
- `Notification.remove(id)`
- `Notification.clear()`

### 全局设置

`Notification.config(options)`

|参数名|描述|类型|默认值|
|---|:---:|:---:|---:|
|maxCount|最大通知数量|`number`|`-`|
|getContainer|放置通知的容器|`() => HTMLElement`|`() => document.body`|
|duration|通知自动关闭的时间|`number`|`3000`|
|prefixCls|类名前缀|`string`|`arco`|
