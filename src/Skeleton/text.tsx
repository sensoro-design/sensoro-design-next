import React from 'react';
import classNames from '@pansy/classnames';
import { isArray } from '../_util/is';

import type { SkeletonTextProps } from './interface';

export default function text(props: SkeletonTextProps) {
  const { style, width = '60%', rows = 3, className, prefixCls } = props;
  const classes = classNames(`${prefixCls}-text`, className);
  const nodes = [] as JSX.Element[];

  function getTextWidth(index: number) {
    if (isArray(width)) {
      return width[index];
    }
    if (rows - 1 === index) {
      return width;
    }

    return undefined;
  }

  for (let i = 0; i < (rows as number); i++) {
    nodes.push(
      <li className={`${prefixCls}-text-row`} key={i} style={{ width: getTextWidth(i) }} />
    );
  }

  return (
    <ul className={classes} style={style}>
      {nodes}
    </ul>
  );
}
