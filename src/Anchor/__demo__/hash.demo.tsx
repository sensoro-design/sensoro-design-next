/**
 * title: 点击锚点不记录历史
 * desc: 可以设置点击锚点而不改变浏览器历史。
 */
import React from 'react';
import { Anchor } from '@sensoro-design/react';

const AnchorLink = Anchor.Link;

export default () => {
  return (
    <Anchor affix={false} hash={false}>
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  )
}

