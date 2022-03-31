import React, { useContext, forwardRef } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';

import type { ContentProps } from './interface';

function Content(props: ContentProps, ref) {
  const { className, children, ...rest } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('layout-content');
  const classes = classNames(prefixCls, className);

  return (
    <main ref={ref} {...rest} className={classes}>
      {children}
    </main>
  );
}

const contentComponent = forwardRef<unknown, ContentProps>(Content);

contentComponent.displayName = 'LayoutContent';

export default contentComponent;
