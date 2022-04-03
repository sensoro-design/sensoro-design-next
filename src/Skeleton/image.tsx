import React from 'react';
import classNames from '@pansy/classnames';

import type { SkeletonImageProps } from './interface';

export default function image({
  className,
  prefixCls,
  style,
  size,
  shape = 'square',
  position = 'left',
} : SkeletonImageProps) {
  const classes = classNames(
    `${prefixCls}-image`,
    {
      [`${prefixCls}-image-${position}`]: position,
      [`${prefixCls}-image-${shape}`]: shape,
      [`${prefixCls}-image-${size}`]: size,
    },
    className
  );

  return <div className={classes} style={style} />;
}
