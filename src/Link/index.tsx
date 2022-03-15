import React, { forwardRef, useContext, PropsWithChildren } from 'react';
import IconLink from '../../icon/react-icon/IconLink';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { LinkProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

const defaultProps: LinkProps = {
  hoverable: false,
};

function Link(baseProps: PropsWithChildren<LinkProps>, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<LinkProps>(baseProps, defaultProps, componentConfig?.Link);
  const { className, style, children, icon, status, disabled, hoverable, ...rest } = props;

  const prefixCls = getPrefixCls('link');

  const TagWrapper = 'href' in props ? 'a' : 'span';

  return (
    <TagWrapper
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-is-${status}`]: status,
          [`${prefixCls}-with-icon`]: icon,
          [`${prefixCls}-hoverless`]: !hoverable,
        },
        className
      )}
      ref={ref}
      {...rest}
      style={style}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          e.stopPropagation();
        } else {
          props.onClick && props.onClick(e);
        }
      }}
    >
      {icon ? (
        <span className={`${prefixCls}-icon`}>{icon === true ? <IconLink /> : icon}</span>
      ) : null}
      {children}
    </TagWrapper>
  );
}

const LinkRef = forwardRef(Link);

LinkRef.displayName = 'Link';

export default LinkRef;

export type { LinkProps, LinkStatus } from './interface';
