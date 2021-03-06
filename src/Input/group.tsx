import React, { useContext, PropsWithChildren } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { InputGroupProps } from './interface';

const Group = React.forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  (props: PropsWithChildren<InputGroupProps>, ref) => {
    const { getPrefixCls } = useContext(ConfigContext);

    const { className, style, children, compact, ...rest } = props;
    const prefixCls = getPrefixCls('input-group');
    const classes = classNames(
      prefixCls,
      {
        [`${prefixCls}-compact`]: compact,
      },
      className
    );

    return (
      <div ref={ref} className={classes} style={style} {...rest}>
        {children}
      </div>
    );
  }
);

Group.displayName = 'InputGroup';

export default Group;

export { InputGroupProps };
