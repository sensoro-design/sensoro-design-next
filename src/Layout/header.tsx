import React, { useContext, forwardRef } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { HeaderProps } from './interface';

function Header(props: HeaderProps, ref) {
  const { getPrefixCls } = useContext(ConfigContext);
  const { className, children, ...rest } = props;
  const prefixCls = getPrefixCls('layout-header');
  const classes = classNames(prefixCls, className);

  return (
    <header ref={ref} {...rest} className={classes}>
      {children}
    </header>
  );
}

const HeaderComponent = forwardRef<unknown, HeaderProps>(Header);

HeaderComponent.displayName = 'LayoutHeader';

export default HeaderComponent;
