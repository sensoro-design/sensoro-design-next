/**
 * title: 设置锚点滚动偏移量
 * desc: 可以设置 `boundary` 来定制锚点滚动偏移量。
 */
import React from 'react';
import { Anchor } from '@sensoro-design/react';

const AnchorLink = Anchor.Link;

export default () => {
  return (
    <Anchor affix={false} boundary="center">
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  )
}

