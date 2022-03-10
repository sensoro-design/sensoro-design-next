/**
 * title: 基本用法
 * desc: 基本用法，随着页面滚动，锚点浮动在页面固定位置。
 */
import React from 'react';
import { Anchor } from '@sensoro-design/react';

const AnchorLink = Anchor.Link;

export default () => {
  return (
    <Anchor offsetTop={60} style={{ backgroundColor: 'var(--color-bg-2)' }}>
      <AnchorLink href="#Basic" title="Basic">
        <AnchorLink href="#Static" title="Static">
          <AnchorLink href="#Lineless-mode" title="Lineless mode" />
          <AnchorLink href="#Affix" title="Affix" />
        </AnchorLink>
      </AnchorLink>
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  )
}

