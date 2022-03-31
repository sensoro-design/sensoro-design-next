import React, { useContext } from 'react';
import classNames from '@pansy/classnames';

import { ConfigContext } from '../ConfigProvider';
import { ButtonGroupProps } from './interface';

function Group(props: ButtonGroupProps, ref) {
  const { className, style, children } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('btn-group');
  const classes = classNames(prefixCls, className);

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}

const GroupComponent = React.forwardRef<unknown, ButtonGroupProps>(Group);

GroupComponent.displayName = 'ButtonGroup';

export default GroupComponent;

export { ButtonGroupProps };
