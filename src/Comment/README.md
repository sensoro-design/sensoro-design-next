---
nav:
  title: 组件
  path: /components
---

# 评论 Comment

展示评论信息

## 代码演示

### 基本用法

<code src="./__demo__/basic.demo.tsx" />

### 对齐

<code src="./__demo__/align.demo.tsx" />

### 嵌套评论

<code src="./__demo__/inline.demo.tsx" />

### 配合List使用

<code src="./__demo__/list.demo.tsx" />

### 回复框

<code src="./__demo__/editor.demo.tsx" />

## API

### Comment

|参数名|描述|类型|默认值|
|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|
|className|节点类名|`string \| string[]`|`-`|
|actions|操作列表|`ReactNode`|`-`|
|author|作者名|`ReactNode`|`-`|
|avatar|头像|`ReactNode`|`-`|
|content|评论内容|`ReactNode`|`-`|
|datetime|时间描述|`ReactNode`|`-`|
|align|靠左/靠右 展示 datetime 和 actions|`\| 'left'\| 'right'\| {datetime?: 'left' \| 'right';actions?: 'left' \| 'right';}`|`-`|
