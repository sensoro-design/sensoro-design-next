import React, { useState, useContext, forwardRef, ReactElement } from 'react';
import classNames from '@pansy/classnames';
import Sider, { SiderContext } from './sider';
import Header from './header';
import Footer from './footer';
import Content from './content';
import { ConfigContext } from '../ConfigProvider';
import useMergeProps from '../_util/hooks/useMergeProps';

import type { LayoutProps } from './interface';

export interface LayoutState {
  siders: string[];
}

export { SiderContext };

function Layout(baseProps: LayoutProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<LayoutProps>(baseProps, {}, componentConfig?.Layout);
  const { className, hasSider, children, ...rest } = props;

  const [siders, setSiders] = useState([]);

  const prefixCls = getPrefixCls('layout');
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-has-sider`]: typeof hasSider === 'boolean' ? hasSider : siders.length > 0,
    },
    className
  );

  return (
    <section ref={ref} {...rest} className={classes}>
      {React.Children.map(children, (child: ReactElement) => {
        if (child && child.props && child.props.sign === 'sider') {
          return React.cloneElement(child, {
            onSiderMount: (id) => setSiders([...siders, id]),
            onSiderUnmount: (id) => setSiders(siders.filter((currentId) => currentId !== id)),
          });
        }
        return child;
      })}
    </section>
  );
}

const ForwardRefLayout = forwardRef<unknown, LayoutProps>(Layout);

const LayoutComponent = ForwardRefLayout as typeof ForwardRefLayout & {
  Sider: typeof Sider;
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
};

LayoutComponent.displayName = 'Layout';

LayoutComponent.Sider = Sider;
LayoutComponent.Header = Header;
LayoutComponent.Footer = Footer;
LayoutComponent.Content = Content;

export default LayoutComponent;
