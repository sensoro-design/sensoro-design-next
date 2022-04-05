<div align="center">
  <a href="https://design.sensoro.design" target="_blank">
    <img alt="Sensoro Design Logo" width="200" src="https://avatars.githubusercontent.com/u/99242734?s=200&v=4"/>
  </a>
</div>

<div align="center">
  <h1>Sensoro Design</h1>
</div>

<div align="center">
升哲科技 React UI 组件库。

<br />

[![NPM version][npm-image]][npm-url] 
[![NPM downloads][download-image]][download-url]
</div>

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🎨 深入每个细节的主题定制能力。

## 📦 安装

```bash
npm install @sensoro-design/react --save
```

```bash
yarn add @sensoro-design/react
```

```bash
pnpm i @sensoro-design/react
```

## 🔨 示例

```jsx
import { Button, DatePicker } from '@sensoro-design/react';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
  </>
);
```

引入样式：

```jsx
import '@sensoro-design/react/dist/css/sen.min.css'; // or '@sensoro-design/react/dist/css/index.less'
```

[npm-image]: https://img.shields.io/npm/v/@sensoro-design/react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@sensoro-design/react
[download-image]: https://img.shields.io/npm/dm/@sensoro-design/react.svg?style=flat-square
[download-url]: https://npmjs.org/package/@sensoro-design/react
