import React, { useState, useContext, useEffect, ReactNode, forwardRef } from 'react';
import IconLoading from './icon-loading';
import Group from './group';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { ButtonProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

import type { CompoundedComponent } from './interface';

const regexTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

function processChildren(children?: ReactNode) {
  const childrenList = [];
  let isPrevChildPure = false;
  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number';
    if (isCurrentChildPure && isPrevChildPure) {
      const lastIndex = childrenList.length - 1;
      const lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = `${lastChild}${child}`;
    } else {
      childrenList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childrenList, (child) =>
    typeof child === 'string' ? <span>{child}</span> : child
  );
}

const defaultProps: ButtonProps = {
  htmlType: 'button',
  type: 'default',
  shape: 'square',
};

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (baseProps, ref) => {
  const {
    getPrefixCls,
    size: ctxSize,
    autoInsertSpaceInButton,
    componentConfig,
  } = useContext(ConfigContext);
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, componentConfig?.Button);
  const {
    style,
    className,
    children,
    htmlType,
    bordered,
    type,
    status,
    size,
    shape,
    href,
    anchorProps,
    disabled,
    loading,
    loadingFixedWidth,
    icon,
    iconOnly,
    onClick,
    long,
    ...rest
  } = props;

  const iconNode = loading ? <IconLoading /> : icon;

  const [isTwoCNChar, setIsTwoCNChar] = useState(false);
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  useEffect(() => {
    if (autoInsertSpaceInButton && buttonRef && buttonRef.current) {
      const textContent = buttonRef.current.textContent;
      if (regexTwoCNChar.test(textContent)) {
        if (!isTwoCNChar) {
          setIsTwoCNChar(true);
        }
      } else if (isTwoCNChar) {
        setIsTwoCNChar(false);
      }
    }
  }, [buttonRef, autoInsertSpaceInButton]);

  const prefixCls = getPrefixCls('btn');
  const _type = type === 'default' ? 'secondary' : type;
  const classes = classNames(
    prefixCls,
    `${prefixCls}-${_type}`,
    `${prefixCls}-size-${size || ctxSize}`,
    `${prefixCls}-shape-${shape}`,
    {
      [`${prefixCls}-hide-bordered`]: bordered === false && _type === 'dashed',
      [`${prefixCls}-long`]: long,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-loading-fixed-width`]: loadingFixedWidth,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-link`]: href,
      [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-two-chinese-chars`]: isTwoCNChar,
    },
    className
  );

  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && onClick(event);
  };

  const InnerContent = (
    <>
      {iconNode}
      {processChildren(children)}
    </>
  );

  if (href) {
    const _anchorProps = { ...anchorProps };
    if (disabled) {
      delete _anchorProps.href;
    } else {
      _anchorProps.href = href;
    }
    return (
      <a
        ref={buttonRef}
        {...rest}
        {..._anchorProps}
        style={style}
        className={classes}
        onClick={handleClick}
      >
        {InnerContent}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      {...rest}
      style={style}
      className={classes}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
    >
      {InnerContent}
    </button>
  );
}

const Button = forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

Button.displayName = 'Button';

Button.__SEN_BUTTON = true;
Button.Group = Group;

export default Button;
