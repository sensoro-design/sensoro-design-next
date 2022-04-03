import React, { useContext, PropsWithChildren } from 'react';
import classNames from '@pansy/classnames';
import ResizeObserver from '../_util/resizeObserver';
import { ConfigContext } from '../ConfigProvider';

import IconDragDot from '../../icon/react-icon/IconDragDot';

import HolderOutlined from '@sensoro-design/icons/HolderOutlined';
import CaretRightOutlined from '@sensoro-design/icons/CaretRightOutlined';
import CaretUpOutlined from '@sensoro-design/icons/CaretUpOutlined';
import CaretDownOutlined from '@sensoro-design/icons/CaretDownOutlined';
import CaretLeftOutlined from '@sensoro-design/icons/CaretLeftOutlined';

import { isFunction, isObject } from '../_util/is';

import type { ResizeTriggerProps } from './interface';

export default function ResizeTrigger(props: PropsWithChildren<ResizeTriggerProps>) {
  const {
    className,
    direction,
    icon,
    onMouseDown,
    onResize,
    children,
    collapsible = {},
    resizable = true,
    renderChildren,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('resizebox-trigger');
  const isHorizontal = direction === 'horizontal';
  const classes = classNames(
    prefixCls,
    `${prefixCls}-${isHorizontal ? 'horizontal' : 'vertical'}`,
    { [`${prefixCls}-not-resizable`]: !resizable },
    className
  );

  const prevCollapsedConfig: ResizeTriggerProps['collapsible']['prev'] = isObject(collapsible.prev)
    ? {
        ...collapsible.prev,
        icon: collapsible.prev.icon || (isHorizontal ? <CaretUpOutlined /> : <CaretLeftOutlined />),
      }
    : {};
  const nextCollapsedConfig: ResizeTriggerProps['collapsible']['next'] = isObject(collapsible.next)
    ? {
        ...collapsible.next,
        icon: collapsible.next.icon || (isHorizontal ? <CaretDownOutlined /> : <CaretRightOutlined />),
      }
    : {};

  const renderPrevCollapsedTrigger = () => {
    // 1. 传入了prev
    // 当前不在收缩状态，或者在反方向收缩状态时展示
    if (
      (prevCollapsedConfig.icon && !prevCollapsedConfig.collapsed) ||
      nextCollapsedConfig.collapsed
    ) {
      return (
        <span
          className={classNames(`${prefixCls}-icon`, `${prefixCls}-prev`)}
          onClick={prevCollapsedConfig.onClick}
        >
          {prevCollapsedConfig.icon}
        </span>
      );
    }
    return <span className={classNames(`${prefixCls}-icon-empty`)} />;
  };

  const renderNextCollapsedTrigger = () => {
    if (
      (nextCollapsedConfig.icon && !nextCollapsedConfig.collapsed) ||
      prevCollapsedConfig.collapsed
    ) {
      return (
        <span
          className={classNames(`${prefixCls}-icon`, classNames(`${prefixCls}-next`))}
          onClick={nextCollapsedConfig.onClick}
        >
          {nextCollapsedConfig.icon}
        </span>
      );
    }
    return <span className={classNames(`${prefixCls}-icon-empty`)} />;
  };

  const renderResizeTrigger = () => {
    if (resizable) {
      return (
        <span className={`${prefixCls}-icon`}>
          {icon || (isHorizontal ? <IconDragDot /> : <HolderOutlined />)}
        </span>
      );
    }
    return <span className={classNames(`${prefixCls}-icon-empty`)} />;
  };

  const prev = renderPrevCollapsedTrigger();
  const trigger = renderResizeTrigger();
  const next = renderNextCollapsedTrigger();

  const renderIcon = () => {
    return (
      <div className={`${prefixCls}-icon-wrapper`}>
        {prev}
        {trigger}
        {next}
      </div>
    );
  };

  if (!resizable) {
    return (
      <div className={classes}>
        {isFunction(renderChildren)
          ? renderChildren(prev, trigger, next)
          : children || renderIcon()}
      </div>
    );
  }

  return (
    <ResizeObserver onResize={onResize}>
      <div className={classes} onMouseDown={onMouseDown}>
        {isFunction(renderChildren)
          ? renderChildren(prev, trigger, next)
          : children || renderIcon()}
      </div>
    </ResizeObserver>
  );
}
