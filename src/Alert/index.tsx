import React, { useState, useContext, ReactNode, forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { AlertProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

import InfoCircleFilled from '@sensoro-design/icons/InfoCircleFilled';
import CloseCircleFilled from '@sensoro-design/icons/CloseCircleFilled';
import CheckCircleFilled from '@sensoro-design/icons/CheckCircleFilled';
import CloseOutlined from '@sensoro-design/icons/CloseOutlined';
import ExclamationCircleFilled from '@sensoro-design/icons/ExclamationCircleFilled';

const defaultProps: AlertProps = {
  showIcon: true,
  type: 'info',
};

function Alert(baseProps: AlertProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<AlertProps>(baseProps, defaultProps, componentConfig?.Alert);
  const {
    style,
    className,
    action,
    type = 'info',
    title,
    content,
    icon,
    showIcon,
    closable,
    closeable,
    afterClose,
    onClose,
    closeElement,
    banner,
  } = props;

  const prefixCls = getPrefixCls('alert');
  const [visible, setVisible] = useState<boolean>(true);

  function renderIcon(type: string | void): ReactNode | null {
    if (icon) {
      return icon;
    }
    switch (type) {
      case 'info':
        return <InfoCircleFilled />;
      case 'success':
        return <CheckCircleFilled />;
      case 'warning':
        return <ExclamationCircleFilled />;
      case 'error':
        return <CloseCircleFilled />;
      default:
        return null;
    }
  }

  function onHandleClose(e) {
    setVisible(false);
    onClose && onClose(e);
  }

  const classes = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-title`]: title,
      [`${prefixCls}-banner`]: banner,
    },
    className
  );
  const _closable = 'closeable' in props ? closeable : closable;

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      classNames="zoomInTop"
      unmountOnExit
      onExited={() => {
        afterClose && afterClose();
      }}
    >
      <div ref={ref} style={style} className={classes}>
        {showIcon && <div className={`${prefixCls}-icon-wrapper`}>{renderIcon(type)}</div>}
        <div className={`${prefixCls}-content-wrapper`}>
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
          {content && <div className={`${prefixCls}-content`}>{content}</div>}
        </div>
        {action && <div className={`${prefixCls}-action`}>{action}</div>}
        {_closable && (
          <button onClick={onHandleClose} className={`${prefixCls}-close-btn`}>
            {closeElement || <CloseOutlined />}
          </button>
        )}
      </div>
    </CSSTransition>
  );
}

const AlertComponent = forwardRef<unknown, AlertProps>(Alert);

AlertComponent.displayName = 'Alert';

export default AlertComponent;

export { AlertProps };
