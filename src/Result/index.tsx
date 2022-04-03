import React, { forwardRef, useContext, PropsWithChildren } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';

import CheckOutlined from '@sensoro-design/icons/CheckOutlined';
import CloseOutlined from '@sensoro-design/icons/CloseOutlined';
import InfoOutlined from '@sensoro-design/icons/InfoOutlined';
import ExclamationOutlined from '@sensoro-design/icons/ExclamationOutlined';

import Image404 from './404';
import Image403 from './403';
import Image500 from './500';
import useMergeProps from '../_util/hooks/useMergeProps';

import type { ResultProps } from './interface';

const defaultIcons = {
  success: <CheckOutlined />,
  info: <InfoOutlined />,
  warning: <ExclamationOutlined />,
  error: <CloseOutlined />,
  '404': <Image404 />,
  '403': <Image403 />,
  '500': <Image500 />,
};

const defaultProps: ResultProps = {
  status: 'info',
};

function Result(baseProps: PropsWithChildren<ResultProps>, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<PropsWithChildren<ResultProps>>(
    baseProps,
    defaultProps,
    componentConfig?.Result
  );
  const {
    className,
    style,
    status,
    title,
    subTitle,
    extra,
    children,
    icon: propsIcon,
    ...rest
  } = props;

  const prefixCls = getPrefixCls('result');

  const icon = 'icon' in props ? propsIcon : defaultIcons[status];

  return (
    <div
      ref={ref}
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-is-${status}`]: status,
        },
        className
      )}
      style={style}
      {...rest}
    >
      {icon && (
        <div className={`${prefixCls}-icon`}>
          <span
            className={classNames(`${prefixCls}-icon-tip`, {
              [`${prefixCls}-icon-${status}`]: status,
              [`${prefixCls}-icon-custom`]: status === null,
            })}
          >
            {icon}
          </span>
        </div>
      )}
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      {subTitle && <div className={`${prefixCls}-subtitle`}>{subTitle}</div>}
      {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      {children && <div className={`${prefixCls}-content`}>{children}</div>}
    </div>
  );
}

const ResultRef = forwardRef<unknown, PropsWithChildren<ResultProps>>(Result);

ResultRef.displayName = 'Result';

export default ResultRef;

export type { ResultProps };
