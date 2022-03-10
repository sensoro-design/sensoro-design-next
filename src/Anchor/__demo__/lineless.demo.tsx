/**
 * title: 无轴线模式
 * desc: 设置 `lineless` 时，可以使用无左侧轴线的锚点样式。
 */
import React from 'react';
import { Anchor } from '@sensoro-design/react';

const AnchorLink = Anchor.Link;

export default () => {
  return (
    <Anchor affix={false} lineless>
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  )
}

