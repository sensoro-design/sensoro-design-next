/**
 * title: 基本用法
 * desc: 基本用法，随着页面滚动，锚点浮动在页面固定位置。
 */
import React from 'react';
import { Anchor } from '@sensoro-design/react';

export default () => {
  return (
    <Anchor offsetTop={60} style={{ backgroundColor: 'var(--color-bg-2)' }}>
      <Anchor.Link href="#Basic" title="Basic">
        <Anchor.Link href="#Static" title="Static">
          <Anchor.Link href="#Lineless-mode" title="Lineless mode" />
          <Anchor.Link href="#Affix" title="Affix" />
        </Anchor.Link>
      </Anchor.Link>
      <Anchor.Link href="#Scroll-boundary" title="Scroll boundary" />
      <Anchor.Link href="#Hash-mode" title="Hash mode" />
    </Anchor>
  );
};
