import React, { useContext, forwardRef } from 'react';
import classNames from '@pansy/classnames'
import { ConfigContext } from '../ConfigProvider';
import { TypographyProps } from './interface';

function Typography(props: TypographyProps, ref) {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('typography');

  const { className, style, children } = props;

  const classes = classNames(prefixCls, className);

  return (
    <article ref={ref} style={style} className={classes}>
      {children}
    </article>
  );
}

const TypographyComponent = forwardRef<unknown, TypographyProps>(Typography);

TypographyComponent.displayName = 'Typography';

export default TypographyComponent;
