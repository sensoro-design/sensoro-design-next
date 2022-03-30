/**
 * title: 点击锚点不记录历史
 * desc: 可以设置点击锚点而不改变浏览器历史。
 */
import React from 'react';
import { Anchor } from '@sensoro-design/react';

export default () => {
  return (
    <Anchor affix={false} hash={false}>
      <Anchor.Link href="#Basic" title="Basic" />
      <Anchor.Link href="#Static" title="Static" />
      <Anchor.Link href="#Lineless-mode" title="Lineless mode" />
      <Anchor.Link href="#Affix" title="Affix" />
      <Anchor.Link href="#Scroll-boundary" title="Scroll boundary" />
      <Anchor.Link href="#Hash-mode" title="Hash mode" />
    </Anchor>
  )
}

