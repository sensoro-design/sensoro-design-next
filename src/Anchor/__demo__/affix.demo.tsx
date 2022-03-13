/**
 * title: 固钉样式
 * desc: 示例中的锚点将会出现在页面右侧。
 */
import React from 'react';
import { Anchor } from '@sensoro-design/react';

const AnchorLink = Anchor.Link;

export default () => {
  return (
    <Anchor
      offsetBottom={40}
      affixStyle={{ position: 'absolute', right: -170, top: '50%', zIndex: 1 }}
    >
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  )
}

