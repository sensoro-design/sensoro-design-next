import React, { useContext, forwardRef } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { FooterProps } from './interface';

function Footer(props: FooterProps, ref) {
  const { className, children, ...rest } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('layout-footer');
  const classes = classNames(prefixCls, className);

  return (
    <footer ref={ref} {...rest} className={classes}>
      {children}
    </footer>
  );
}

const FooterComponent = forwardRef<unknown, FooterProps>(Footer);

FooterComponent.displayName = 'LayoutFooter';

export default FooterComponent;
