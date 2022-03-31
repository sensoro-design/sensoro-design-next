import React, { CSSProperties, PropsWithChildren } from 'react';
import Trigger, { TriggerProps } from '../Trigger';
import classNames from '@pansy/classnames';

interface TriggerForToolbarProps {
  style?: CSSProperties;
  className?: string | string[];
  prefixCls: string;
  popup: TriggerProps['popup'];
}

export const TriggerForToolbar = (props: PropsWithChildren<TriggerForToolbarProps>) => {
  const { style, className, prefixCls, popup, children } = props;
  const classes = classNames(`${prefixCls}-trigger`, className);

  return (
    <Trigger style={style} className={classes} popup={popup} showArrow>
      {children}
    </Trigger>
  );
};
