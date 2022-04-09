---
nav:
  title: 组件
  path: /components
---

# 错误隔离 ErrorBoundary

## 代码演示

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 自定义Result 

<code src="./__demo__/result.demo.tsx" />

### 自定义错误页面

<code src="./__demo__/custom.demo.tsx" />

## API

### ErrorBoundary

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|fallback|自定义节点样式|`ComponentType<{ errorInfo?: ErrorInfo; errorMessage?: string}>`|-|-|
|resultProps|自定义结果组件|`ResultProps`|-|-|
|onError|异常触发的回调|`(error: Error, info: ErrorInfo) => void;`|-|-|
